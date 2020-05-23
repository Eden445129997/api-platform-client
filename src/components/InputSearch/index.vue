<template>
  <div class="InputSearch">
    <a-input-search placeholder="input search text" style="width: 200px" v-on:search="onSearch" />
  </div>
</template>
<script>

export default {
  name: 'InputSearch',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    // input标签传值给父组件
    onSearch (inputData) {
      let keyword = ''
      if (inputData !== undefined) {
        keyword = inputData
      }
      this.$emit('updateData', keyword)
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>
