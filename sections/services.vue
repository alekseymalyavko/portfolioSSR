<template>
  <section class="services">
    <h6 class="subtitle">what i do</h6>
    <h2 class="title">services</h2>

    <div class="row">
      <div class="col-3">
        <div class="service">
          <div class="service__icon">
            <i>ICON</i>
          </div>
          <div class="caption">
            Creating app
          </div>
          <div class="text">
            sad asdasd asd asd  fdsasd daa 
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="service">
          <div class="service__icon">
            <i>ICON</i>
          </div>
          <div class="caption">
            Creating app
          </div>
          <div class="text">
            sad asdasd asd asd  fdsasd daa 
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="service">
          <div class="service__icon">
            <i>ICON</i>
          </div>
          <div class="caption">
            Creating app
          </div>
          <div class="text">
            sad asdasd asd asd  fdsasd daa 
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="service">
          <div class="service__icon">
            <i>ICON</i>
          </div>
          <div class="caption">
            Creating app
          </div>
          <div class="text">
            sad asdasd asd asd  fdsasd daa 
          </div>
        </div>
      </div>
      
    </div>

    <p class="services__note text">
      Adasd asda sd asdasdasd asdasdasd asda sdasdasdasd aasdasd.
    </p>
  </section>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style lang="scss">
  .services {
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border: 1px solid var(--green);
      }

      .caption {
        text-transform: uppercase;
        margin: 15px 0 10px;
        letter-spacing: 1px;
        font-weight: 500;
      }
    }

    &__note {
      margin-top: 100px;
      text-align: center;
      font-style: italic;
    }
  }
</style>

