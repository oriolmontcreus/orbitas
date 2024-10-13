import { showSuccessToast, showErrorToast } from "$lib/services/toastService";
import { navigate } from "astro:transitions/client";
import { isLoading, type RequestAction } from "./handleRequest";

interface RequestActionWithRedirect extends RequestAction {
    redirectUrl: string;
    successMsg: string;
}

/**
 * 
 * Redirects to the specified URL only if request was sucessful. Shows success toast AFTER redirection.
 */
export function handleRequestAndRedirect({ perform, successMsg, errorMsg, redirectUrl }: RequestActionWithRedirect) {
    isLoading.set(true);
    const promise = perform();
    promise
        .then(() => {
            navigate(redirectUrl);
            setTimeout(() => {
                showSuccessToast(successMsg);
            }, 200);
        })
        .catch((error) => {
            showErrorToast(errorMsg);
            console.error(`${errorMsg}: ${error}`);
        })
        .finally(() => {
            isLoading.set(false);
        });
}