<script setup lang="ts">
  import { Stat, Testimonial } from './components';
  import { anne, colton, irene } from './assets';
</script>

<template>
  <main max-w-xs my-22 mx-auto flex flex-col gap-16 md:max-w-2xl lg:max-w-4xl xl="max-w-6xl gap-28">
    <section grid gap-8 lg:grid-cols-12>
      <div flex flex-col text-center gap-3 lg="col-span-5 text-left">
        <h1 text="4xl magenta-700 md:5xl xl:6xl" font-bold>
          10,000+ of our users love our products.
        </h1>
        <p text="xl magenta-300" font-medium leading-relaxed>
          We only provide great products combined with excellent customer service. See what our
          satisfied customers are saying about our services.
        </p>
      </div>
      <div flex flex-col gap-4 lg="col-span-7">
        <Stat transform="lg:-translate-x-24">Rated 5 Stars in Reviews</Stat>
        <Stat transform="lg:-translate-x-12">Rated 5 Stars in Report</Stat>
        <Stat>Rated 5 Stars in BestTech</Stat>
      </div>
    </section>
    <section grid gap-4 lg="grid-cols-3 gap-8">
      <h2 class="sr-only">Testimonials</h2>
      <Testimonial transform="lg:-translate-y-8" fullName="Colton Smith" :src="colton">
        "We needed the same printed design as the one we had ordered a week prior. Not only did they
        find the original order, but we also received it in time. Excellent!"
      </Testimonial>
      <Testimonial transform="lg:-translate-y-4" fullName="Irene Roberts" :src="irene">
        "Customer service is always excellent and very quick turn around. Completely delighted with
        the simplicity of the purchase and the speed of delivery."
      </Testimonial>
      <Testimonial fullName="Anne Wallace" :src="anne">
        "Put an order with this company and can only praise them for the very high standard. Will
        definitely use them again and recommend them to everyone!"
      </Testimonial>
    </section>
  </main>
</template>

<style>
  body {
    background-image: url(./assets/bg-pattern-top-mobile.svg),
      url(./assets/bg-pattern-bottom-mobile.svg);
    background-position: top left, bottom right;
    background-repeat: no-repeat, no-repeat;
  }

  @media screen and (min-width: 745px) {
    body {
      background-image: url(./assets/bg-pattern-top-desktop.svg),
        url(./assets/bg-pattern-bottom-desktop.svg);
    }
  }
</style>
