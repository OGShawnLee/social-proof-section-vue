<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    fullName: string;
    src: string;
    alt?: string;
    title?: string;
    transform?: string;
  }>();

  const finalAlt = computed(() => props.fullName + ' Profile');
  const finalTitle = computed(() => props.title || 'Verified Buyer');
  const transformClass = computed(() => `transform ${props.transform ?? ''}`.trim());
</script>

<template>
  <article :class="transformClass" p-6 flex flex-col gap-6 bg-magenta-700 rounded-lg>
    <header flex items-center gap-6>
      <img h-16 w-16 min-w-16 rounded-full :src="src" :alt="finalAlt" width="64" height="64" />
      <div grid gap-1>
        <h3 text-lg text-white font-semibold>{{ fullName }}</h3>
        <span text-pink font-semibold> {{ finalTitle }}</span>
      </div>
    </header>
    <blockquote>
      <p text-white leading-relaxed>
        <slot />
      </p>
    </blockquote>
  </article>
</template>
