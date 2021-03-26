import TodoItem from './TodoItem';

export default {
  components: {
    "todo-item": TodoItem
  },
  template: `
    <div>
      <div v-for="todo in todos" :todo="todo" :key="todo.value">
        <todo-item :todo="todo"></todo-item>
        <button @click="remove">Eliminar</button>
      </div>
      <span>Total: {{ todoQuantity }} ToDo's</span>
    </div>
  `,
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    todoQuantity() {
        return this.todos.length;
    }
  },
  methods: {
    remove(todo) {
      this.$emit('remove', todo);
    }
  }
};
