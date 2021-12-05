<template>
  <li>
    <label>
      <!-- <input
        type="checkbox"
        :checked="todo.done"
        @change="checkState(todo.id)"
      /> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="checkState(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        :value="todo.title"
        v-show="todo.isEdit"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  // props: ["todo", "checkTodo", "deleteTodo"],
  props: ["todo"],
  methods: {
    checkState(id) {
      //通知App组件，获取勾选的状态
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    handleDel(id) {
      //通知App组件，删除对象
      if (confirm("您确定删除吗？")) {
        //   // this.deleteTodo(id);
        //全局事件总线
        //   this.$bus.$emit("deleteTodo", id);
        //消息的发布与订阅实现
        pubsub.publish("deleteTodo", id);
      }
    },
    //实现编辑
    handleEdit(todo) {
      //如果todo身上有isEdit，则不追加isEdit
      //使用Reflect.has(obj,'属性名')去判断该实例是否存在某一个属性
      //if(obj.hasOwnProperty(obj,'属性名称'))   //可以尝试以下（具体参见csdn）
      //if(obj.property.hasOwnProperty.call(obj,'属性名称'))   //可以尝试以下（具体参见csdn）
      if (Reflect.has(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      //解决方案一，使用nextTick（官方推荐）
      // //在下一次DOM更新结束后执行其指定的回调
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });

      //解决方案二
      // setTimeout(() => {
      //    this.$refs.inputTitle.focus();
      // });
    },
    //失去焦点回调
    handleBlur(todo, e) {
      todo.isEdit = false;
      console.log(todo.id, e.target.value);
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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
