import {initializeApp} from 'firebase/app';
import {type Analytics, getAnalytics, isSupported} from 'firebase/analytics';
import {firebaseConfig} from './firebaseConfig.local';

// Initialize Firebase app once at module load.
export const firebaseApp = initializeApp(firebaseConfig);

// Lazily detect and initialize Analytics in a way that is safe for unsupported environments.
export const analyticsPromise: Promise<Analytics | null> = isSupported()
	.then((supported) => {
		if (!supported) {
			return null;
		}
		try {
			return getAnalytics(firebaseApp);
		} catch (error) {
			console.warn('[Firebase] Analytics initialization failed:', error);
			return null;
		}
	})
	.catch((error) => {
		console.warn('[Firebase] Analytics support check failed:', error);
		return null;
	});
