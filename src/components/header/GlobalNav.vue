<template>
  <div class="global-nav">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a
          class="navbar-brand"
          href="#"
        >
          <router-link
            class="nav-link"
            to="/"
          ><img src="@/assets/deehwa-logo.jpeg" /></router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
              >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
              >About</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/register"
              >Register</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/signin"
              >Sign In</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalNav',
};
</script>

<style lang="scss">
.global-nav {
  .navbar {
    border-bottom: 1px solid;
    img {
      height: 50px;
    }
    .nav-item {
      color: #000;
      font-weight: bold;
    }
  }
}
</style>

