<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" >
        <template v-for="menu in menus" >
          <el-menu-item v-if="!menu.children" :index="menu.index">
            <!-- <i class="el-icon-menu"></i> -->
            <!-- <span slot="title">{{menu.text}}</span> -->
            <router-link :to="menu.to" tag="div">{{menu.text}}</router-link>
          </el-menu-item>

          <el-submenu v-if="menu.children" :index="menu.index" >
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>{{menu.text}}</span>
            </template>
            <el-menu-item v-for="subMenu in menu.children" :key="subMenu.index" :index="subMenu.index">
                <!-- <span slot="title">{{subMenu.text}}</span> -->
                <router-link :to="subMenu.to" tag="div">{{subMenu.text}}</router-link>
            </el-menu-item>
          </el-submenu>
        </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        menus:[
          {
            text:"navBar1",
            index:"1",
            children:[
              {
                text:"navBar1-1",
                index:"1-1",
                to:{
                  name:"First"
                }
              },
              {
                text:"navBar1-2",
                index:"1-2",
                to:{
                  name:"HelloWorld"
                }
              }
            ]
          },
          {
            text:"navBar2",
            index:"2",
            to:{
              name:"Settings"
            }
          },
          {
            text:"navBar3",
            index:"3",
            to:{
              name:"HelloWorld"
            }
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
