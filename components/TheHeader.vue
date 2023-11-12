<template>
  <div class="navbar bg-base-100 border-2 rounded">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li>
            <NuxtLink to="/scrape">Scrape</NuxtLink>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">daisyUI</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/profile">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/scrape">Scrape</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/scrape">Scrape</NuxtLink>
        </li> -->
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn">Themes</label>
        <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li v-for="theme in themes"><a @click="$emit('passColor', theme)">{{ theme }}</a></li>
        </ul>
      </div>
      <NuxtLink class="btn" to="/auth/login">Login</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  themes: {
    type: Array,
    default: () => ['cupcake', 'dark', 'light']
  }
})
</script>

<style></style>
