<template>
  <div class="wrapper">
    <div>
          <el-form ref="form" class="form" label-width="120px">
      <el-form-item label="商品名称">
        <el-input v-model="name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="商品所需分值">
        <el-input v-model="number" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="commodityCategory" placeholder="请选择活动区域">
          <el-option label="婴儿尿裤" :value="1"></el-option>
          <el-option label="智能早教" :value="2"></el-option>
          <el-option label="母婴好物" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="缩略图">
        <el-upload
          class="avatar-uploader"
          :action="baseUrl + 'ana/admin/image/upload'"
          :show-file-list="false"
          :with-credentials="true"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="baseUrl + '/ana/admin/image/view?imageId=' +imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>限上传一张缩略图，图片最佳尺寸为232*232像素</p>
      </el-form-item>

      <el-form-item label="商品详情">
        <quill-editor class="editor"
                    ref="myTextEditor"
                    v-model="content"
                    :options="editorOption"
                    @change="onEditorChange($event)">
      </quill-editor>
      </el-form-item>

      <el-form-item label="">
        <el-button @click="close">关闭</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import {addGoods, editGoods, getGoodsDetail} from '@/api/shop'
export default {
  components:{},
  props:{},
  data(){
    return {
      id: '',
      name: '',
      number: '',
      commodityCategory: 1,
      imageUrl: '',
      content: '',
      originImageId: '',
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
    close() {
      this.$router.go(-1)
    },
    save() {
      if (!this.name) {
        this.$message.info('请输入商品名称')
        return
      }
      if (!this.number) {
        this.$message.info('请输入所需分值')
        return
      }
      if (!this.imageUrl) {
        this.$message.info('请上传图片')
        return
      }
      if (!this.content) {
        this.$message.info('请输入商品详情')
        return
      }
      let data = {
        commodityFraction: this.number,
        commodityName: this.name,
        originImageId: this.imageUrl,
        commodityInfo: this.content,
        commodityCategory: this.commodityCategory
      }
      if (!this.id) {
        addGoods(data).then(() => {
          this.$message.success('新增成功')
          this.$router.go(-1)
        })
      } else {
        data.commodityId = this.id
        editGoods(data).then(() => {
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
      getGoodsDetail({commodityId: this.id}).then(res => {
        this.name = res.data.commodityName
        this.number = res.data.commodityFraction
        this.imageUrl = res.data.originImageId
        this.content = res.data.commodityInfo
        this.commodityCategory = res.data.commodityCategory
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