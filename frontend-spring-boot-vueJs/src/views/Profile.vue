<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.userName}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
        <h2>Request URL: {{ responseObj.url }}</h2>
        <h2>Request method: {{ responseObj.method }}</h2>
        <h2>Status code: {{ responseObj.statusCode }}</h2>
        <h2>Response: {{ responseObj.msg }}</h2>
        <h2>X-XSRF-TOKEN: {{ responseObj.xsrfToken }}</h2>
  </div>
  
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
