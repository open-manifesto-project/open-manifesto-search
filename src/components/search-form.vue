<template>
  <form id="search-form" class="u-margin-bottom-4 u-border-bottom" role="form" @submit.prevent="getResults($event)">
    <div class="o-grid">
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4">
        <div class="c-select-label u-block">
          <label for="political_party">Partido político</label>
          <multiselect
            selectedLabel="Seleccionado"
            selectLabel=""
            deselectLabel="Pulsa para deseleccionar"
            v-model="form.political_party"
            :options="political_parties"
            name="political_party" id="political_party" placeholder="Todos">
          </multiselect>
        </div>
      </div>
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4">
        <div class="c-select-label u-block">
          <label for="topic">Temática</label>
          <multiselect
            selectedLabel="Seleccionado"
            selectLabel=""
            deselectLabel="Pulsa para deseleccionar"
            v-model="form.topics"
            :options="topics"
            name="topics" id="topics" placeholder="Todos">
          </multiselect>
        </div>
      </div>
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4">
        <div class="c-select-label u-block">
          <label for="election_type">Ámbito electoral</label>
          <multiselect
            selectedLabel="Seleccionado"
            selectLabel=""
            deselectLabel="Pulsa para deseleccionar"
            @select="this.clearGeographicalArea"
            @remove="this.clearGeographicalArea"
            v-model="form.election_type"
            @cleared="this.clearGeographicalArea"
            :options="election_types"
            name="election_type" id="election_type" placeholder="Todos">
          </multiselect>
        </div>
      </div>
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4">
        <div class="c-select-label u-block" :class="{ 'c-select-label--disabled' : !allowArea  }">
          <label for="geographical_area">Área Geográfica</label>
          <multiselect
            selectedLabel="Seleccionado"
            selectLabel=""
            deselectLabel="Pulsa para deseleccionar"
            v-model="form.geographical_area"
            :options="geographical_areas"
            :disabled="!allowArea"
            name="geographical_area" id="geographical_area" placeholder="Todos">
          </multiselect>
        </div>
      </div>
      <div class="o-grid__col u-12 u-12@sm u-padding-bottom-4">
        <div class="c-input-label u-block">
          <label for="tags">Etiquetas</label>
          <input
            v-model="form.tags"
            type="text"
            height= "100"
            id="tags"
            name="tags"
            placeholder="Filtra por etiquetas">
        </div>
      </div>
    </div> <!-- /.o-grid -->
    <div class="o-grid">
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4 u-text-right@sm">
      </div>
      <div class="o-grid__col u-12 u-6@sm u-padding-bottom-4 u-text-right@sm">
        <button class="c-button u-padding-left-0 u-margin-right-2" @click.prevent="cleanForm">Limpiar búsqueda</button>
        <button class="c-button c-button--primary" type="submit">Buscar</button>
      </div>
    </div>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { TipiIcon, TipiText } from 'tipi-uikit';
import { mapState } from 'vuex';
// eslint-disable-next-line no-unused-vars
import assign from "core-js/features/object/assign";

const moment = require('moment');

export default {
  name: 'searchForm',
  components: {
    Multiselect,
    TipiIcon,
    TipiText,
  },
  props: {
    formData: Object,
  },
  data: function() {
    return {
      csv_parser: '',
      form: {},
      errors: null,
      moment: moment,
    }
  },
  selected: false,
  computed: {
    ...mapState({
      political_parties: 'allPoliticalParties',
      geographical_areas: 'allGeographicalAreas',
      election_types: 'allElectionTypes',
      topics: 'allProposalTopics',
      types: 'allTypes',
      status: 'allStatus',
    }),
    allowArea: function() {
      return this.form.election_type == 'Autonómicas';
    }
  },
  methods: {
    cleanForm: function() {
      this.form.threshold = '';
      this.form.political_party = '';
      this.form.subtopics = '';
      this.form.geographical_area = '';
      this.form.election_type = '';
      this.form.topics = '';
      this.form.tags = '';
    },
    clearGeographicalArea: function() {
      this.form.geographical_area = ''
    },
    prepareTags: function() {
      if(this.form.tags != ''){
        this.form.threshold = 1;
        this.form.tags = this.form.tags.replaceAll(' ',',');
      } else {
        this.form.threshold = 0;
      }
    },
    getResults: function(event) {
      this.prepareTags();
      this.$emit('getResults', event, this.form);
    },
  },
  created: function() {
    this.form = Object.assign({}, this.formData);
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

