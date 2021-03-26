
export default {
    template: `
      <div>
          <ul v-for="todo in todos" :todo="todo" :key="todo.value">
              <li><input type="checkbox" v-model="todo.done" /></li>
              <li>{{ todo.value }}</li>
          </ul>
          <span>Total: {{ todoQuantity }} ToDo's</span>
      </div>
    `,
    data: () => ({
      todos: [{ value: "Limpiar los platos", done: true }]
    }),
    computed: {
        todoQuantity() {
            return this.todos.length;
        }
    }
  };
  