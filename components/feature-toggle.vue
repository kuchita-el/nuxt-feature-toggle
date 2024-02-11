<script lang="ts" setup>
defineProps<{
  feature: string
}>()

const {enabled: enabledFeature} = useFeatureToggle()

</script>

<template>
  <div>
    <template v-if="enabledFeature(feature)">
      <slot name="default"></slot>
    </template>
    <template v-else>
      <slot name="fallback"></slot>
    </template>
  </div>
</template>

<style scoped></style>
