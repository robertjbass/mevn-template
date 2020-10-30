<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <h3>Custom MEVN Boilerplate</h3>
    <ul>
      <li v-for="item in this.listItem" :key="item.id">{{ item.item }}</li>
    </ul>
    <h3>Objects</h3>
    <ul>
      <li v-for="(item, i) in this.listItem" :key="item.id">
        {{ i }}: {{ item.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    title: String,
  },
  data() {
    return {
      listItem: [
        { id: 1, item: "item 1", date: new Date().getUTCMonth() },
        { id: 2, item: "item 2", date: new Date().getUTCDay() },
        { id: 3, item: "item 3", date: new Date().getUTCFullYear() },
        { id: 4, item: "item 4", date: new Date().getUTCDate() },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
