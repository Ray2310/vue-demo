<template>
  <!-- 
1. my-tag 标签组件封装
  (1) 双击显示输入框，输入框获取焦点
  (2) 失去焦点，隐藏输入框
  (3) 回显标签信息
  (4) 内容修改，回车 → 修改标签信息


2. my-table 表格组件封装
  (1) 动态传递表格数据渲染
  (2) 表头支持用户自定义
  (3) 主体支持用户自定义
   -->
   <div class="table-case">
   <!-- 动态的定义表头 -->
     <MyTable :data="goods">
      <template #head>
        <th>编号</th>
        <th>图片</th>
        <th>名称</th>
        <th width="100px">标签</th>

      </template> 

      <!-- 通过表头 ，自定义主体部分. 通过obj对象来接收传入的内容 -->
      <template #body="obj">
          <td>{{ obj.index + 1}}</td>
          <td> <img :src="obj.item.picture" /> </td>
          <td> {{  obj.item.name }} </td>
          <td> <MyTag v-model="obj.item.tag"></MyTag> </td>

      </template>
    </MyTable>
  
   </div>
    
</template>

<script>
import MyTable from './components/MyTable.vue'
import MyTag from './components/MyTag.vue'
export default {
  components: {
    MyTag,
    MyTable
  },

  name: 'TableCase',
  data () {
    return {
      goods: [
        { id: 101, picture: 'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg', name: '梨皮朱泥三绝清代小品壶经典款紫砂壶', tag: '茶具' },
        { id: 102, picture: 'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg', name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌', tag: '男鞋' },
        { id: 103, picture: 'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png', name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm', tag: '儿童服饰' },
        { id: 104, picture: 'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg', name: '基础百搭，儿童套头针织毛衣1-9岁', tag: '儿童服饰' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
}
th {
  background: #f5f5f5;
  border-bottom: 2px solid #069;
}
td {
  border-bottom: 1px dashed #ccc;
}
.my-table {
  width: 100%;
  border-spacing: 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  th {
    background: #f5f5f5;
    border-bottom: 2px solid #069;
  }
  td {
    border-bottom: 1px dashed #ccc;
  }
  td,
  th {
    text-align: center;
    padding: 10px;
    transition: all .5s;
    &.red {
      color: red;
    }
  }
  .none {
    height: 100px;
    line-height: 100px;
    color: #999;
  }
}
</style>