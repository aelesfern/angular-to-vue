import TodosView from './components/TodosView';

export default {
  components: {
    "todos-view": TodosView
  },
  template: `
  <section v-this-is-vue="{px: 5, borderStyle: 'dashed'}">
      <h1>ToDo Vue</h1>
      <todos-view></todos-view>
    </section>
  `
};
