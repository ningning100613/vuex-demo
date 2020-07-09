<template>
  <div class="course-card" @click="goVideoList(course)">
    <div class="card-img">
      <img :src="course.thumb" alt mode />
    </div>
    <div class="card-info">
      <div class="card-info__name">
        {{}}
        <div class="card-info__desc" v-html="course.description"></div>
      </div>
      <div class="card-info__oth" v-if="course.charge">{{course.charge}}</div>
      <div class="card-info__oth" v-else>免费课程</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coures: {
      type: Object,
      default: () => {}
    }
  },
  props: {
    coures: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    goVideoList() {
      this.$emit("goVideoList", this.coures);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>