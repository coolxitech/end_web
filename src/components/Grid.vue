<template>
  <div class="grid-container" ref="gridContainer" :style="gridStyle">
    <div
        class="grid-item"
        v-for="(item, index) in items"
        :key="index"
        :style="getItemStyle(item)"
        @mousedown="onDragStart($event, item, index)"
    >
      <div
          class="grid-item-content"
          :style="{ width: item.width + 'px', height: item.height + 'px' }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Number,
      default: 5, // 默认 5 行
    },
    columns: {
      type: Number,
      default: 5, // 默认 5 列
    },
    cellSize: {
      type: Number,
      default: 100, // 默认每个格子 100px
    },
  },
  data() {
    return {
      items: [],
      draggingItem: null,
      dragStartPos: { x: 0, y: 0 },
      gridWidth: 0,
      gridHeight: 0,
    };
  },
  computed: {
    gridStyle() {
      return {
        width: `${this.columns * this.cellSize}px`,
        height: `${this.rows * this.cellSize}px`,
      };
    },
  },
  methods: {
    initializeGrid() {
      this.items = [];
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.columns; col++) {
          this.items.push({
            x: col * this.cellSize,
            y: row * this.cellSize,
            width: this.cellSize,
            height: this.cellSize,
            content: `${row}-${col}`,
          });
        }
      }
    },
    getItemStyle(item) {
      return {
        position: 'absolute',
        left: `${item.x}px`,
        top: `${item.y}px`,
        cursor: 'move',
      };
    },
    onDragStart(event, item, index) {
      this.draggingItem = { ...item, index };
      this.dragStartPos = { x: event.clientX, y: event.clientY };
      document.addEventListener('mousemove', this.onDragMove);
      document.addEventListener('mouseup', this.onDragEnd);
    },
    onDragMove(event) {
      const dx = event.clientX - this.dragStartPos.x;
      const dy = event.clientY - this.dragStartPos.y;

      this.items[this.draggingItem.index].x = this.draggingItem.x + dx;
      this.items[this.draggingItem.index].y = this.draggingItem.y + dy;

      this.gridWidth = this.$refs.gridContainer.offsetWidth;
      this.gridHeight = this.$refs.gridContainer.offsetHeight;

      this.dragStartPos = { x: event.clientX, y: event.clientY };
    },
    onDragEnd() {
      document.removeEventListener('mousemove', this.onDragMove);
      document.removeEventListener('mouseup', this.onDragEnd);
      this.draggingItem = null;
    },
  },
  mounted() {
    this.initializeGrid();
  },
};
</script>

<style scoped>
.grid-container {
  position: relative;
  border: 1px solid #ccc;
}

.grid-item {
  position: absolute;
  user-select: none;
}

.grid-item-content {
  background-color: #eee;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
