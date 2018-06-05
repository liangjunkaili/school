<template>
  <div class="hello">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.mid" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/axios'
export default {
  name: 'HelloWorld',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pwd: '',
          mid: ''
        },
        rules2: {
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          mid: [
            { validator: validateAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            login(this.ruleForm2).then(res =>{
                console.info("========="+JSON.stringify(res.data))
            }).catch(e =>{
                console.info(e)
            })
            this.$router.replace({name: 'Index'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>
<style scoped>
.hello{
    width: 404px;
    position: absolute;
    top: 40%;
    left: 30%;
}
.login-btn{
  width: 304px;
}
</style>

