import TodoList from './TodoList';

export default {
  components: {
      'todo-list': TodoList
  },
  template: `
    <div>
      <todo-list :todos="todos" @remove="removeTodo" ref="todoListComponent"></todo-list>
      <button @click="removeAll()">Eliminar todos</button>
    </div>
  `,
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
      removeTodo(todo){
          this.todos = this.todos.filter(elem => elem !== todo);
      },
      /**
       * This method has been created to make an example of $refs usage, but its design is poor
       */
      removeAll() {
          this.todos.forEach(todo => this.$refs.todoListComponent.remove(todo));
      }
  }
};
