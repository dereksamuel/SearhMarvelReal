<template>
  <div>
    <b-nav small align="start">
      <b-nav-item :to="{name: 'HOME'}">Home</b-nav-item>
      <b-nav-item :to="{name: 'ABOUT'}">About</b-nav-item>
      <b-nav-item target="_blank">Github</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
