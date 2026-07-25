import {logEvent} from 'firebase/analytics';
import {analyticsPromise} from '../services/firebase/firebaseApp';
import {useCallback} from 'react';

type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

export const useAnalytics = () => {
	const logAnalyticsEvent = useCallback(async (eventName: string, eventParams?: AnalyticsEventParams) => {
		const analytics = await analyticsPromise;
		if (analytics) {
			logEvent(analytics, eventName, eventParams);
		}
	}, []);

	return {logEvent: logAnalyticsEvent};
};

