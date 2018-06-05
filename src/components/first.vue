<template>
<div class="container">
  <Menu/>
  <div class="first-table">
    <el-table :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        align="center">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum">
    </el-pagination>
  </div>
</div>
</template>
<script>
import Menu from '@/pages/menu';
export default {
  name:'First',
  data () {
    return{
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      pageSizes:[100,200,300,400],
      pageSize:100,
      totalNum:400,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components:{
    Menu
  }
}
</script>
<style>
.first-table{
  float: right;
  width: 80%;
}
</style>
