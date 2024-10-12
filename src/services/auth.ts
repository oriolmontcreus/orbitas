import PocketBase from 'pocketbase';
import { writable, type Writable } from 'svelte/store';
import { POCKETBASE_DEV_API_URL } from '@constants/api';
import type { UserRegisterPayload } from '$lib/types/auth';
import type { User } from '$lib/models/User';

//TODO: DO WE HAVE TO EXPORT AND REUSE THIS INSTANCE OR JUST CREATE A NEW ONE EACH TIME?
export const pb = new PocketBase(POCKETBASE_DEV_API_URL);
export const currentUser: Writable<User | null> = writable(pb.authStore.model as User | null);

pb.authStore.onChange(() => {
  currentUser.set(pb.authStore.model as User | null);
});

export function isUserLoggedIn() {
  return pb.authStore.isValid;
}

export async function logout() {
  pb.authStore.clear();
}

export async function login(username_or_email: string, password: string) {
  await pb.collection('users').authWithPassword(username_or_email, password);
}

export async function register(payload: UserRegisterPayload) {
  await pb.collection('users').create(payload);
}