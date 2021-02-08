<template>
  <div id="proposal" class="o-container o-section u-margin-bottom-10" v-if="proposal">
     <proposal-detail :proposal="proposal" :manifesto="getManifesto(proposal.id_manifesto)"  :logosStyles="logosStyles"  />
  </div>
</template>

<script>
import api from '@/api'
import config from '@/config'
import { mapState } from 'vuex';
import ProposalDetail from '@/components/ProposalDetail.vue'

export default {
  name: 'Proposal',
  components: {
    ProposalDetail,
  },
  data() {
    return {
      proposal: null,
      logosStyles: config.STYLES.logos,
    }
  },
  computed: {
    ...mapState({
      manifestos: 'allManifestos',
    })
  },
  methods: {
    getProposal: function() {
      api.getProposal(this.$route.params.id)
        .then(response => {
          this.proposal = response
        })
        .catch(error => {
          this.errors = error
          this.$router.push({name: 'Page404', params: { '0': '404'}})
        });
    },
    getManifesto: function(id) {
      return this.manifestos.filter(function(m) { return m.id === id })[0];
    }
  },
  created: function() {
    this.getProposal()
  },
  watch: {
    '$route': 'getProposal'
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 1.2em;
}
</style>
