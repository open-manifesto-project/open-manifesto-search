import config from '@/config';
import axios from 'axios';

const qs = require("qs");


export default {
  getManifestos() {
    return axios.get(getEndpoint()).then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/manifestos'
      ].join('');
    }
  },
  getElectionTypes() {
    return axios.get(getEndpoint()).then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/manifestos/election-types'
      ].join('');
    }
  },
  getGeographicalAreas() {
    return axios.get(getEndpoint()).then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/manifestos/geographical-areas'
      ].join('');
    }
  },
  getPoliticalParties() {
    return axios.get(getEndpoint()).then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/manifestos/political-parties'
      ].join('');
    }
  },
  getManifesto(manifestoId) {
    return axios.get(getEndpoint(manifestoId)).then(response => response.data);

    function getEndpoint(manifestoId) {
      return [
        config.URL,
        '/manifestos/',
        manifestoId
      ].join('');
    }
  },
  getProposals(params) {
    Object.keys(params).forEach(key => !params[key] && delete params[key]);

    return axios
      .get(getEndpoint(), {
        params: params,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        },
      })
      .then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/proposals'
      ].join('');
    }
  },
  getProposalTopics() {
    return axios.get(getEndpoint()).then(response => response.data);

    function getEndpoint() {
      return [
        config.URL,
        '/proposals/topics'
      ].join('');
    }
  },
  getProposal(proposalId) {
    return axios.get(getEndpoint(proposalId)).then(response => response.data);

    function getEndpoint(proposalId) {
      return [
        config.URL,
        '/proposals/',
        proposalId
      ].join('');
    }
  }
};
