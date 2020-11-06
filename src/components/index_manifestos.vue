<template>
  <div>
    <div class="o-container o-section u-margin-bottom-10">
      <div class="o-grid">
        <div class="o-grid__col u-12 u-6@sm">
          <ul class="Europeas"> <h3>Europeas</h3>
            <li class="u-text-overline" v-for="party in this.europeas[0]">{{party}}</li>
          </ul>
          <ul class="Generales"> <h3>Generales</h3>
            <li class="u-text-overline" v-for="party in this.generales[0]">{{party}}</li>
          </ul>
        </div>
        <div class="o-grid__col u-12 u-6@sm">
          <ul class = "Autonómicas"><h3>Autonómicas</h3>
            <ul class= "autonomias"v-for= "(k,v) in this.autonomicas">
              <h4>{{k.Autonomía}}</h4>
              <li class="u-text-overline" v-for= "party in k.Partidos">{{party}}</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import Masonry from "masonry-layout";
  import {  mapState } from 'vuex';
  import { TipiLoader } from 'tipi-uikit'
  import nestedGroupby from 'nested-groupby';
  import ProposalCard from '@/components/ProposalCard.vue'
  export default {
    name: 'IndexManifestos',
    data: function() {
      return {
        autonomicas: {},
        index: [],
        europeas: {},
        generales: [],
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
        this.aut_keys = (Object.keys(this.index.Autonómicas)).sort();
        this.europeas = this.build_gen_eur(Object.values(this.index.Europeas));
        this.generales = this.build_gen_eur(Object.values(this.index.Generales));
        this.autonomicas = this.build_autonomics(this.aut_keys, this.index)
      },
      build_gen_eur: function(dict)  {
        var sorts = []
        dict.forEach((obj) => {
          var claves = []
          obj.forEach((value) => {
            claves.push(value.political_party)
          })
          claves.sort()
          sorts.push(claves)
        })
        return sorts;
      },
      build_autonomics: (keys, index) => {
        var autonomics = []
        let indice = index.Autonómicas
        keys.forEach(function(key) {
          var partidos = []
          indice[key].forEach((manifesto)=>{
            partidos.push(manifesto.political_party)
          })
          autonomics.push({'Autonomía': key, 'Partidos': partidos.sort()})
        })
        return autonomics;
      }
    },
    watch: {
      manifestos: function() {
        if (this.manifestos && this.manifestos.length) {
          this.groupByParty();
        }
      },
    },
    mounted: function() {
      this.groupByParty();
      window.addEventListener('resize', function() {
        this.groupByParty();
      }.bind(this));
    },
  };
</script>
<style scoped lang="scss">
.u-text-th3{
  list-style: none;
  padding-left:20px;
}
.autonomias{
  padding-top:10px;
  list-style: none;
  padding-left:20px;
}
.u-text-overline{
  padding-top:08px;
  padding-left: 45px;
  color: #354661;
}
</style>


