/* eslint-disable no-console */
import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';

// 设置 env
dotenv.config();

const defaultEnv = dotenv.parse(fs.readFileSync('.env.default'));
for (const k in defaultEnv) {
  if (!process.env[k]) {
    process.env[k] = defaultEnv[k];
  }
}

const {
  MOCK, MOCK_SERVER_URL, NODE_ENV, BROWSER_BASE_URL, FILE_URL, BASE_URL,
  AXIOS_TIMEOUT, SERVER_PORT, AXIOS_LOG,
} = process.env;
const BASE_HOST = MOCK ? MOCK_SERVER_URL : BASE_URL;
const BROWSER_BASE_HOST = MOCK ? MOCK_SERVER_URL : BROWSER_BASE_URL;
const baseURL = `${BASE_HOST}`;
const browserBaseURL = `${BROWSER_BASE_HOST}`;
console.log(`BROWSER_BASE_HOST: ${BROWSER_BASE_HOST}`);
console.log(`BROWSER_BASE_URL: ${BROWSER_BASE_URL}`);


export default {
  // mode: 'spa',

  /*
  ** Headers of the  page
  */
  head: {
    title: '人民智力竞技',
    link : [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css    : [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  dotenv: {
    /* module options */
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** serverMiddleware
  */
  serverMiddleware: [
    { path: '/ping', handler: '@/serverMiddleware/ping.ts' }
  ],

  /*
  ** Nuxt.js router
  */
  router: {
    middleware: [],
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL,
    browserBaseURL,
    debug  : AXIOS_LOG === 'true',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  },

  /*
  ** env
  */
  env: {
    baseURL,
    browserBaseURL,
    BASE_HOST,
    BROWSER_BASE_HOST,
    FILE_URL,
    AXIOS_TIMEOUT: Number(AXIOS_TIMEOUT),
  },

  vue: {
    config: {
      productionTip: false,
      devtools     : true,
      performance  : true,
    },
  },

  /**
   * Server
   */
  server: {
    port  : SERVER_PORT, // default: 3000
    host  : '0.0.0.0', // default: localhost,
    timing: {
      total: true,
    },
  },

  /**
   * Build configuration
   */
  build: {
    publicPath: '/web_client/',
    postcss   : {
      autoprefixer: {
        browsers: ['last 3 versions'],
      },
    },
  },
};
