<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { register } from "@services/auth";
  import { showErrorToast, showPromiseToast } from "@services/toastService";
  import { isLoading } from "@utils/handleRequest";
  import { navigate } from "astro:transitions/client";
  import type { UserRegisterPayload } from "$lib/types/auth";

  let registerData: UserRegisterPayload = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  function handleSubmit(): void {
    if (registerData.password !== registerData.passwordConfirm) {
      showErrorToast("Passwords do not match.");
      return;
    }

    const promise = register(registerData);

    showPromiseToast(promise, {
      loading: "Registering...",
      success: () => {
        navigate("/");
        return "Registration successful. Welcome to Orbitas!";
      },
      error: "Registration failed. Please try again.",
    });
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="w-full max-w-sm p-6 rounded-lg shadow-md border"
>
  <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
  <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
    <label for="username" class="block mb-2">Username</label>
    <Input
      id="username"
      type="text"
      bind:value={registerData.username}
      required
      class="w-full px-4 py-2 border"
      autocomplete="username"
    />
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
    <label for="email" class="block mb-2">Email</label>
    <Input
      id="email"
      type="email"
      bind:value={registerData.email}
      required
      class="w-full px-4 py-2 border"
      autocomplete="email"
    />
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
    <label for="password" class="block mb-2">Password</label>
    <Input
      id="password"
      type="password"
      bind:value={registerData.password}
      required
      class="w-full px-4 py-2 border"
      autocomplete="new-password"
    />
    <p class="text-muted-foreground text-sm">Must be at least 8 characters</p>
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
    <label for="confirmPassword" class="block mb-2">Confirm Password</label>
    <Input
      id="confirmPassword"
      type="password"
      bind:value={registerData.passwordConfirm}
      required
      class="w-full px-4 py-2 border"
      autocomplete="new-password"
    />
  </div>
  <Button
    type="submit"
    variant={$isLoading ? "secondary" : "default"}
    class="w-full text-white font-bold py-2 px-4 rounded"
    disabled={$isLoading}
  >
    {$isLoading ? "Loading..." : "Register"}
  </Button>
</form>
