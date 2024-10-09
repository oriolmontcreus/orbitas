import PocketBase from 'pocketbase';
import { POCKETBASE_DEV_API_URL } from '@constants/api';
import type { UserRegisterPayload } from '$lib/types/auth';

//TODO: DO WE HAVE TO EXPORT AND REUSE THIS INSTANCE OR JUST CREATE A NEW ONE EACH TIME?
export const pb = new PocketBase(POCKETBASE_DEV_API_URL);

export function isUserLoggedIn() {
  console.log("Auth Store Valid:", pb.authStore.isValid);
  console.log("Auth Store Token:", pb.authStore.token);
  console.log("Auth Store Model ID:", pb.authStore.model?.id);
  return pb.authStore.isValid;
}

export function getCurrentUser() {
  return pb.authStore.model;
}

export async function logout() {
  console.log("Logging out...");
  pb.authStore.clear();
  console.log("After logout - Auth Store Valid:", pb.authStore.isValid);
  console.log("After logout - Auth Store Token:", pb.authStore.token);
  console.log("After logout - Auth Store Model ID:", pb.authStore.model?.id);
}

export async function login(username_or_email: string, password: string) {
  await pb.collection('users').authWithPassword(username_or_email, password);
}

export async function register(payload: UserRegisterPayload) {
  console.log('payload', payload);
  await pb.collection('users').create(payload);
}