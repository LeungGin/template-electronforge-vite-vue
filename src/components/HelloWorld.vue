<script setup>
import { ref, version as vueVer } from 'vue'
import { version as viteVer } from '../../node_modules/vite/package.json'

defineProps({
  msg: String,
})

const count = ref(0)
const nodeVer = versions.node()
const chromeVer = versions.chrome()
const electronVer = versions.electron()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    <strong>Electron</strong>
    <p class="lib-version">Node.js (v{{ nodeVer }}), Chrome (v{{ chromeVer }}), Electron (v{{ electronVer }})</p>
    <p>
      <a href="https://www.electronjs.org" target="_blank">Electron - Build cross-platform desktop apps with JavaScript, HTML, and CSS</a><br/>
      <a href="https://www.electronforge.io" target="_blank">Forge - Quickly scaffold an Electron project with a full build pipeline</a><br/>
      <a href="https://www.electronforge.io/templates/vite" target="_blank">Vite template - Create a new Electron app with Vite</a>
    </p>
  </p>
  <p>
    <strong>Vite</strong>
    <p class="lib-version"> v{{ viteVer }}</p>
    <p>
      <a href="https://vitejs.dev" target="_blank">Vite - Next Generation Frontend Tooling</a>
    </p>
  </p>
  <p>
    <strong>Vue</strong>
    <p class="lib-version"> v{{ vueVer }}</p>
    <p>
      <a href="https://vuejs.org" target="_blank">Vue - The Progressive JavaScript Framework</a><br/>
      Click
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar - High-performance Vue language tooling based-on Volar.js</a>
      to install extension
    </p>
  </p>
  <p class="read-the-docs"><br/>Click on the logos to learn more</p>
</template>

<style scoped>
.lib-version {
  color: #888;
}
.read-the-docs {
  color: #888;
}
</style>
