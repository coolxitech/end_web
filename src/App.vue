<script setup>
import BackpackSpace from "./components/BackpackSpace.vue";
import {ref} from "vue";

const data = ref([
  {"x": 0, "y": 0, "w": 1, "h": 1, "i": "0", "id": 15060080003, "title": '基础蛋白粉', 'grade': 1, 'static': false},
  {"x": 1, "y": 0, "w": 2, "h": 1, "i": "1", "id": 15020010008, "title": '原木木板', 'grade': 2},
  {"x": 5, "y": 0, "w": 2, "h": 2, "i": "2", "id": 15020010016, "title": '一桶油漆', 'grade': 3},
  {"x": 0, "y": 2, "w": 2, "h": 2, "i": "3", "id": 15030040007, "title": 'ASOS电脑主板', 'grade': 4},
  {"x": 2, "y": 2, "w": 2, "h": 2, "i": "4", "id": 15030050019, "title": '军用炸药', 'grade': 5},
  {"x": 3, "y": 3, "w": 3, "h": 4, "i": "5", "id": 15020010033, "title": '火箭燃料', 'grade': 6},
]);
</script>

<template>
  <BackpackSpace :data="data" :height="30" :width="12" style="width: 512px;height: 1024px;"/>
<!--  <grid rows="15" columns="10"></grid>-->
</template>

<style scoped>

</style>
