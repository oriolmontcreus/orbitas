<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { handleRequest, isLoading } from '@utils/handleRequest';
  import { loginUser } from '@services/auth';

  let email: string = '';
  let password: string = '';

  function handleSubmit(event: Event): void {
    event.preventDefault();
    handleRequest({
      perform: () => loginUser(email, password),
      successMsg: "Login successful",
      errorMsg: "Login failed",
    });
  }
</script>

<form on:submit={handleSubmit} class="w-full max-w-sm p-6 rounded-lg shadow-md border">
  <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
  <div class="mb-4">
    <label for="email" class="block mb-2">Email</label>
    <Input
      id="email"
      type="email"
      bind:value={email}
      placeholder="Enter your email"
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
    variant={$isLoading ? "secondary" : "primary"}
    class="w-full text-white font-bold py-2 px-4 rounded"
    disabled={$isLoading}
  >
    {$isLoading ? "Loading..." : "Login"}
  </Button>
</form>