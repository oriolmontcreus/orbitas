import PocketBase from 'pocketbase';
import { POCKETBASE_DEV_API_URL } from '@constants/api';
import type { UserRegisterPayload } from '$lib/types/auth';

//TODO: DO WE HAVE TO EXPORT AND REUSE THIS INSTANCE OR JUST CREATE A NEW ONE EACH TIME?
export const pb = new PocketBase(POCKETBASE_DEV_API_URL);

export function isUserLoggedIn() {
  return pb.authStore.isValid;
}

export function getCurrentUser() {
  return pb.authStore.model;
}

export async function logout() {
  pb.authStore.clear();
}

export async function loginUser(username_or_email: string, password: string) {
  await pb.collection('users').authWithPassword(username_or_email, password);
}

export async function registerUser(payload: UserRegisterPayload) {
  await pb.collection('users').create(payload);
}