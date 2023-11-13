<template>
  <div>
    <div
      class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box justify-between"
    >
    <!-- Hamburger Drawer -->
    <div class="flex-none lg:hidden">
      <button class="btn btn-square btn-ghost" @click="$emit('openDrawer')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div class="flex">
      <!-- content -->
      <ul class="menu bg-base-200 menu-horizontal rounded-box">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Inbox
            <span class="badge badge-sm">99+</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Updates
            <span class="badge badge-sm badge-warning">NEW</span>
          </a>
        </li>
        <li>
          <a>
            Stats
            <span class="badge badge-xs badge-info"></span>
          </a>
        </li>
      </ul>

      <!-- dropdown -->
      <div class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn m-1 btn-outline btn-primary">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span class="text-xs">KN</span>
            </div>
          </div>
        </label>

        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="link in dropdownLink">
            <a>{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const dropdownLink = ref(["Login", "Profile"]);
const openDrawer = () => {
  console.log("open drawer");
  return true;
};
</script>

<style></style>
