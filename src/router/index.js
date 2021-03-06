import Vue from 'vue'
import Page404 from '@/views/Page404.vue'
import config from '@/config';
import VueRouter from 'vue-router'
import Proposal from '@/views/Proposal.vue'
import Search from '@/views/Search.vue'
import Manifestos from '@/views/Manifestos.vue'
// eslint-disable-next-line no-unused-vars
import from from "core-js/features/array/from";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "search",
    component: Search,
    meta: {
      title: 'Buscar Propuestas',
      metaTags: [
        {
          name: 'description',
          content: 'Test Buscar'
        },
        {
          property: 'og:description',
          content: 'Test Buscar'
        },
        {
          property: 'og:title',
          content: 'Test Buscar'
        }
        , ...config.DEFAULT_METATAGS]
    }
  },
    {
    path: "/manifestos",
    name: "manifestos",
    component: Manifestos,
    meta: {
      title: 'Índice de programas',
      metaTags: [
        {
          name: 'description',
          content: 'Test Manifestos'
        },
        {
          property: 'og:description',
          content: 'Test Manifestos'
        },
        {
          property: 'og:title',
          content: 'Test Manifestos'
        }
        , ...config.DEFAULT_METATAGS]
    }
  },

  {
    path: "/results/:data?",
    name: "results",
    component: Search,
    meta: {
      title: 'Resultados - Open Manifesto Project',
      metaTags: [{
          name: 'description',
          content: 'Test Resultados'
        },
        {
          property: 'og:description',
          content: 'Test Resultados'
        }
        , ...config.DEFAULT_METATAGS
      ]
    }
  },
  {
    path: "/proposal/:id",
    name: "proposal",
    component: Proposal,
    meta: {
      title: 'Propuestas',
      metaTags: [{
          name: 'description',
          content: 'Propuesta'
        },
        {
          property: 'og:description',
          content: 'Propuesta'
        }
        , ...config.DEFAULT_METATAGS
      ]
    }
  },
  {
    path: "/*",
    name: "Page404",
    component: Page404
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: routes
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  else document.title = config.DEFAULT_PAGE_TITLE;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  let metaTags = !nearestWithMeta ? config.DEFAULT_METATAGS : nearestWithMeta.meta.metaTags;

  if (nearestWithMeta) {
    metaTags = metaTags.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj['name']).indexOf(obj['name']) === pos || arr.map(mapObj => mapObj['property']).indexOf(obj['property']) === pos;
    });
  }

  metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
