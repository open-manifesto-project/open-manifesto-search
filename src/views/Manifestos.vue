<template>
  <div>
    <div id="about" class="o-container o-section u-margin-bottom-10">
      <tipi-header title="Índice de programas"/>
        <index-manifestos />
    </div>
  </div>
</template>

<script>
import { TipiHeader } from 'tipi-uikit';
import IndexManifestos from '@/components/index_manifestos.vue'
export default {
  name: 'manifestos',
  components: {
    TipiHeader,
    IndexManifestos,
  },
}
</script>

