import { writable } from 'svelte/store';
import { showPromiseToast } from '@services/toastService';

export const isLoading = writable(false);

interface RequestAction {
  perform: () => Promise<any>;
  successMsg: string;
  errorMsg: string;
}

export function handleRequest({ perform, successMsg, errorMsg }: RequestAction) {
  isLoading.set(true);

  const promise = perform();

  showPromiseToast(promise, {
    loading: 'Loading...',
    success: () => successMsg,
    error: errorMsg,
  });

  promise.finally(() => {
    isLoading.set(false);
  });
}