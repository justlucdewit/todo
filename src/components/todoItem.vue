<template>
  <div id="wrapper">
    <!--check mark to complete the item and text to explain it-->
    <b-form-checkbox v-model="done" value="done" unchecked-value="not done">
      <s v-if="done === 'done'" class="todo-checked">{{ text }}</s>
      <span v-else class="todo-not-checked">{{ text }}</span>
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },

  data() {
    return {
      done: "not done"
    };
  }
};
</script>

<style>
#wrapper {
  float: left;
}

.todo-checked {
  color: #aaa;
  font-weight: normal;
}

.todo-not-checked {
  color: black;
  font-weight: bolder;
}
</style>
