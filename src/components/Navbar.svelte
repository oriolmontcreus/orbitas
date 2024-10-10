<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { isUserLoggedIn, getCurrentUser } from '@services/auth';
  
  let isLoading = true;
  let isLoggedIn = false;
  let user = null;

  $: (() => {
    // Simulate a delay to mimic async auth check
    setTimeout(() => {
      isLoggedIn = isUserLoggedIn();
      if (isLoggedIn) {
        user = getCurrentUser();
      }
      isLoading = false;
    }, 500);
  })();
</script>

<nav class="flex items-center justify-between p-4 bg-black">
  <div class="flex items-center space-x-4">
    <h1 class="text-xl font-bold">Orbitas</h1>
  </div>
  <div class="flex items-center">
    {#if isLoading}
      <Button variant="outline" disabled>
        <div class="w-5 h-5 border-4 border-t-gray-500 border-gray-300 rounded-full animate-spin"></div>
      </Button>
    {:else if isLoggedIn && user}
      <Button variant="outline">
        <span>@{user.username}</span>
        <img src={user.avatar || ''} alt="Avatar" class="w-7 h-7 ml-2 rounded-full border-2 border-gray-700" />
      </Button>
    {:else}
      <Button href="/login" variant="outline">
        Login
      </Button>
    {/if}
  </div>
</nav>