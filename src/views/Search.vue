<template>
  <div>
    <tipi-splash>
      <img src="/img/logo_horizontal.png">
      <p ><strong>Open Manifesto Project</strong> es un estándar abierto para programas electorales. Un formato estructurado para los programas de los partidos políticos que facilita su comprensión y la rendición de cuentas a la ciudadanía.</p>
      <p>
        <router-link :to="{name: 'about-en'}">Learn more about this project in English</router-link>
      </p>
    </tipi-splash>
    <div id="search" class="o-container o-section u-margin-bottom-10">
      <tipi-header :title="'Propuestas electorales'" :subtitle="'Buscador de las propuestas electorales, dentro de los programas de diferentes partidos.'" />

      <search-form  :formData="this.data" @getResults="getResults" />
      <div class="o-grid o-grid--align-center u-margin-bottom-4" id="results">
        <div class="o-grid__col o-grid__col--fill">
          <tipi-message v-if="this.query_meta != -1" :type="message.type" :icon="message.icon">{{ message.message }}</tipi-message>
        </div>
      </div>
      <omp-results
        :loadingResults="loadingResults"
        :proposals="proposals || []"
        :logosStyles="logosStyles"
        :queryMeta="query_meta"
        @loadMore="loadMore"
      />
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import searchForm from '@/components/search-form';
import ProposalCard from '@/components/ProposalCard.vue'
import config from '@/config'
import api from '@/api'
import { TipiHeader, TipiCsvDownload, TipiMessage, TipiResults, TipiSplash } from 'tipi-uikit'
import { mapGetters } from 'vuex';
import OmpResults from '@/components/OmpResults.vue'
const qs = require('qs');
const VueScrollTo = require('vue-scrollto');

export default {
  name: 'search',
  components: {
    OmpResults,
    ProposalCard,
    TipiSplash,
    TipiResults,
    TipiMessage,
    TipiCsvDownload,
    TipiHeader,
    searchForm,
  },
  data: function() {
    return {
      errors: null,
      proposals: [],
      query_meta: -1,
      data: {
        threshold: '',
        topics: '',
        election_type: '',
        election_date: '',
        political_party: '',
        tags: '',
        page: 1,
        geographical_area: '',
        electionDate: '',
      },
      loadingResults: false,
      proposalsLoaded:false,
      csvItems: [],
      LIMITCSV: 100,
      logosStyles: config.STYLES.logos,
      scrollToID: '#results'
    }
  },
  computed: {
    canDownloadCSV: function() {
      return this.query_meta.total < this.LIMITCSV;
    },
    ...mapGetters(['getDeputyByName', 'getParliamentaryGroupByName']),
    message: function() {
      if (this.errors) {
        return { icon: true, type: 'error', message: this.errors }
      }
      if (this.query_meta != 0 && this.query_meta != -1) {
        return { icon: true, type: 'success', message: `Se han encontrado ${this.query_meta} iniciativas.` }
      } else {
        return { icon: true, type: 'error', message: `No se han encontrado iniciativas que cumplan los criterios.` }
      }
    },
  },
  methods: {
    getResults: function(event, formData) {
      this.loadingResults = true;
      this.proposalsLoaded = false;
      this.csvItems = [];
      const isNewSearch = event && event.type === 'submit';
      const params = this.$route.params.data && !isNewSearch ?
        qs.parse(this.$route.params.data)
        : formData;
      this.data = Object.assign(this.data, params);
      const urlParams = Object.assign({}, this.data);

      if (isNewSearch) {
        this.scrollToID = '#results';
        event.preventDefault();
      }
      Object.keys(urlParams).forEach(
        key => (!urlParams[key] || key === "page") && delete urlParams[key])

      this.$router.push({
        name: 'results',
        params: {
          data: qs.stringify(urlParams, { arrayFormat: 'repeat' })
        }
      }).catch(e => e);
      api.getProposals(this.data)
         .then(response => {
            if (!isNewSearch) {
              this.proposals.push.apply(this.proposals, response);
            } else {
              this.proposals = response;
            }
            this.query_meta = response.length;
            this.loadingResults = false;
            this.proposalsLoaded = true;
            Vue.nextTick()
              .then(() => {
                VueScrollTo.scrollTo(this.scrollToID, 1500)
              })
          })
         .catch(error => this.errors = error);
    },
    loadMore: function() {
      let node = document.querySelectorAll('.c-initiative-card');
      node = node[node.length - 1]
      this.scrollToID = `#${node.id}`;
      this.data.page++;
      this.getResults();
    },
    alertsIsEnabled: function() {
      return (config.USE_ALERTS === "true");
    },
    loadCSVItems: function(event) {
      if (!this.canDownloadCSV) return false;
      event.target.innerText = "Procesando descarga...";
      let params =  Object.assign({ per_page: this.LIMITCSV }, this.data);
      api.getProposals(params)
         .then(response => {
           this.csvItems = response;
           event.target.innerText = "Descarga datos";
          })
         .catch(error => this.errors = error);
    },
  },
  created: function() {
    if (this.$route.name == "results") {
      this.getResults();
    }
  },
  updated: function() {
    if (document.getElementById('downloadCSV')) {
      document.getElementById('downloadCSV').click();
    }
  }
}
</script>
