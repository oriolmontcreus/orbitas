import { writable } from 'svelte/store';
import { showPromiseToast, showErrorToast } from '@services/toastService';

export const isLoading = writable(false);

interface RequestAction {
  perform: () => Promise<any>;
  successMsg?: string;
  errorMsg: string;
}

export function handleRequest({ perform, successMsg, errorMsg }: RequestAction) {
  isLoading.set(true);

  const promise = perform();

  if (successMsg) {
    showPromiseToast(promise, {
      loading: 'Loading...',
      success: () => successMsg,
      error: errorMsg,
    });
  } else {
    promise.catch((error) => {
      showErrorToast(errorMsg);
      console.error(`${errorMsg}: ${error}`);
    });
  }

  promise.finally(() => {
    isLoading.set(false);
  });
}