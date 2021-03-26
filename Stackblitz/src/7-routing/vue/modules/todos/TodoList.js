import TodoItem from './TodoItem';

export default {
  components: {
    "todo-item": TodoItem
  },
  template: `
    <div>
      <card-item v-for="todo in todos" :todo="todo" :key="todo.value">
        <todo-item :todo="todo" slot="content"></todo-item>
        <button slot="footer" @click="remove(todo)">Eliminar</button>
      </card-item>
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
