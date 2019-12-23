<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <section v-if="isProjectSelected">
      <dashboard></dashboard>
    </section>
    <section v-else><h1 style="font-size: xx-large; margin-bottom: 2%"> Project Manager</h1><br>
      <b-tabs size="is-medium" position="is-centered" class="block" type="is-toggle-rounded">
        <b-tab-item label="Projects" icon="clipboard-list">
          <Home></Home>
        </b-tab-item>
        <b-tab-item label="Create" icon="plus">
          <create></create>
        </b-tab-item>
        <b-tab-item label="Import" icon="file-import">
          <Import></Import>
        </b-tab-item>
      </b-tabs>
    </section>

  </div>
</template>

<script>
  // eslint-disable-next-line import/extensions
  import Home from './views/Home';
  // eslint-disable-next-line import/extensions
  import Create from './views/Create';
  // eslint-disable-next-line import/extensions
  import Import from './views/Import';
  import Dashboard from './components/dashboard/dashboard'

  export default {
    name: 'app',
    components: {
      Home,
      Create,
      Import,
      Dashboard
    },
    data: () => {
      return {
        isProjectSelected: true
      }
    }
  };
</script>

<style>
  #app {
    text-align: center;
  }

</style>
