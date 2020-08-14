<template>
  <div id="navbarapp">
    <ul class="menu">
      <li>
        <router-link
          to="/app-a"
          class="nav-link"
          active-class="active-nav-link">APP A</router-link>
      </li>
      <li>
         <router-link
          to="/app-b"
          class="nav-link"
          active-class="active-nav-link">APP B</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#navbarapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(150,200,200)
}

.menu li {
  display: inline-block;
  padding: 30px;
  list-style: none;
}
</style>
