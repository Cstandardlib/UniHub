<template>
    <div class="unihubhome">
      <Icon type="ios-checkmark" />
      <img src="../assets/logo2.png" alt="Logo" class="logo">
      <!-- <Image  src="../assets/logo2.png" alt="Logo"/> -->
      <div class="buttons">
        <Button @click="goToLogin">登录</Button>
        <!--<Button @click="goToFileHome">file-home</Button>
        <Button @click="goToNewHome">newhome</Button>-->
        <Button @click="goToRegister">注册</Button>
      </div>
      <div class="spacer">
        <a :href="githubLink">GitHub</a>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        githubLink: 'https://github.com/Cstandardlib/UniHub'
      };
    },
    methods: {
      goToLogin() {
        // 导航至登录页面
        this.$router.push('/home/login');
      },
      goToFileHome() {
        this.$router.push('/home/file-home');
      },
      goToNewHome() {
        this.$router.push('/home/newhome');
      },
      goToRegister() {
        // 导航至注册页面
        this.$router.push('/home/newregister');
      }
    }
  };
</script>
  
<style>
  /* 样式可以根据需要自行修改 */
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
  }
  
  .logo {
    width: 200px;
    height: auto;
    transform: scale(4);
    margin-top: 180px;
  }
  
  .buttons {
    margin-top: 160px;
  }
  
  button {
    margin: 10px;
  }

  .spacer {
    margin-top: 50px;
  }
</style>
  