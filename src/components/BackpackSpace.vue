<script>
import VueGridLayout from 'vue-grid-layout-next/dist/vue-grid-layout-next.mjs'

export default {
  name: "BackpackSpace",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    const images = import.meta.glob('@/assets/*.jpg');
    return {
      images,
    }
  },
  mounted() {
  },
  props: {
    data: {
      type: Array,
      default: [],
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    hidden: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  methods: {
    requireImage: (imageName) => {
      // 使用 require 来动态加载图片
      return new URL(`@/assets/${imageName}`, import.meta.url).href;
    },
  }
}
</script>

<template>
  <grid-layout
      :layout.sync="data"
      :colNum="8"
      :rowHeight="64"
      :colWidth="64"
      :maxRows="20"
      :maxCols="12"
      :is-draggable="true"
      :is-resizable="false"
      :vertical-compact="false"
      :use-css-transforms="true"
      :autoSize="true"
      :verticalCompact="false"
      :preventCollision="true"
      :responsive="true"
      :useStyleCursor="true"
      :margin="[1, 1]"
      class="grid"
  >

    <grid-item v-for="item in data"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               :key="item.id"
               :static="item.static"
    >
      <div :class="'container_'+ (item.grade === 1 ? 'while' : item.grade === 2 ? 'green' : item.grade === 3 ? 'blue' : item.grade === 4 ? 'purple' : item.grade === 5 ? 'gold' : 'red')">
        <img :src="'https://playerhub.df.qq.com/playerhub/60004/object/'+item.id+'.png'" :alt="item.title" class="image"/>
        <p class="text">{{ item.title }}</p>
      </div>
    </grid-item>
  </grid-layout>
</template>

<style scoped>
.container_while{
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
}
.container_green {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(7, 241, 18, 0.6);
}
.container_blue {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(71, 118, 251, 0.6);
}
.container_purple {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(104, 85, 135, 0.6);
}
.container_gold {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(181, 155, 33, 0.6);
}
.container_red {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(244, 52, 52, 0.6);
}
[class^="container_"]:hover, [class^="container_"]:focus {
  filter: brightness(1.2); /* 增加亮度，值越大越亮 */
  outline: none;
}

.container_legends {
  position: relative; /* 确保文字可以绝对定位 */
  border: 1px solid #ccc; /* 可选，便于查看容器边界 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: rgba(104, 85, 135, 0.6);
}

.image {
  display: block; /* 确保图片是块级元素 */
  width: 100%; /* 图片自适应容器宽度 */
  height: 100%; /* 图片自适应容器高度 */
  object-fit: cover; /* 图片保持比例填充整个容器，可能裁剪 */
  user-select: none;
  pointer-events: none;
}

.text {
  position: absolute; /* 文字绝对定位 */
  top: 0; /* 文字距离容器顶部为0 */
  left: 0; /* 文字距离容器左边为0 */
  margin: 1px; /* 让文字距离左上角有一点间距 */
  color: white; /* 白色文字，便于和图片对比 */
  font-size: 9px; /* 设置文字大小 */
}


</style>