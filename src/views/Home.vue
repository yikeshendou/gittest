<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
    </el-input>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      input: ''
    }
  }
}


</script>
