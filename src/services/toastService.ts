import { toast } from 'svelte-sonner';

export function showSuccessToast(message: string, options: Record<string, unknown> = {}) {
    toast.success(message, options);
}

export function showInfoToast(message: string, options: Record<string, unknown> = {}) {
    toast.info(message, options);
}

export function showErrorToast(message: string, options: Record<string, unknown> = {}) {
    toast.error(message, options);
}

export function showPromiseToast(
    promise: Promise<any>,
    messages: { loading: string, success: (data: any) => string, error: string }
) {
    toast.promise(
        promise,
        {
            loading: messages.loading,
            success: messages.success,
            error: messages.error
        }
    );
}