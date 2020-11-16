<template>
  <div>
    <div id="directory-listing" class="o-container o-section u-margin-bottom-10">
      <tipi-header title="Índice de programas"/>
        <div class="o-container o-section u-margin-bottom-10">
          <div class="o-grid">
            <div class="o-grid__col u-12 u-6@sm">
              <ul class="Europeas"> <h3>Europeas</h3>
                <li class="u-text-overline" v-for="party in this.europeans[0]" v-bind:key="party">{{party}}</li>
              </ul>
              <ul class="Generales"> <h3>Generales</h3>
                <li class="u-text-overline" v-for="party in this.generals[0]" v-bind:key="party">{{party}}</li>
              </ul>
            </div>
            <div class="o-grid__col u-12 u-6@sm">
              <ul class = "Autonómicas"><h3>Autonómicas</h3>
                <ul v-for="(k, i) in this.autonomic" v-bind:key="i">
                  <h4>{{k.Autonomía}}</h4>
                  <li class="u-text-overline" v-for="party in k.Partidos" v-bind:key="party">{{party}}</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Masonry from "masonry-layout";
  import { mapState } from 'vuex';
  import { TipiHeader, TipiLoader } from 'tipi-uikit'
  import nestedGroupby from 'nested-groupby';

  export default {
      name: 'manifestos',
      components: {
          Masonry,
          TipiHeader,
          TipiLoader
        },
      data: function() {
          return {
              index: [],
              europeans: {},
              generals: [],
              autonomic: {},
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
              this.aut_keys = (Object.keys(this.index['Autonómicas'])).sort();
              this.europeans = this.build_gen_eur(Object.values(this.index['Europeas']));
              this.generals = this.build_gen_eur(Object.values(this.index['Generales']));
              this.autonomic = this.build_autonomics(this.aut_keys, this.index)
            },
          build_gen_eur: function(aut_titles)  {
              var sorts = []
              aut_titles.forEach((autonomy) => {
                  var keys = []
                  autonomy.forEach((manifesto) => {
                      keys.push(manifesto.political_party)
                    })
                  keys.sort()
                  sorts.push(keys)
                })
              return sorts;
            },
          build_autonomics: (keys, index) => {
              var autonomics = []
              let front_index = index['Autonómicas']
              keys.forEach(function(key) {
                  var partidos = []
                  front_index[key].forEach((manifesto)=>{
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
li {
  list-style: none;
  padding-left:15px;
}
h3, h4 {
  padding-top: 15px;
}
</style>
