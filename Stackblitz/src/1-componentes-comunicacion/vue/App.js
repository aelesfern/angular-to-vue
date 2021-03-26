import TodosView from './components/TodosView';

export default {
  components: {
    "todos-view": TodosView
  },
  template: `
    <section>
      <h1>ToDo Vue</h1>
      <todos-view></todos-view>
    </section>
  `
};
