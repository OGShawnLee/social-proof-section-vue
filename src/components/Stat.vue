<script setup lang="ts">
  import { computed } from 'vue';
  import { iconStar } from '../assets/index';

  const props = defineProps<{
    amount?: number;
    transform?: string;
  }>();

  const finalAmount = computed(() => props.amount ?? 5);
  const transformClass = computed(() => `transform ${props.transform ?? ''}`.trim());
</script>

<template>
  <div :class="transformClass" w-full ml-auto bg-magenta-100 rounded-lg lg="max-w-fit">
    <div p-4 flex flex-col items-center gap-3 lg="w-96" xl="w-108 flex-row justify-center gap-12">
      <div flex gap-3>
        <template v-for="index in finalAmount" :key="index">
          <img :src="iconStar" alt="" width="18" height="18" />
        </template>
      </div>
      <strong text="base magenta-700" font-semibold>
        <slot />
      </strong>
    </div>
  </div>
</template>
