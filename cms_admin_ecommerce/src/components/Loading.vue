<template>
    <div class="loading">
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_nz20vA.json"  background="transparent" mode="bounce" speed="1"  style="width: 300px; height: 300px;" autoplay >
      </lottie-player>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
    background-color: transparent;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
</style>
