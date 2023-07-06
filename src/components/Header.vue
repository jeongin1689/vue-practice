<template>
  <header id="header">
    <div class="header__port">
      <div class="header__logo">
        <router-link to="/">jeongin-vue</router-link>
      </div>
      <nav class="header__menu">
        <ul>
          <li><router-link to="/about">about</router-link></li>
          <li><router-link to="/Youtube">Youtube</router-link></li>
          <li><router-link to="/Movie">Movie</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0%;
  overflow: hidden;
  z-index: 1200;
  width: 100%;
  color: #fff;
  border-bottom: 1px solid #2e2e30;
  display: flex;
  align-items: center;
  font-family: "Rajdhani", "Chosunilbo_myungjo";
  font-weight: 500;
  background: #000;
  .header__port {
    flex: 1 1 35%;
    padding-left: 1rem;
    .header__logo {
      flex: 1 1 30%;
      text-align: center;
      margin: 1.5rem;
      a {
        font-size: 1.8rem;
        line-height: 1;
      }
    }
  }
  .header__menu {
    flex: 1 1 35%;
    text-align: right;
    padding-right: 1rem;

    li {
      display: inline;

      a {
        display: inline-block;
        padding: 5px;
      }
    }
  }
}
</style>
