<template>
  <div class="wrapper">
    <b-form-input
      v-model="text"
      placeholder="Enter new todo item..."
      @input="updateNewItem()"
    >
    </b-form-input>
    <b-button variant="success" @click="addItem()">+</b-button>
  </div>
</template>

<script>
export default {
  props: {
    addItem: Function
  },

  data() {
    return {
      text: ""
    };
  },

  methods: {
    updateNewItem() {
      this.$emit("input", this.text);
    }
  }
};
</script>

<style>
.form-control {
  width: 75% !important;
  margin-right: 5px;
  display: inline !important;
}

.wrapper {
  margin-bottom: 20px;
}
</style>
