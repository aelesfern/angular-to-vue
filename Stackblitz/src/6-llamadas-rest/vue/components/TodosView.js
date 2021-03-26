import TodoList from './TodoList';
import CustomValidationsMixin from '../mixins/custom-validations.mixin';

export default {
  components: {
      'todo-list': TodoList
  },
  mixins: [CustomValidationsMixin],
  template: `
    <div>
      <todo-list :todos="todos" @remove="removeTodo" ref="todoListComponent"></todo-list>
      <button @click="removeAll()">Eliminar todos</button>
      <form @submit.prevent="addTodo" >
        <label>Añadir tarea
          <input type="text" v-model="newTodo"/>
        </label>
        <button :disabled="newTodo.length < 5 || !looksLegit(newTodo)">Añadir</button>
      </form>
    </div>
  `,
  data: () => ({
    todos: [{ value: "Limpiar los platos", done: true }],
    newTodo: ""
  }),
  created: function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => res.map(todo => ({value: todo.title, done: todo.completed})))
      .then(todos => todos.slice(0,5))
      .then(todos => this.todos = todos);
  },
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
