import { writable } from 'svelte/store';
import { showPromiseToast, showErrorToast, showSuccessToast } from '@services/toastService';
import { navigate } from 'astro:transitions/client';

export const isLoading = writable(false);

export interface RequestAction {
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