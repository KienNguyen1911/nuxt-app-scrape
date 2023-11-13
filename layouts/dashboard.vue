<template>
  <div class="container-2xl drawer lg:drawer-open grid gap-4">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" :checked="checkDrawer" />
    <div class="drawer-content">
      <!-- Page content here -->
      <DashboardNavBar :open-drawer="openDrawer" />
      <main>
        <slot />
      </main>
    </div>

    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <side-bar></side-bar>
    </div>
  </div>
</template>

<script lang="ts" setup>
const checkDrawer = ref(false);

const openDrawer = () => {
  console.log("open drawer");
  checkDrawer.value = true;
};

</script>

<style></style>
