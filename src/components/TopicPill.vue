<template>
  <div class="c-topics" v-html="getTopics(topics)"></div>
</template>

<script>
export default {
  name: 'TopicPill',
  props: {
    topics: Array,
    topicsStyles: Object,
  },
  methods: {
    getTopics: function(topics) {
      if (this.topicsStyles && topics.length) {
        return topics.map((element)=> {
            return `
              <div class="c-topics__topic" style="background-color:#ebebeb">
                ${element}
              </div>
            `;
        }).join('&nbsp &nbsp');
      }
      return topics.length ?
        topics.join('<br/>') :
        `<div class="c-topics__topic" style="background-color: #000; color: #fff;">
          ${this.topicsStyles['no-topic'] ? this.topicsStyles['no-topic'].shortname : 'Sin temática'}
        </div>`;
    },
  },
};
</script>
