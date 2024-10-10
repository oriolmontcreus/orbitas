<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { registerUser } from "@services/auth";
  import { showPromiseToast } from "@services/toastService";
  import { handleRequest, isLoading } from "@utils/handleRequest";
  import { navigate } from "astro:transitions/client";

  export type UserRegisterPayload = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

  let userRegisterData: UserRegisterPayload = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  function handleSubmit(event: Event): void {
    event.preventDefault();
    if (userRegisterData.password !== userRegisterData.passwordConfirm) {
      console.log("Passwords do not match.");
      return;
    }

    const promise = registerUser(userRegisterData);

    showPromiseToast(promise, {
      loading: "Registering...",
      success: () => {
        navigate("/"); // Redirect to home on success
        return "Registration successful";
      },
      error: "Registration failed. Please try again.",
    });
  }
</script>

<form
  on:submit={handleSubmit}
  class="w-full max-w-sm p-6 rounded-lg shadow-md border"
>
  <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
  <div class="flex w-full max-w-sm flex-col gap-1.5 mb-4">
    <label for="username" class="block mb-2">Username</label>
    <Input
      id="username"
      type="text"
      bind:value={userRegisterData.username}
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
      bind:value={userRegisterData.email}
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
      bind:value={userRegisterData.password}
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
      bind:value={userRegisterData.passwordConfirm}
      required
      class="w-full px-4 py-2 border"
      autocomplete="new-password"
    />
  </div>
  <Button
    type="submit"
    variant={$isLoading ? "secondary" : "primary"}
    class="w-full text-white font-bold py-2 px-4 rounded"
    disabled={$isLoading}
  >
    {$isLoading ? "Registering..." : "Register"}
  </Button>
</form>
