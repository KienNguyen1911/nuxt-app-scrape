<template>
  <div>
    Scrapping Form
    <Form @submit="onSubmit">
      <div class="row">
        <div class="columns-6">
          hello
        </div>
        <div class="columns-6">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-primary">Sign up for newsletter</button>
    </Form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard'
})
const onSubmit = (values: any) => {
  console.log(values);
};
</script>

<style></style>
