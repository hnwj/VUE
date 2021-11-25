export default {
  install(Vue,x,y,z) {
    console.log(x,y,z);
    //过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 6);
    });

    //定义全局指令
    Vue.directive("fbind", {
      bind(element, binding) {
        element.value = binding.value;
      },
      inserted(element) {
        element.focus();
      },
      //指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value;
        element.focus();
      },
    });

    //定义混入
    Vue.mixin({
      data(){
        return{
          x:10,
          y:20
        }
      }
    })

    //在原型上添加一个方法
    Vue.prototype.hello=()=>{
      alert('清华大学欢迎您！')
    }
  },
};
