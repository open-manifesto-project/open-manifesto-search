<template>
  <div>
    <tipi-loader v-if="this.loadingResults" title="Cargando resultados" subtitle="Puede llevar algun tiempo" />
      <section class="o-masonry o-grid" v-if="this.proposals && this.proposals.length && !this.loadingResults">
        <div class="o-grid__col u-12 u-4@sm o-masonry__item" v-for="(proposal) in proposals" >
          <proposal-card :proposal="proposal" :manifesto="manifestos[34]"  :logosStyles="logosStyles"  />
        </div>
      </section>
  </div>
</template>

<script>

import Masonry from "masonry-layout";
import {  mapState } from 'vuex';
import { TipiLoader } from 'tipi-uikit'
import ProposalCard from '@/components/ProposalCard.vue'
export default {
  name: 'OmpResults',
  components: {
    ProposalCard,
    TipiLoader,
  },
  props: {
    loadingResults: Boolean,
    proposals: {
      type: Array,
      default: function() { return []; },
    },
    queryMeta: Number,
    layout: String,
    logosStyles: Object,
  },
  computed: {
    ...mapState({
      manifestos: 'allManifestos',
    })
  },
  methods: {
    setupMasonry: function() {
      let grid = document.querySelector('.o-masonry');
      if (grid) {
        let msnry = new Masonry(grid, {
          columnWidth: '.o-masonry__item',
          percentPosition: true,
          itemSelector: '.o-masonry__item',
        });
        msnry.layout();
      }
    },
  },
  watch: {
    proposals: function () {
      if (this.proposals && this.proposals.length && !this.loadingResults) {
        this.setupMasonry();
      }
    },
  },
  mounted: function () {
    this.setupMasonry();
    window.addEventListener('resize', function() {
      this.setupMasonry();
    }.bind(this));
  },
};
</script>
