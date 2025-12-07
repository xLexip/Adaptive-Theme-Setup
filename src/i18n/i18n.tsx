import {createContext, type ReactNode, useContext, useMemo, useState} from 'react';
import {en} from './en';

export type TranslationParams = Record<string, string | number | undefined>;

export type TranslationKey = string;

interface I18nContextValue {
	t: (key: TranslationKey, params?: TranslationParams) => string;
	locale: string;
	setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const translations: Record<string, typeof en> = {
	en,
};

function resolveKey(dict: typeof en, key: string): string | undefined {
	const parts = key.split('.');
	let current: any = dict;
	for (const part of parts) {
		if (current && typeof current === 'object' && part in current) {
			current = current[part];
		} else {
			return undefined;
		}
	}
	return typeof current === 'string' ? current : undefined;
}

function interpolate(template: string, params?: TranslationParams): string {
	if (!params) return template;
	return template.replace(/{{(.*?)}}/g, (match, key) => {
		const trimmed = String(key).trim();
		const value = params[trimmed];
		return value === undefined || value === null ? match : String(value);
	});
}

export const I18nProvider = ({children}: { children: ReactNode }) => {
	const [locale, setLocale] = useState<string>('en');

	const value = useMemo<I18nContextValue>(() => {
		const dict = translations[locale] ?? en;

		const t = (key: TranslationKey, params?: TranslationParams): string => {
			const resolved = resolveKey(dict, key) ?? key;
			return interpolate(resolved, params);
		};

		return {t, locale, setLocale};
	}, [locale]);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
	const ctx = useContext(I18nContext);
	if (!ctx) {
		throw new Error('useI18n must be used within an I18nProvider');
	}
	return ctx;
};
