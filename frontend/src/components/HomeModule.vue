<template>
  <div>
    <NavbarModule />
    <main class="content-container d-flex justify-content-center align-items-center">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-gold">Our Mission</h2>
            <p class="text-muted">
              At Baba Bank, our mission is to provide good banking services with a focus
              on simplicity, reliability and efficiency. Our aim is to revolutionise the
              banking experience and make it easy for you to do business with us.
            </p>
          </div>
        </div>
        <hr class="golden-divider my-4" />
        <div class="row">
          <div class="col-md-4 text-center">
            <i class="bi bi-lightning" style="font-size: 2rem"></i>
            <h3 class="mt-3">Speed</h3>
            <p class="text-muted">
              Enjoy a smooth and fast user experience, allowing you to perform your
              banking operations in a flash.
            </p>
          </div>
          <div class="col-md-4 text-center">
            <i class="bi bi-bank" style="font-size: 2rem"></i>
            <h3 class="mt-3">Personal Loans</h3>
            <p class="text-muted">
              Get easy access to loans with transparent conditions and competitive rates.
            </p>
          </div>
          <div class="col-md-4 text-center">
            <i class="bi bi-check-circle" style="font-size: 2rem"></i>
            <h3 class="mt-3">Simplicity</h3>
            <p class="text-muted">
              Navigate our platform effortlessly, designed to make your use of it more
              enjoyable.
            </p>
          </div>
        </div>
        <hr class="golden-divider my-4" />
        <div class="row">
          <div class="col-md-6">
            <blockquote class="blockquote">
              <p class="mb-0">
                Baba Bank has made my financial life so much easier! Their online platform
                is simple, fast and the customer service is exceptional.
              </p>
              <footer class="blockquote-footer">
                Yetta Workman, <cite title="Source Title">Entrepreneur</cite>
              </footer>
            </blockquote>
          </div>
          <div class="col-md-6">
            <blockquote class="blockquote">
              <p class="mb-0">
                Their loan options were exactly what I needed to start my new business.
                Baba Bank truly understands the needs of small businesses.
              </p>
              <footer class="blockquote-footer">
                Eaton Horton, <cite title="Source Title">Business Owner</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </main>
    <FooterModule />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarModule from "./NavbarModule.vue";
import FooterModule from "./FooterModule.vue";

export default {
  name: "HomePageModule",
  components: {
    NavbarModule,
    FooterModule,
  },
};
</script>

<style scoped>
.content-container {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  color: #cecece;
}

.blockquote {
  background-color: #191b1f;
  border-left: 5px solid gold;
  padding: 10px;
  margin: 10px 0;
}

.blockquote-footer {
  padding-top: 20px;
  color: #cecece;
}

.text-muted {
  color: #cecece !important;
}

.text-gold {
  color: #cecece;
  text-align: center;
}

.golden-divider {
  border: none;
  height: 4px;
  background: linear;
}
</style>
