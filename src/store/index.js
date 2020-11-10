import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

const types = {
  GET_PROPOSALS: 'GET_PROPOSALS',
  GET_MANIFESTOS: 'GET_MANIFESTOS',
  GET_DEPUTIES: 'GET_DEPUTIES',
  GET_POLITICAL_PARTIES: 'GET_POLITICAL_PARTIES',
  GET_ELECTION_TYPES: 'GET_ELECTION_TYPES',
  GET_GEOGRAPHICAL_AREAS: 'GET_GEOGRAPHICAL_AREAS',
  GET_PROPOSAL_TOPICS: 'GET_PROPOSAL_TOPICS',
};


const state = {
  allElectionTypes: [],
  allManifestos:[],
  allProposals: [],
  allPoliticalParties: [],
  allGeographicalAreas: [],
  allProposalTopics:[],
};


const actions = {
  getProposals(context) {
    api.getProposals()
      .then(response => {
        context.commit(types.GET_PROPOSALS, response);
      })
      .catch(error => this.errors = error);
  },
  getPoliticalParties(context) {
    api.getPoliticalParties()
      .then(response => {
        context.commit(types.GET_POLITICAL_PARTIES, response);
      })
      .catch(error => this.errors = error);
  },
  getManifestos(context){
    api.getManifestos()
      .then(response => {
        context.commit(types.GET_MANIFESTOS, response);
      })
      .catch(error => this.errors = error);
  },
  getProposalTopics(context) {
    api.getProposalTopics()
      .then(response => {
        context.commit(types.GET_PROPOSAL_TOPICS, response);
      })
      .catch(error => this.errors = error);
  },
  getGeographicalAreas(context) {
    api.getGeographicalAreas()
      .then(response => {
        context.commit(types.GET_GEOGRAPHICAL_AREAS, response);
      })
      .catch(error => this.errors = error);
  },
  getElectionTypes(context) {
    api.getElectionTypes()
      .then(response => {
        context.commit(types.GET_ELECTION_TYPES, response);
      })
      .catch(error => this.errors = error);
  },
};

const mutations = {
  [types.GET_PROPOSALS](state, proposals) {
    state.allProposals = proposals;
  },
  [types.GET_MANIFESTOS](state, manifestos) {
    state.allManifestos = manifestos;
  },
  [types.GET_POLITICAL_PARTIES](state, political_parties) {
    state.allPoliticalParties = political_parties;
  },
  [types.GET_PROPOSAL_TOPICS](state, proposal_topics) {
    state.allProposalTopics = proposal_topics;
  },
  [types.GET_GEOGRAPHICAL_AREAS](state, geographical_areas) {
    geographical_areas.splice(geographical_areas.indexOf('Estado español'), 1)
    state.allGeographicalAreas = geographical_areas.sort();
  },
  [types.GET_ELECTION_TYPES](state, election_types) {
    state.allElectionTypes = election_types;
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
