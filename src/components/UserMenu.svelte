<script lang="ts">
  import LogOut from "lucide-svelte/icons/log-out";
  import Settings from "lucide-svelte/icons/settings";
  import User from "lucide-svelte/icons/user";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { currentUser, logout } from "@services/auth";
  import { handleRequestAndRedirect } from "$lib/utils/handleRequest";

  async function handleLogout() {
  handleRequestAndRedirect({
    perform: async () => {
      await logout();
    },
    errorMsg: "Logout failed. Please try again.",
    successMsg: "Logged out successfully.",
    redirectUrl: "/"
  });
}

  $: user = $currentUser as User | null;
</script>

{#if user}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button builders={[builder]} variant="outline">
        {#if user.avatar}
          <img
            src={user.avatar}
            alt="Avatar"
            class="w-6 h-6 rounded-full mr-2"
          />
        {:else}
          <div class="w-6 h-6 rounded-full mr-2 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            {user.username.charAt(0).toUpperCase()}
          </div>
        {/if}
        {user.username}
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
      <DropdownMenu.Group>
        <DropdownMenu.Item>
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Settings class="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item on:click={handleLogout}>
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{:else}
  <Button href="/login" variant="outline">Login</Button>
{/if}
