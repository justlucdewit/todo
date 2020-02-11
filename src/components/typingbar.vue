<template>
  <div>
    <b-form-input
      v-model="text"
      placeholder="Enter new todo item..."
      @input="updateNewItem()"
    >
    </b-form-input>
    <b-button variant="success">+</b-button>
  </div>
</template>

<script>
export default {
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
