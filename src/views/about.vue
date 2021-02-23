<template>
    <div class="picbox" >
        <h2>图片展示区域</h2>
        <div class="demo-image__lazy">
            <el-image  :key="url" :src="urls[imgIndex]" lazy></el-image>
            <a class="info-left" v-show="imgIndex>0" @click="left">
                <i class="el-icon-caret-left"></i>
            </a>

            <a class="info-right" v-show="imgIndex<urls.length-1" @click="right">
                <i class="el-icon-caret-right"></i>
            </a>

        </div>
        <el-input v-model="name" placeholder="请输入姓名" @keyup.enter="sayhi"></el-input>
        <input type="text" @keyup="sayhi">
    </div>

</template>

<script>
    export default {
        name: "about",
        data(){
          return{
              name: '',
              message: 'nihao',
              urls: [
                  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
              ],
              imgIndex:0,

          }
        },
        methods:{
            checkme() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },

            right(){
              this.imgIndex++;
            },
            left(){
                this.imgIndex--;
            },
            sayhi(){
                alter('123')
            }
        }
    }
</script>

<style scoped>
    .picbox{
        border-radius: 10px ;
        width: 800px;
        height: 800px;
        margin: 0 auto;

    }
    .info-right{

        position: absolute;
        right: 30%;

        bottom: 50%;
        display: block;
        width: 30px;
        height: 80px;
        line-height: 80px;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        background-color: #cd9530;
        border-radius: 20px;
        opacity:0.8
    }
    .info-left{

        position: absolute;
        left: 30%;

        bottom: 50%;
        display: block;
        width: 30px;
        height: 80px;
        line-height:80px;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        background-color: #1ec6d3;
        border-radius: 20px;
        opacity:0.5
    }
</style>