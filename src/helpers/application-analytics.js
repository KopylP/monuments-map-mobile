// import { logEvent } from 'expo-firebase-analytics';
import { canLogUserEvents } from '../config';

export function logApplicationEvent(eventName, params = {}) {
    if (canLogUserEvents) {
        // logEvent(eventName, params);
    }
}