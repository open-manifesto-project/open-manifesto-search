export default {
  SHORTNAME: process.env.VUE_APP_SHORTNAME || 'omp',
  URL: 'https://api.openmanifestoproject.org',
  //URL: 'http://localhost:5000',
  USE_ALERTS: process.env.VUE_APP_USE_ALERTS || false,
  MENU: [
  {
      route : 'search',
      name: 'Buscar',
      condition: true,
    },
    {
      route: 'manifestos',
      name: 'Índice de programas',
      condition: true,
    },
  ],
  LOGO: '/img/omp-white.png',
  DEFAULT_PAGE_TITLE: 'Open Manifesto Project',
  DEFAULT_METATAGS: [      ],
  STYLES: {
    logos: {
      "PNV": {
        logo: "eajpnv.png",
      },
      "Unides Podem": {
        logo: "unidespodem.jpg",
      },
      "Geroa Bai": {
        logo: "geroabai.png",
      },
      "Compromís": {
        logo: "compromis.jpg",
      },
      "Podemos-EQUO": {
        logo: "podemos-equo.png",
      },
      "Más País": {
        logo: "mas-pais.jpg",
      },
      "Unión del Pueblo Leonés": {
        logo: "unionpuebloleones.jpg",
      },
      "Junts per Catalunya": {
        logo: "jxcat.png",
      },
      "Partido Socialista de Euskadi": {
        logo: "pse-ee.png",
      },
      "Más Madrid": {
        logo: "masmadrid.jpg",
      },
      "Por Ávila": {
        logo: "poravila.png",
      },
      "Adelante Andalucía": {
        logo: "adelanteandalucia.png",
      },
      "Chunta Aragonesista": {
        logo: "chuntaaragon.png",
      },
      "Podemos": {
        logo: "podemos.jpg",
      },
      "PSOE": {
        logo: "psoe.png",
      },
      "PODEMOS-IU-EXTREMEÑOS-EQUO": {
        logo: "unidasextremadura.png",
      },
      "Navarra+": {
        logo: "navarrasuma.jpg",
      },
      "Esquerra Republicana de Catalunya": {
        logo: "erc.png",
      },
      "PSC": {
        logo: "psc.png",
      },
      "CUP": {
        logo: "cup.png",
      },
      "Unidas Podemos": {
        logo: "unidaspodemos.png",
      },
      "Partido Popular": {
        logo: "pp.png",
      },
      "Izquierda Unida": {
        logo: "iu.png",
      },
      "EH Bildu": {
        logo: "bildu.png",
      },
      "Ciudadanos": {
        logo: "ciudadanos.png",
      },
      "VOX": {
        logo: "vox.png",
      },
      "Partido Regionalista de Cantabria":{
        logo: "prc.png"
      },
      "En Comú-Podem": {
        logo: "encomupodem.jpg"
      },
    },
    defaultColor: "#cecece",
    defaultImage: "placeholder.png",
  },
}
