import TodoList from './TodoList';

export default {
  components: {
      'todo-list': TodoList
  },
  template: `
    <div>
      <todo-list :todos="todos" @remove="removeTodo" ref="todoListComponent"></todo-list>
      <button @click="removeAll()">Eliminar todos</button>
      <form @submit.prevent="addTodo" >
        <label>Añadir tarea
          <input type="text" v-model="newTodo"/>
        </label>
        <button :disabled="newTodo.length < 5">Añadir</button>
      </form>
    </div>
  `,
  data: () => ({
    todos: [{ value: "Limpiar los platos", done: true }],
    newTodo: ""
  }),
  methods: {
    addTodo() {
      this.todos.push({ value: this.newTodo, done: false });
      this.newTodo = "";
    },
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
