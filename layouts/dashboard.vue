<template>
  <div class="container-2xl m-2">
    <div class="grid lg:grid-cols-5 gap-4">
      <div class="md:hidden lg:block lg:col-span-1" id="sidebar">
        <SideBar />
      </div>
      <div class="md:col-span-5 lg:col-span-4">
        <DashboardNavBar />
        <main class="card w-96 bg-neutral min-w-full p-2">
          <slot />
        </main>
      </div>
    </div>
    <!-- sidebar -->

    <!-- navbar -->
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
