<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Telegram"
    role="img"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :fill="iconColor"
  >
    <rect width="512" height="512" rx="15%" />
    <path d="M199 404c-11 0-10-4-13-14l-32-105 245-144" />
    <path fill="#FFF" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
    <path
      fill="#fff"
      d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
    />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 512
    },
    height: {
      type: [Number, String],
      default: 512
    },
    iconColor: {
      type: String,
      default: '#FF6B00'
    }
  }
}
</script>
