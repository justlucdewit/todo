<template>
  <div>
    <typingbar v-model="newValue" :addItem="addItem"/>
    <todolist :items="todoitems" />
  </div>
</template>

<script>
import todolist from "@/components/todolist";
import typingbar from "@/components/typingbar";

export default {
  data() {
    return {
      todoitems: [],
      newValue: ""
    };
  },

  methods: {
    addItem: function() {
      this.todoitems.push(this.newValue);
      this.newValue = "";
    }
  },

  components: {
    todolist,
    typingbar
  }
};
</script>
