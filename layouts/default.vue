<template>
  <div :data-theme="theme">
    <div class="container mx-auto py-2">
      <the-header :themes="themes" @pass-color="receiveColor"></the-header>
      <main class="my-2 border-2 rounded">
        <slot />
      </main>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "valentine",
  "halloween",
  "forest",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "acid",
  "lemonade",
  "night",
  "winter"
]
const theme = ref('dark')

const receiveColor = (e: any) => {
  theme.value = e
  console.log(theme.value)
}
</script>

<style></style>

