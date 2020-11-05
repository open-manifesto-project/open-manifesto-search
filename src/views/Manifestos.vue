<template>
  <div>
    <div id="about" class="o-container o-section u-margin-bottom-10">
      <tipi-header title="Índice de programas"/>
      <div class="o-grid">
        <div class="o-grid__col u-8@sm u-offset-0@sm">
          <ul class="u-text-th3" v-for="(manifesto, type) in this.index" v-bind:key="type">{{type}}
            <ul class="u-text-th4" v-for= "(v,k) in manifesto">
              <h4 v-if="type =='Autonómicas'">{{k}}</h4>
              <ul class="u-text-overline">
                <li v-for="(p) in v">{{p.political_party}}</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TipiHeader, TipiText } from 'tipi-uikit';
import { mapState } from 'vuex';
import nestedGroupby from 'nested-groupby';
import Vue from 'vue';
export default {
  name: 'manifestos',
  components: {
    TipiHeader,
    TipiText,
  },
  data: function() {
    return {
      election_types: [],
      index: [],
      parties: [],
    }
  },
  computed: {
    ...mapState({
      manifestos: 'allManifestos',
    })
  },
  methods: {
    groupByParty: function(){
      this.index = nestedGroupby(this.manifestos,['election_type','geographical_area']); 
      this.election_types = Object.keys(this.index)
      this.geographical_areas = Object.values(this.index)
      console.log(this.index)
    },
  },
  created: function() {
    this.groupByParty();
  },
  updated: function() {
    this.groupByParty();
  }
}
</script>

<style scoped lang="scss">
.u-text-th3{
  list-style: none;
  padding-left:20px;
}
.u-text-th4{
  padding-top:10px;
  list-style: none;
  padding-left:40px;
}
.u-text-overline{
  padding-top:08px;
  padding-left: 45px;
  color: #354661;
}
</style>
