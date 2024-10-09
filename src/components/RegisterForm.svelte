<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { register } from "@services/auth";
  
    export type UserRegisterPayload = {
      username: string;
      email: string;
      password: string;
      passwordConfirm: string;
    };
  
    let userRegisterData: UserRegisterPayload = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  
    function handleSubmit(event: Event): void {
      event.preventDefault();
      if (userRegisterData.password !== userRegisterData.passwordConfirm) {
        console.log('Passwords do not match.');
        return;
      }
      console.log(`Username: ${userRegisterData.username}, Email: ${userRegisterData.email}, Password: ${userRegisterData.password}`);
      register(userRegisterData);
    }
  </script>
  
  <form on:submit={handleSubmit} class="w-full max-w-sm p-6 rounded-lg shadow-md border">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
<div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
      <label for="username" class="block mb-2">Username</label>
      <Input
        id="username"
        type="text"
        bind:value={userRegisterData.username}
        required
        class="w-full px-4 py-2 border"
      />
    </div>
    <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
      <label for="email" class="block mb-2">Email</label>
      <Input
        id="email"
        type="email"
        bind:value={userRegisterData.email}
        required
        class="w-full px-4 py-2 border"
      />
    </div>
    <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
      <label for="password" class="block mb-2">Password</label>
      <Input
        id="password"
        type="password"
        bind:value={userRegisterData.password}
        required
        class="w-full px-4 py-2 border"
      />
      <p class="text-muted-foreground text-sm">Must be at least 8 characters</p>
    </div>
    <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
      <label for="confirmPassword" class="block mb-2">Confirm Password</label>
      <Input
        id="confirmPassword"
        type="password"
        bind:value={userRegisterData.passwordConfirm}
        required
        class="w-full px-4 py-2 border"
      />
    </div>
    <Button
      type="submit"
      variant="secondary"
      class="w-full text-white font-bold py-2 px-4 rounded"
    >
      Register
    </Button>
  </form>