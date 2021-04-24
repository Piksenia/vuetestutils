<template>
  <div>
    <button id="btnlogout" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>