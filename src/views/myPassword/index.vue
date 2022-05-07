<template>
  <el-row>
    <el-col :span="6" :offset="5">
      <el-card>
        <el-form
          ref="basicInfo"
          label-position="right"
          label-width="80px"
          :model="changeUserName"
        >
          <h3 align="center">修改用户名</h3>

          <el-form-item
            label="用户名"
          >
            <el-input v-model="changeUserName.username" @keyup.enter.native="changeUsername" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              plain
              round
              size="small"
              @click="changeUsername"
            >
              确认修改
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="8" :offset="1">
      <el-card>
        <el-form
          ref="basicInfo"
          label-position="right"
          label-width="80px"
          :model="changePwdForm"
        >
          <h3 align="center">修改密码</h3>
          <el-form-item
            label="旧密码"
          >
            <el-input v-model="changePwdForm.oldPassword" type="password" />
          </el-form-item>
          <el-form-item
            label="新密码"
          >
            <el-input v-model="changePwdForm.inPassword" type="password" />
          </el-form-item>
          <el-form-item
            label="重复密码"
          >
            <el-input v-model="changePwdForm.secondPassword" type="password" @keyup.enter.native="changePwd" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              plain
              round
              size="small"
              @click="changePwd"
            >
              确认修改
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { changeMyPwd, changeMyUsername } from '@/api/admin'
import { mapGetters } from 'vuex'

export default {
  name: 'MyPassword',
  data() {
    return {
      changePwdForm: {
        oldPassword: '',
        inPassword: '',
        secondPassword: ''
      },
      changeUserName: {
        username: this.$store.state.user.name
      }
    }
  },
  methods: {
    async changeUsername() {
      await changeMyUsername(this.changeUserName).then(res => {
        this.$message.success('修改成功')
      })
    },
    async changePwd() {
      await changeMyPwd(this.changePwdForm).then(res => {
        this.$message.success('修改成功，请重新登录')
        this.$store.dispatch('user/logout').then(res => {
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
