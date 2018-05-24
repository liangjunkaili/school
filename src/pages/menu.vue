<template>
  <div class="header">
    <img src="../assets/logo.png" alt="logo" class="logo">
    <button type="button" class="el-button">
      <span>退出</span>
    </button>
    <router-view></router-view>
  </div>
</template>
<style>
.header {
    width: 100%;
    height: 63px;
    padding: 0;
    margin: 0;
    background-color: #1bb754;
}
.logo{
  float: left;
  padding-top:17px;
  padding-left: 20px;
}
.el-button{
  float: right;
  padding-top:17px;
  padding-left: 20px;
}
</style>
