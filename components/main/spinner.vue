<template>
  <div class="spinner"></div>
</template>
<style lang="scss">
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: var(--active);

  -webkit-animation: s-rotate 1.2s infinite ease-in-out;
  animation: s-rotate 1.2s infinite ease-in-out;
}

@-webkit-keyframes s-rotate {
  0% { 
    -webkit-transform: perspective(120px)
  }
  50% { 
    -webkit-transform: perspective(120px) rotateY(180deg)
  }
  100% { 
    -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) 
  }
}
@keyframes s-rotate {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 
  50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 
  100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>