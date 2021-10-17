<template>
  <div class="flex items-center gap-4 md:w-full">
    <router-link :to="path" tag="div" class="w-10 h-10 flex justify-center items-center rounded-lg bg-gray-700 cursor-pointer hover:bg-purple-400 transition duration-200">
      <box-icon name='left-arrow-alt' color="#E5E7EB"></box-icon>
    </router-link>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  }
}
</script>
