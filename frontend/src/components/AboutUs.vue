<template>
  <div>
    <NavbarModule />

    <main>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 class="mb-4 display-5 text-center">About us</h3>
              <p class="text-secondary mb-5 text-center lead fs-4">
                Our bank is the best in the world. If you place your trust in us, we can
                guarantee you the best options.
              </p>
              <hr class="golden-divider mx-auto mb-5 mb-xl-9" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row gy-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6">
              <img class="img" src="@/assets/logo.png" alt="About Us" />
            </div>
            <div class="col-12 col-lg-6 col-xxl-6">
              <div class="row justify-content-lg-end justify-content-xxl-around">
                <div class="col-12 col-lg-11 col-xxl-10">
                  <div class="card mb-4">
                    <div class="p-0">
                      <h4 class="card-title mb-3">Our Services</h4>
                      <ul class="list-unstyled m-0 p-0 d-sm-flex flex-sm-wrap">
                        <li class="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span class="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              class="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"
                              />
                            </svg>
                          </span>
                          <span>Rapidity</span>
                        </li>
                        <li class="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span class="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              class="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"
                              />
                            </svg>
                          </span>
                          <span>Simplicity</span>
                        </li>
                        <li class="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span class="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              class="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"
                              />
                            </svg>
                          </span>
                          <span>Disponibility</span>
                        </li>
                        <li class="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span class="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              class="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"
                              />
                            </svg>
                          </span>
                          <span>Customer satisfaction</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="designers">
          This bank was created by 3 men who wanted to revolutionise banking in order to
          guarantee simplicity for users.<br />
          The 3 designers are :
          <ul class="designers-list">
            <li>Mr. CHAMONT Maxime</li>
            <li>Mr. ALPEROVITCH Grégoire</li>
            <li>Mr. FLANDIN Nicolas</li>
          </ul>

          <br /><br />

          <h3 class="mb-4 display-5 text-center" style="color: gold">Find us</h3>
          <iframe
            class="embed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4412338929124!2d19.0573744869572!3d47.4883600085659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc502488be69%3A0xc5b7e757fb438129!2sUniversit%C3%A9%20Corvinus%20de%20Budapest!5e1!3m2!1sfr!2shu!4v1730137404106!5m2!1sfr!2shu"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>

    <FooterModule />
  </div>
</template>

<script>
import FooterModule from "./FooterModule.vue";
import NavbarModule from "./NavbarModule.vue";

export default {
  name: "AboutUsModule",
  components: {
    NavbarModule,
    FooterModule,
  },
};
</script>

<style scoped>
.container h3 {
  color: gold;
  padding-bottom: 5px;
}

.embed {
  width: 50%;
  height: 450px;
  margin: 2em;
  border: none;
}

.text-secondary {
  color: #cecece !important;
}

.card-title {
  text-align: center;
  font-family: "Space Grotesk", sans-serif !important;
}

.card {
  padding: 25px;
  background-color: #191b1f;
  color: whitesmoke;
  border: 1px solid gold;
  border-radius: 10px;
}

.designers {
  padding-top: 30px;
  text-align: center;
  padding-left: 20px;
  color: #cecece;
}

.designers-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.designers-list li {
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.5;
  padding: 5px 0;
  width: auto;
  text-align: left;
}

.golden-divider {
  border: none !important;
  height: 4px !important;
  width: 100% !important;
  max-width: 100% !important;
  background: linear-gradient(
    90deg,
    rgba(210, 179, 36, 1) 0%,
    rgba(255, 237, 26, 1) 50%,
    rgba(214, 185, 13, 1) 100%
  ) !important;
  border-radius: 10px !important;
}

.btn {
  background-color: gold;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: darkgoldenrod;
}
</style>
