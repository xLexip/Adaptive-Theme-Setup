import {logEvent} from 'firebase/analytics';
import {analyticsPromise} from '../firebaseApp';
import {useCallback} from 'react';

export const useAnalytics = () => {
	const logAnalyticsEvent = useCallback(async (eventName: string, eventParams?: Record<string, any>) => {
		const analytics = await analyticsPromise;
		if (analytics) {
			logEvent(analytics, eventName, eventParams);
		}
	}, []);

	return {logEvent: logAnalyticsEvent};
};

