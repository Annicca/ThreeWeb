<template>
  <ul :class="className">
    <li v-for="(item, index) in items" :key="index" class="list-item">
      <slot name="item" :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    className: String
  }
}
</script>
