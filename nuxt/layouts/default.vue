<template>
  <div>
    <navBar />
    <nuxt />
    <!--<contact/>-->
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  @font-face {
    font-family: Milestone;
    src: url(~assets/fonts/MilestoneFreeVersion-Script.otf);
  }
  @font-face {
    font-family: Panettone;
    src: url(~assets/fonts/Panettone DEMO.otf);
  }
  @font-face {
    font-family: PointedlyMad;
    src: url(~assets/fonts/PointedlyMad.ttf);
  }

  :root{
    --background: #FFA942;
    --dark: #402A1D;
    --midtone: #8F7967;
    --light: #F2EDDC;
    --alt: #BF2424;
  }
html {
  scroll-behavior: smooth;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  font-family: "Roboto", 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
#__nuxt{
  width: 100vw;
  overflow: hidden;
}
  .noDec{
    text-decoration: none;
    margin-bottom: -15px;
    margin-top: 35px;
    display: block;
    margin-left: -25px;
  }
  .fontify{
      font-family: 'PointedlyMad' ,"Roboto", 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
      letter-spacing: 0.15em;
  }
  p{
    line-height: 150%;
  }
  body{
    background: var(--light);
  }
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
  section{
      min-height: 300px;
      padding: 45px;
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 100%;
  }
  section:after{
      z-index: 99;
      position: absolute;
      bottom: 0;
      right: 0;
      content: '';
      width: 0;
      height: 0;
      border-right: solid transparent 100vw;
      border-bottom: solid var(--light) 3vw;
  }
  section:before{
      z-index: 99;
      position: absolute;
      top: 0px;
      left: 0;
      content: '';
      width: 0;
      height: 0;
      border-left: solid transparent 100vw;
      border-top: solid var(--light) 3vw;
  }
  .header-offset{
      margin-top: 100px;
  }
  .bg-overlay{
    max-width: 100%;
  }
  .grid{
    justify-self: center;
    position: relative;
    width: 60vw;
    min-width: 300px;
    max-width: 80vw;
    grid-gap: 15px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /*background: rgba(255,0,0,0.1);*/
  }


  .transition-enter-active, .transition-leave-active {
      max-height: 3000px;
      transition: 0.5s;
  }
  .transition-leave-active{
      opacity: 0;
      transform: translate(0, -300px);
  }
  .transition-enter{
      opacity: 0;
      transform: translate(0, 300px);
  }
  @media (max-width: 1200px) {
    .grid{
      width: 100vw;
      min-width: 0;
      max-width: 100vw;
      padding: 15px;
    }
  }
</style>

<script>
    import navBar from '~/components/navBar.vue'
    // import contact from '~/components/home/contact.vue'

    export default {
        name: 'layout',
        components: {
            // contact,
            navBar
        }
    }
</script>
