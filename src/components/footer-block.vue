<template>
  <div>
    <div id="footer" class="o-container o-container--fluid o-section u-bg-secondary-light">

      <div class="o-container">
        <div class="o-grid">
          <div class="o-grid__col u-7@sm u-margin-top-4">
            <p class="u-text-overline">Un proyecto de</p>
            <div class="o-grid">
              <div class="o-grid__col u-7@sm">
                <a href="http://politicalwatch.es" target="_blank"><img src="/img/politicalwatch.png" class="big" alt="Logo de Poltical Watch"></a>
              </div>
            </div>
          </div>
          <div class="o-grid__col u-4@sm u-offset-1@sm u-margin-top-4">
            <p class="u-text-overline">Contacto</p>
            <tipi-icon icon="open-blank" class="c-icon--secondary-dark" />&nbsp;<a class="u-color-secondary-dark u-text-tbody2" href="http://openmanifestoproject.org" title="openmanifestoproject.org" target="_blank">Visita nuestra página web</a>
            <br>
            <tipi-icon icon="github" class="c-icon--secondary-dark" />&nbsp;<a class="u-color-secondary-dark u-text-tbody2" href="http://github.com/open-manifesto-project/" title="github.com/open-manifesto-project" target="_blank">Consulta nuestro código en Github</a>
            <br>
            <tipi-icon icon="mail" class="c-icon--secondary-dark" />&nbsp;<a class="u-color-secondary-dark u-text-tbody2" href="mailto:info@politicalwatch.es" title="info@politcalwatch.es" target="_blank">Escríbenos a info@politicalwatch.es</a>
          </div>
        </div>
        <div class="o-grid">
          <div class="o-grid__col u-12@sm u-margin-top-4">
            <p class="u-color-secondary-dark u-text-tbody2">{{ (new Date()).getFullYear()  }} Political Watch. Algunos derechos reservados.</p>
          </div>
        </div>
      </div>

    </div>

    <!-- <cookie&#45;law theme="base" buttonText="Entendido" buttonClass="btn btn&#45;custom" message="Este sitio usa cookies para asegurarte la mejor experiencia web."></cookie&#45;law> -->

  </div>
</template>

<script>
  import CookieLaw from 'vue-cookie-law';
  import { TipiIcon } from 'tipi-uikit';

  export default {
    name: "footer-block",
    components: {
      CookieLaw,
      TipiIcon
    }
  }
</script>

<style scoped lang="scss">
</style>
