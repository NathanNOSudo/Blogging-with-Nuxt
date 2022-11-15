<script setup></script>

<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1">
          <slot />

        </h1>
        <h1><strong><a class="links" href="https://github.com/nathannosudo">Github</a></strong></h1>
        <slot name="subtitle" />
      </div>
    </div>
  </section>
</template>

<style>
.links {
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.hero-body {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
}
</style>
