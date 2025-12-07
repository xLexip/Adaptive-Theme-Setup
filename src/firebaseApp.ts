import {initializeApp} from 'firebase/app';
import {type Analytics, getAnalytics, isSupported} from 'firebase/analytics';

// Firebase configuration for dev-lexip-hecate project.
// Note: In a real-world app, consider moving these values into environment variables
// (VITE_FIREBASE_*) instead of hard-coding them.
const firebaseConfig = {
	apiKey: 'AIzaSyCjBfJzf1eiEuWW3RqkrkygEbMmjqCVI-8',
	authDomain: 'dev-lexip-hecate.firebaseapp.com',
	projectId: 'dev-lexip-hecate',
	storageBucket: 'dev-lexip-hecate.firebasestorage.app',
	messagingSenderId: '49709844519',
	appId: '1:49709844519:web:f97d13ec96c8a513c9a602',
	measurementId: 'G-BFR0ES8Z94',
} as const;

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

