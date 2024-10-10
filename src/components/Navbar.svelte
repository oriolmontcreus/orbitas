<script lang="ts">
	import UserMenu from './UserMenu.svelte';
  import { Button } from "$lib/components/ui/button";
  import { isUserLoggedIn, getCurrentUser } from "@services/auth";

  let isLoading = true;
  let isLoggedIn = false;
  let user = null;

  $: (() => {
    isLoggedIn = isUserLoggedIn();
    if (isLoggedIn) user = getCurrentUser();
    isLoading = false;
  })();
</script>

<nav class="flex items-center justify-between p-4 bg-black">
  <div class="flex items-center space-x-4">
    <h1 class="text-xl font-bold">Orbitas</h1>
  </div>
  <div class="flex items-center">
    <UserMenu />
  </div>
</nav>
