import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './firebaseConfig';

// Initialize Firebase app once at module load.
export const firebaseApp = initializeApp(firebaseConfig);

// Analytics is intentionally disabled for this setup tool.
export const analyticsPromise = Promise.resolve(null);
