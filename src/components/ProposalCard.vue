<template>
  <div>
    <article class="c-initiative-card" :id="`initiative-card-${proposal.id}`">
      <topic-pill class="c-initiative-card__topics"  :topicsStyles="logosStyles" :topics="proposal.topics"/>
        <h2 class="c-initiative-card__title"><a :href="proposalUrl">{{proposal.body}}</a></h2>
        <div class="o-grid">
          <div class=" o-grid__col u-12 u-2@sm">
            <img :src="`/img/manifestoLogos/${this.logosStyles[manifesto.political_party].logo}`" width="100%" height = "100%" style="border-radius:50%;">
          </div>
          <div class="o-grid__col u-12 u-10@sm" >
            <div class="u-text-th9">{{manifesto.political_party}}</div>
            <div class="u-text-overline" >
              <span class="u-color-secondary-dark">{{manifesto.election_type}}</span>
              <span class="u-color-secondary" v-if="manifesto.election_type == 'Autonómicas'">{{manifesto.geographical_area}}</span> 
            </div>
          </div>
        </div>
    </article>
  </div>
</template>

<script>
import {TipiIcon, TipiText} from 'tipi-uikit';
import TopicPill from '@/components/TopicPill.vue';
export default {
  name: 'ProposalCard',
  components: {
    TipiIcon,
    TopicPill,
    TipiText,
  },
  computed: {
    proposalUrl: function () {
      return '/proposal/' + this.proposal.id
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


</style>
