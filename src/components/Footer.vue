<template>
  <footer id="footer">
    <div>
      <h4>email</h4>
      <p>
        <a href="mailto:jeongin@hivelab.co.kr">jeongin@hivelab.co.kr</a>
      </p>
    </div>
    <div>
      <h4>workplace</h4>
      <ul>
        <li><a href="/">Yotube</a></li>
        <li><a href="/">Github</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1200;
  width: 100%;
  color: #fff;
  border-top: 1px solid #2e2e30;
  font-weight: 500;
  background: #000;
  display: flex;
  align-items: center;
  bottom: 0;
  div {
    text-align: center;
    padding: 30px;
    h4,
    p,
    ul {
      display: inline-block;
    }
    h4 {
      font-weight: 500;
      opacity: 0.6;
      padding: 0 10px;
    }
  }
  div:nth-child(1) {
    flex: 1 1 20%;
    border-right: 1px solid #2e2e30;
  }

  div:nth-child(2) {
    flex: 1 1 55%;

    li {
      display: inline-block;
      padding: 0 10px;
    }
  }
}
</style>
