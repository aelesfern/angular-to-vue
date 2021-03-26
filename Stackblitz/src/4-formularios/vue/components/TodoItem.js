export default {
  template: `
    <ol>
      <li><input type="checkbox" v-model="todo.done" /></li>
      <li>{{ todo.value }}</li>
    </ol>
  `,
  props: {
    todo: {
      type: Object,
      required: true,
      validator: todo => todo.value && typeof todo.done !== "undefined"
    }
  }
};
// TODO: Delegate done logic to parent
