<template>
  <div class="wrapper">
    <div>
          <el-form ref="form" class="form" label-width="120px">
      <!-- <el-form-item label="商品名称">
        <el-input v-model="name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="商品所需分值">
        <el-input v-model="number" style="width:400px"></el-input>
      </el-form-item> -->
      <el-form-item label="banner">
        <el-upload
          class="avatar-uploader"
          :action="baseUrl + 'ana/admin/image/upload'"
          :show-file-list="false"
          :with-credentials="true"
          :headers="{
            'Authorization': Authorization
          }"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="baseUrl + '/ana/admin/image/view?imageId=' +imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>限上传一张缩略图，图片最佳尺寸为232*232像素</p>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="sort" style="width:200px" type="number"></el-input>
      </el-form-item>

      <el-form-item label="banner详情">
        <quill-editor class="editor"
                    ref="myTextEditor"
                    v-model="content"
                    :options="editorOption"
                    @change="onEditorChange($event)">
      </quill-editor>
      </el-form-item>

      <el-form-item label="">
        <el-button>关闭</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { editBanner, getBanner, addBanner} from '@/api/shop'
export default {
  components:{},
  props:{},
  data(){
    return {
      id: '',
      name: '',
      sort: 0,
      imageUrl: '',
      content: '',
      originImageId: '',
      Authorization: 'agmauth ' +sessionStorage.getItem('Authorization'),
      editorOption: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
                  [{ header: 1 }, { header: 2 }], // 1、2 级标题
                  // [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
                  [{ script: "sub" }, { script: "super" }], // 上标/下标
                  [{ indent: "-1" }, { indent: "+1" }], // 缩进
                  // [{'direction': 'rtl'}],                         // 文本方向
                  [{ size: ["small", false, "large", "huge"] }], // 字体大小
                  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
                  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
                  [{ font: [] }], // 字体种类
                  // [{ align: [] }], // 对齐方式
                  ["clean"], // 清除文本格式
                  ["image"] // 链接、图片、视频
                ] //工具菜单栏配置
              }
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    save() {
      // if (!this.name) {
      //   this.$message.info('请输入商品名称')
      //   return
      // }
      // if (!this.number) {
      //   this.$message.info('请输入所需分值')
      //   return
      // }
      if (!this.imageUrl) {
        this.$message.info('请上传图片')
        return
      }
      // if (!this.content) {
      //   this.$message.info('请输入商品详情')
      //   return
      // }
      let data = {
        status: 0,
        imgId: this.imageUrl,
        desc: this.content
      }
      if (!this.id) {
        addBanner(data).then(() => {
          this.$message.success('新增成功')
          this.$router.go(-1)
        })
      } else {
        data.bannerId = this.id
        editBanner(data).then(() => {
          this.$message.success('修改成功')
          this.$router.go(-1)
        })
      }
    
    },
    // 值发生变化
    onEditorChange(editor) {
      this.content = editor.html;
      console.log(this.content)
    },
    handleAvatarSuccess(file) {
      console.log(file)
      if (file.code == 200) {
        this.imageUrl = file.rows[0]
        console.log(this.imageUrl)
      } else {
        this.$message.error(file.message)
      }
    }
  },
  created(){},
  mounted(){
    this.id = this.$route.query.id
    if (this.id) {
      getBanner({bannerId: this.id}).then(res => {
        // this.name = res.data.commodityName
        this.sort = res.data.sort
        this.imageUrl = res.data.imgId
        this.content = res.data.desc
      })
    }
  }
}
</script>
<style scoped>
.wrapper{
  text-align: left;
  width:100%;
}
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
    width: 100%;
    position: static;
  height: 100%;
  box-shadow: none;
  background: transparent;
  border-radius: 0;
  top: 0;
  margin-top: 0;
  left: 0;
  margin-left: 0;
  overflow: hidden;
  }
</style>