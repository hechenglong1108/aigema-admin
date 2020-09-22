<template>
  <div class="wrapper">
    <el-form ref="form" class="form" label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="商品所需分值">
        <el-input v-model="number"></el-input>
      </el-form-item>
      <el-form-item label="缩略图">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>限上传一张缩略图，图片最佳尺寸为180*180像素</p>
      </el-form-item>

      <el-form-item label="商品详情">
        <quill-editor class="editor"
                    ref="myTextEditor"
                    v-model="content"
                    :options="editorOption"
                    @change="onEditorChange($event)">
      </quill-editor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components:{},
  props:{},
  data(){
    return {
      name: '',
      number: '',
      imageUrl: '',
      content: '',
      editorOption: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
                  ["blockquote", "code-block"], // 引用  代码块
                  [{ header: 1 }, { header: 2 }], // 1、2 级标题
                  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
                  [{ script: "sub" }, { script: "super" }], // 上标/下标
                  [{ indent: "-1" }, { indent: "+1" }], // 缩进
                  // [{'direction': 'rtl'}],                         // 文本方向
                  [{ size: ["small", false, "large", "huge"] }], // 字体大小
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
                  [{ font: [] }], // 字体种类
                  [{ align: [] }], // 对齐方式
                  ["clean"], // 清除文本格式
                  ["link", "image", "video"] // 链接、图片、视频
                ] //工具菜单栏配置
              }
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    // 值发生变化
    onEditorChange(editor) {
      this.content = editor.html;
      console.log(this.content)
    },
    handleAvatarSuccess(file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.editor{
  width: 700px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border: 1px dotted #ddd;
    border-radius: 5px;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
  .form{
    width: 460px;
  }
</style>