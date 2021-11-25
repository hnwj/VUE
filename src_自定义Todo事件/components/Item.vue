<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="checkState(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox"/> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    checkState(id) {
      //通知App组件，获取勾选的状态
      this.checkTodo(id);
    },
    handleDel(id) {
      //通知App组件，删除对象
      if (confirm("您确定删除吗？")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>