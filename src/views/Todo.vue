<template>
  <div>
    <typingbar v-model="newValue" />
    <todolist :items="todoitems" />
  </div>
</template>

<script>
import todolist from "@/components/todolist";
import typingbar from "@/components/typingbar";

export default {
  data() {
    return {
      todoitems: ["finish todo app", "sleep", "look on reddit", "go to music repetition", "english homework"],
      newValue: ""
    };
  },

  components: {
    todolist,
    typingbar
  }
};
</script>
