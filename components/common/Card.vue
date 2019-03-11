<template>
    <div class="card">
      <slot name="content" v-if="hospital" ></slot> 
      <slot name="content" v-if="station" ></slot> 
    </div>
</template>

<script>
export default {
  props: {
    content:String,
    hospital:Boolean,
    station:Boolean
  }
};
</script>

<style scoped>
.card {
  box-shadow: rgb(204, 204, 204,0.7) 3px 4px 20px;
  border-radius: 8px;
  color: rgb(128, 130, 133);
  padding: 20px;
  margin: 20px 2%;
}

</style>