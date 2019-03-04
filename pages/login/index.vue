<template>
  <div>
    <div class="header">TH/EN</div>
    <div class="container">
      <div class="container-footer  green-bar">
        <img src="~/assets/images/queq_element-01.png" class="img-footer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    return { name: "QueQ Hopsital Warroom : Login" };
  },
  fetch() {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    return {
      title: "QueQ Hopsital Warroom : Login"
    };
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}
.green-bar {
  border-bottom: 9px #45b383 solid;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
}
.container-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-footer {
  position: absolute;
  bottom: -5px;
  width: 50%;
  max-width: 500px;
  min-width: 200px;
}
</style>