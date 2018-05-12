<template>
	<mdc-toolbar waterfall>
		<mdc-toolbar-row>
			<mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
        <mdc-toolbar-title>Agora</mdc-toolbar-title>
			</mdc-toolbar-section>
			<mdc-toolbar-section align-end>
        <menu-component />
			</mdc-toolbar-section>
		</mdc-toolbar-row>
	</mdc-toolbar>
</template>
<script lang='ts'>
import MenuComponent from './MenuComponent.vue';
export default {
  name: 'ToolbarComponent',
  components: {
    MenuComponent
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
