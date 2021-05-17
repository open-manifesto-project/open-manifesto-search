<template>
  <div>
    <article class="c-initiative-card" :id="`initiative-card-${proposal.id}`">
      <topic-pill class="c-initiative-card__topics"  :topicsStyles="logosStyles" :topics="proposal.topics"/>
        <h2 class="c-initiative-card__title" >{{proposal.body}}</h2>
        <div class="o-grid">
          <div class=" o-grid__col u-12 u-2@xs">
            <img :src="`/img/manifestoLogos/${this.logosStyles[manifesto.political_party].logo}`" width="100%" height = "100%" style="border-radius:50%;">
          </div>
          <div class="o-grid__col u-12 u-10@xs">
            <div class="u-text-th9">{{manifesto.political_party}}</div>
            <div class="u-text-overline" >
              <span class="u-color-secondary-dark">{{manifesto.election_type}}</span>
              <span class="u-color-secondary" v-if="manifesto.election_type == 'Autonómicas'">{{manifesto.geographical_area}}</span>
            </div>
          </div>
        </div>
        <div class="o-grid proposal-links">
          <div class=" o-grid__col u-12 u-6@sm">
            <a class="proposal-link" :href="partySearchUrl">Ver otras propuestas del {{ manifesto.political_party }}</a>
          </div>
          <div class=" o-grid__col u-12 u-6@sm">
            <a class="proposal-link" :href="electionsSearchUrl">Ver otras propuestas de {{ manifesto.election_type }} {{ manifesto.geographical_area }}</a>
          </div>
        </div>
    </article>
  </div>
</template>

<script>
import {TipiIcon, TipiText} from 'tipi-uikit'
import TopicPill from '@/components/TopicPill.vue'

export default {
  name: 'ProposalDetail',
  components: {
    TipiIcon,
    TopicPill,
    TipiText,
  },
  data: function() {
    return {
    }
  },
  computed: {
    partySearchUrl: function () {
      return '/results/political_party=' + this.manifesto.political_party
    },
    electionsSearchUrl: function () {
      return '/results/election_type=' + this.manifesto.election_type + '&geographical_area=' + this.manifesto.geographical_area
    }
  },
  props: {
    proposal: Object,
    logosStyles: Object,
    manifesto: Object,
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.u-text-overline {
  font-size: 10px;
  line-height: 20px;
  span{
    margin-right: 5px;
  }
}
.u-text-th9 {
  font-weight: bold;
  font-size: 16px;
  line-height:28px
}

.proposal-links {
  margin-top: 50px;
}

.proposal-link {
  font-size: 1rem;
}

.c-initiative-card .c-initiative-card__title {
  font-size: 1.5rem;
}

</style>
