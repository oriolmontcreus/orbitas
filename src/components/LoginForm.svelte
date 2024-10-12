<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { handleRequest, isLoading } from "@utils/handleRequest";
  import { login, currentUser } from "@services/auth";
  import { navigate } from "astro:transitions/client";

  let username_or_email: string = "";
  let password: string = "";

  function handleSubmit(): void {
    handleRequest({
      perform: async () => {
        await login(username_or_email, password);
        navigate("/");
      },
      errorMsg: "Login failed. Please try again.",
    });
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="w-full max-w-sm p-6 rounded-lg shadow-md border"
>
  <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
  <div class="mb-4">
    <label for="email" class="block mb-2">Email/Username</label>
    <Input
      id="email"
      type="text"
      bind:value={username_or_email}
      placeholder="Enter your email or username"
      required
      class="w-full px-4 py-2 border"
    />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2">Password</label>
    <Input
      id="password"
      type="password"
      bind:value={password}
      placeholder="Enter your password"
      required
      class="w-full px-4 py-2 border"
    />
  </div>
  <Button
    type="submit"
    variant={$isLoading ? "secondary" : "default"}
    class="w-full font-bold py-2 px-4 rounded"
    disabled={$isLoading}
  >
    {$isLoading ? "Loading..." : "Login"}
  </Button>
</form>
