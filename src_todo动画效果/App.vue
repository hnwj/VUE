<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <!-- <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" /> -->
        <List :todos="todos" />
        <MyFooter
          :todos="todos"
          @clearAllTodo="clearAllTodo"
          @checkAllTodo="checkAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    List,
  },
  data() {
    return {
      // todos: [
      //   // { id: "001", title: "洗脸", done: true },
      //   // { id: "002", title: "刷牙", done: false },
      //   // { id: "003", title: "追剧", done: false },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    //添加一个新的todoObj
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选或取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) return (todo.done = !todo.done);
      });
    },
    //删除
    // deleteTodo(id) {
    //   this.todos = this.todos.filter((todo) => {
    //     return todo.id != id;
    //   });
    // },
    //使用消息订阅与发布，_占位
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id != id;
      });
    },
    //删除已完成的对象
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    //全选或全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    //全局事件总线
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    //消息的订阅与发布实现
    this.pubid = pubsub.subscribe("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pubid);
    this.$bus.$off("updateTodo");
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(109, 109, 216);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
