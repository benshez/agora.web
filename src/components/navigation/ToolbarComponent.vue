<template>
	<mdc-toolbar waterfall>
		<mdc-toolbar-row>
			<mdc-toolbar-section align-start >
			<mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
			<mdc-toolbar-title>Agora</mdc-toolbar-title>
			</mdc-toolbar-section>
			<mdc-toolbar-section align-end>
			<mdc-toolbar-icon event="show-help" icon="help"
				href="https://stasson.github.io/vue-mdc-adapter/#/docs/getting-started"
				target="_blank"
			></mdc-toolbar-icon>
			</mdc-toolbar-section>
		</mdc-toolbar-row>
	</mdc-toolbar>
</template>
<script>
export default {
  name: 'ToolbarComponent'
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
