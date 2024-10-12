<script lang="ts">
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  import Cloud from "lucide-svelte/icons/cloud";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import Github from "lucide-svelte/icons/github";
  import Keyboard from "lucide-svelte/icons/keyboard";
  import LifeBuoy from "lucide-svelte/icons/life-buoy";
  import LogOut from "lucide-svelte/icons/log-out";
  import Mail from "lucide-svelte/icons/mail";
  import MessageSquare from "lucide-svelte/icons/message-square";
  import Plus from "lucide-svelte/icons/plus";
  import Settings from "lucide-svelte/icons/settings";
  import User from "lucide-svelte/icons/user";
  import UserPlus from "lucide-svelte/icons/user-plus";
  import Users from "lucide-svelte/icons/users";

  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { isUserLoggedIn, currentUser, logout } from "@services/auth";
  import { navigate } from "astro:transitions/client";

  let isLoggedIn = isUserLoggedIn();

  async function handleLogout() {
    await logout();
    isLoggedIn = false;
  }

  $: user = $currentUser as User | null;
</script>

{#if isLoggedIn && user}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button builders={[builder]} variant="outline">
        <img
          src={user.avatar || ""}
          alt="Avatar"
          class="w-6 h-6 rounded-full mr-2"
        />
        {user.username}
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
      <DropdownMenu.Label>My Account</DropdownMenu.Label>
      <DropdownMenu.Separator />
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
