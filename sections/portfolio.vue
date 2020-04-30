<template>
  <section class="portfolio">
    <h6 class="subtitle">my works</h6>
    <h2 class="title">PORTFOLIO</h2>

    <div class="portfolio__wrapper">
      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

      <div class="portfolio__item">
        <div class="project">
          <span class="bold">
            app
          </span>
          <h6 class="caption">
            METRICA
          </h6>
          <p class="light">UX / UI / HTML / CSS / JS / SEO</p>
          <p class="text">The idea of the site is about marketing agency which provides their services to customers.</p>
          <div class="button ">
            More
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style lang="scss">
  .portfolio {

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    &__item {
      border: 1px solid var(--green);
      width: 320px;
      height: 320px;
      margin: 10px;
      display: flex;
      align-items: center;
      padding: 25px;

      .project {
        .caption {
          margin: 5px 0;
        }
        .bold {
          font-weight: 300;
        }
        .text {
          margin-top: 5px;
          color: var(--white);
        }
      }
    }
    
  }
</style>

