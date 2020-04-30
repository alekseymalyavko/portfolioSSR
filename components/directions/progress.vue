<template lang="html">
  <div>
    <p id="lol"></p>
  </div>
</template>

<script>
function setup(){
  let hypeDocument = document.getElementById('lol');
  let startCount = 0,
    stopCount = 100,
    duration = (Math.abs(startCount - stopCount) / 100) * 5000,
    countDownElement = hypeDocument,
    intervalTime = duration / Math.abs(startCount - stopCount);

  let countDown = setInterval(function() {
    if (startCount === stopCount) {
      clearInterval(countDown);
    }
    countDownElement.innerHTML = startCount;
    startCount > stopCount ? startCount-- : startCount++
  }, intervalTime/2);
}
export default {
  mounted() {
    setup()
  },
}
</script>