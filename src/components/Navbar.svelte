<script lang="ts">
	import UserMenu from './UserMenu.svelte';
</script>

<nav class="flex items-center justify-between p-4 bg-black">
  <div class="flex items-center space-x-4">
    <h1 class="text-xl font-bold">Orbitas</h1>
  </div>
  <div class="flex items-center">
    <UserMenu />
  </div>
</nav>
