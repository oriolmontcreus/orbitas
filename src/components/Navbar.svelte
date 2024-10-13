<script lang="ts">
  import UserMenu from "./UserMenu.svelte";
  import '../app.css';
</script>

<nav class="flex items-center justify-between p-4 bg-black border-b">
  <div class="flex items-center space-x-4">
    <h1 class="text-xl font-bold">Orbitas</h1>
  </div>
  <UserMenu />
</nav>
