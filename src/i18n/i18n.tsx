/* eslint-disable react-refresh/only-export-components */
import {createContext, type ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {de} from './de';
import {en} from './en';
import {es} from './es';
import {fr} from './fr';
import {hi} from './hi';
import {id} from './id';
import {it} from './it';
import {ja} from './ja';
import {ko} from './ko';
import {pl} from './pl';
import {ptBR} from './pt-BR';
import {ptPT} from './pt-PT';
import {ru} from './ru';
import {tr} from './tr';
import {uk} from './uk';
import {vi} from './vi';
import {zhCN} from './zh-CN';

export type TranslationParams = Record<string, string | number | undefined>;

export type TranslationKey = string;

interface I18nContextValue {
	t: (key: TranslationKey, params?: TranslationParams) => string;
	locale: string;
	setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

// Use a looser value type for translations to avoid requiring identical string literal
// types between different language modules (en/de). Keep Locale as a literal union.
type Locale =
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'hi'
	| 'id'
	| 'it'
	| 'ja'
	| 'ko'
	| 'pl'
	| 'pt-BR'
	| 'pt-PT'
	| 'ru'
	| 'tr'
	| 'uk'
	| 'vi'
	| 'zh-CN';

type TranslationValue = string | TranslationRecord;
type TranslationRecord = Record<string, TranslationValue>;

const translations: { [K in Locale]: TranslationRecord } = {
	de,
	en,
	es,
	fr,
	hi,
	id,
	it,
	ja,
	ko,
	pl,
	'pt-BR': ptBR,
	'pt-PT': ptPT,
	ru,
	tr,
	uk,
	vi,
	'zh-CN': zhCN,
};

export type {Locale};

export const SUPPORTED_LOCALES: Record<Locale, { label: string }> = {
	de: {label: 'Deutsch'},
	en: {label: 'English'},
	es: {label: 'Español'},
	fr: {label: 'Français'},
	hi: {label: 'हिन्दी'},
	id: {label: 'Bahasa Indonesia'},
	it: {label: 'Italiano'},
	ja: {label: '日本語'},
	ko: {label: '한국어'},
	pl: {label: 'Polski'},
	'pt-BR': {label: 'Português (Brasil)'},
	'pt-PT': {label: 'Português'},
	ru: {label: 'Русский'},
	tr: {label: 'Türkçe'},
	uk: {label: 'Українська'},
	vi: {label: 'Tiếng Việt'},
	'zh-CN': {label: '中文'},
};

function detectInitialLocale(): Locale {
	// Prefer stored preference
	if (typeof window !== 'undefined') {
		try {
			const stored = window.localStorage.getItem('hecate-locale') as Locale | null;
			if (stored && stored in translations) return stored;
		} catch {
			// ignore
		}
	}

	// Browser language
	if (typeof navigator !== 'undefined') {
		const candidates: string[] = [];
		const languageList = (navigator as Navigator & { languages?: readonly string[] }).languages;
		if (Array.isArray(languageList)) {
			candidates.push(...languageList);
		}
		if (navigator.language) candidates.push(navigator.language);

		for (const raw of candidates) {
			if (!raw) continue;
			// Try full tag first (e.g. 'zh-CN'), then fallback to base language (e.g. 'zh')
			if (raw in translations) return raw as Locale;
			const base = raw.toLowerCase().split('-')[0];
			if (base in translations) return base as Locale;
		}
	}

	return 'en';
}

function resolveKey(dict: TranslationRecord, key: string): string | undefined {
	const parts = key.split('.');
	let current: TranslationValue | undefined = dict;
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
	const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

	useEffect(() => {
		try {
			window.localStorage.setItem('hecate-locale', locale);
		} catch {
			// ignore
		}
	}, [locale]);

	const setLocale = (next: string) => {
		if (next in translations) {
			setLocaleState(next as Locale);
		}
	};

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