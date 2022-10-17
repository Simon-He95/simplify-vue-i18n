<script setup lang="ts">
import { changeLocale } from '../../../src'
</script>

<template>
  <p>{{ $t("message.hello") }}</p>
  <div flex="~ gap3" justify-center my4>
    <button btn @click="changeLocale('zh')">
      zh
    </button>
    <button btn @click="changeLocale('jp')">
      jp
    </button>
    <button btn @click="changeLocale('en')">
      en
    </button>
  </div>
</template>
