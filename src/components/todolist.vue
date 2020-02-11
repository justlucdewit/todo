<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="item in items" :key="item">
        <todoItem :text="item" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import todoItem from "@/components/todoItem";

export default {
  props: {
    items: Array
  },

  components: {
    todoItem
  }
};
</script>
