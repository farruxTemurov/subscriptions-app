import type { Subscription } from '../types/subscription';
import { mockSubscriptions } from '../data/mock-data';

/**
 * Mimics an API call that fetches a list of subscriptions.
 * Waits 1 second before resolving to simulate network delay.
 * Can randomly throw an error (disabled by default).
 */
export async function fetchSubscriptions(): Promise<Subscription[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false; // set true or randomize to test error handling
      if (shouldFail) {
        reject(new Error('Failed to fetch subscriptions.'));
      } else {
        resolve(mockSubscriptions as Subscription[]);
      }
    }, 1000);
  });
}
