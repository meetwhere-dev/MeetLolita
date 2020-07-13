<template>
    <div>
      <div class="header" :class="Scroll > 50 ? 'isScroll': ''">
        <transition>
        <div class="header-bg" v-show="isHeaderHover" :class="isHeaderHover ? 'isHeaderHover': ''"></div>
        </transition>
        <div class="header-bg2"></div>
        <div class="header-bg3"></div>
        <div class="header-page">
          <div class="header-page-button">
            <a href="JavaScript:;" class="logo">
              <div class="logo-bg">
              </div>
            </a>
            <div :key="index" v-for="(item, index) in nav"
            @mouseover="isHeaderHover = true"
            @mouseleave="isHeaderHover = false">
                <div class="menu"
                @mouseover="clickIndex = index"
                @mouseout="clickIndex = null"
                @click="changeHue(item.hue)"
                >
                      <router-link class="menu-item" :to="item.path"
                      >{{item.name}}
                      <span></span>
                      </router-link>
                      <div class="menu-group" v-show="clickIndex == index">
                        <div class="menu-group-item"
                        :key="index"
                        v-for="(itemMenu, index) in ['主页', '测试', '排名', '测试', '测试', '二级菜单']">
                          {{itemMenu}}
                        </div>
                      </div>
                </div>
            </div>
          </div>
          <div class="button-right">
            <div><a class="button-right-menu" href=""><span class="iconfont">&#xe666;</span></a></div>
            <div><a class="button-right-menu" href=""><span class="iconfont">&#xe623;</span></a></div>
            <div><a class="button-right-menu"
            @click.prevent="isClickLogin = !isClickLogin"
            href=""><span class="iconfont">{{username}}</span></a>
              <div class="loginBox" v-show="isClickLogin">
                <form action="">
                  <h3>登陆以继续</h3>
                  <input type="text" v-model="loginData.username">
                  <input type="password" v-model="loginData.password">
                  <button @click.prevent="loginUsername">测试</button>
                  <p>忘记了账号密码</p>
                  <button @click.prevent="loginPost">登录</button>
                </form>
                <div class="register">
                  <input type="text" v-model="testApiPath">
                  <button @click="testApi">测试Get请求</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile_header">
        <div class="mobile_header_before"></div>
        <div class="mobile_header_body">
            <div class="mobile-header-body-left">
              <a href="JavaScript:;" class="logo">
                <div class="logo-bg">
                </div>
              </a>
              <span class="nav_name">{{ActiveMobileMenu}}</span>
            </div>
            <a @click="isClickMobileMenus = !isClickMobileMenus" :class="isClickMobileMenus ? 'button-active': ''"><span class="iconfont">&#xe62e;</span></a>
        </div>
        <div class="mobile_header_menus" :class="isClickMobileMenus ? 'active': ''">
          <div class="user-info"></div>
          <div class="menus">
            <div class="menu" :key="index" v-for="(item, index) in nav"
            @click="isClickMobileMenus = !isClickMobileMenus; ActiveMobileMenu = item.name">
              <router-link :to="item.path"><span class="iconfont">&#xe62e;</span>{{item.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      testApiPath: 'http://localhost/range',
      username: '',
      loginData: {
        username: '',
        password: ''
      },
      nav: [
        {
          path: '/Home',
          name: '主页',
          hue: 255
        },
        {
          path: '/About',
          name: '关于',
          hue: 200
        },
        {
          path: '/Range',
          name: '排名',
          hue: 115
        },
        {
          path: '/Forums',
          name: '测试',
          hue: 333
        },
        {
          path: '/Shop',
          name: '测试',
          hue: 20
        },
        {
          path: '/Help',
          name: '帮助',
          hue: 45
        }
      ],
      Scroll: 1,
      isHeaderHover: false,
      clickIndex: null,
      isClickLogin: false,
      isClickMobileMenus: false,
      ActiveMobileMenu: '主页'
    }
  },
  methods: {
    // 滚动网页后缩短header
    handleScroll () {
      window.addEventListener('scroll', () => {
        this.Scroll = window.scrollY
      })
    },
    // 更换主题色
    changeHue (hue) {
      this.$emit('changeHue', hue)
    },
    loginPost () {
      this.$axios.post('login', this.loginData)
        .then(res => {
          // window.sessionStorage.setItem("cookie", res.)
          console.log(res)
          this.loginUsername()
        })
        .catch(res => {
          console.log(res)
        })
    },
    loginUsername () {
      this.$axios.get('user/user')
        .then(res => {
          console.log(res)
          if (res.data) {
            this.username = res.data
          } else {
            this.username = '登录'
          }
        })
        .catch(res => {
          console.log(res)
          this.username = '登录'
        })
    },
    testApi () {
      this.$axios.get(this.testApiPath)
        .then(res => {
          console.log(res.data)
        })
    }
  },
  mounted () {
    this.handleScroll()
  },
  created () {
    this.loginUsername()
  },
  beforeDestroy () {
    window.removeEventListener('scroll')
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  @media screen and (max-width: 800px){
    display: none;
  }
  .header-bg{
    position: absolute;
    opacity: 0;
    height: 310px;
    width: 100%;
    border-bottom: solid 2px hsl(var(--base-hue), 100%, 70%);
    left: 0;
    top: 0;
    background-color: hsla(0, 0%, 7%, 0.9);
    transition: all .2s 0s ease;
  };
  .isHeaderHover{
    opacity: 1;
  }
  .header-bg2{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: url("~@/img/nav-background.png");
    background-repeat: repeat-x;
    background-position: 50% 100%;
    filter: hue-rotate(var(--base-hue-deg)) saturate(0.6);
  }
    .v-enter,
    .v-leave-to{
        opacity: 0;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.2s linear;
    }

  .header-bg3{
    height: 90px;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    background-color: hsl(var(--base-hue), 50%, 45%);
    transition: all 0.2s linear;
  }

// 头部hover特效
  .header-page-button:hover a{
    display: flex;
    color: hsla(0,0%,100%,.7);
  }
  .header-page-button .menu:hover a{
    color: #fff;
  }
  .header-page-button .menu:hover a::after{
      content: "";
      position: absolute;
      top: 120%;
      display: block;
      height: 3px;
      width: 100%;
      border-radius: 10px;
      background-color: hsl(var(--base-hue), 100%, 70%);
  }
  .header-page{
    margin: auto;
    height: 100%;
    width: calc(100% - 40px);
    max-width: 1000px;
    display: flex;
    align-items: center;
    transition: all .2s 0s linear;
    .header-page-button{
      margin-right: auto;
      display: flex;
      transform: height .3s;
      font-size: 15px;
      font-weight: 500;
        .logo{
          height: 60px;
          width: 60px;
          border-radius: 50%;
          border: solid 4px #fff;
          margin-right: 10px;
          transition: all .2s 0s linear;
          .logo-bg{
            position: absolute;
            top: -11%;
            left: -11%;
            width: 122%;
            height: 122%;
            display: flex;
            align-items: center;
            background-image: url("~@/img/osu-logo-triangles.svg");
            background-repeat: no-repeat;
            background-position: 50% 50%;
          };
        };
        .logo:hover{
          transform: scale(1.1);
        }
      .menu{
        padding: 5px 10px;
        align-items: center;
        height: 100%;
        display: flex;
        .menu-group{
          position: absolute;
          top: 100%;
          padding: 20px 0px;
          .menu-group-item{
            padding: 5px 0px;
            text-align: left;
            width: 100px;
          }
          .menu-group-item:hover{
            background-color: rgba(68, 68, 68, 0.295);
          }
          div:hover::before{
            content:'';
              height: 100%;
              width: 3px;
              position: absolute;
              display: block;
              left: -13px;
              top: -3%;
              border-radius: 13px;
              background-color: hsl(var(--base-hue), 100%, 70%);
          }
        }
      };
      .menu:hover{
        color: #fff;
      }
    }

    .button-right{
      display: flex;
      align-items: center;
      .button-right-menu{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
        border:solid 2px hsla(0,0%,100%,.5);
        line-height: 39px;
        margin: 0px 5px;
      }
      .button-right-menu:hover{
        transform:scale(1.2);
        border:solid 2px hsla(0,0%,100%,1);
        color: hsl(var(--base-hue), 100%, 70%);
      }
      .loginBox{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50px;
        right: -130px;
        width: 300px;
        height: 400px;
        border-radius: 15px;
        box-shadow: 0px 1px 6px hsla(0, 0%, 7%, 0.9);
        background-color: hsl(var(--base-hue), 0%, 24%);
        text-align: left;
        line-height: 30px;
        overflow: hidden;
        form{
          height: 200px;
          flex-direction: column;
          display: flex;
          padding: 20px 20px 0;
          input{
            color: hsla(0,0%,100%,1);
            border-radius: 4px;
            border: none;
            outline: none;
            background-color: #222;
            padding: 10px 5px;
            margin-bottom: 5px;
            font-size: 16px;
          }
        }
        .register{
          height: 200px;
          background-color: hsl(var(--base-hue), 0%, 34%);
        }
      }
    }
  };

}
.isScroll{
  .header-bg2, .header-bg3 ,.header-page{
    opacity: 1;
    // display: flex;
    height: 50px;
  }
  .logo{
    width: 40px!important;
    height: 40px!important;
  }
}

.mobile_header{
  @media screen and (min-width: 800px){
    display: none;
  }
}
@media screen and (max-width: 800px){
  .mobile_header_before{
    height: 50px;
  }
  .mobile_header_body{
    box-shadow: 0px 0px 6px 1px hsl(var(--base-hue), 10%, 15%);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    // display: flex;
    // position: fixed;
    // height: 50px;
    // width: 100%;
    // z-index: 1;
    // top: 0;
    // align-items: center;
    background-color: hsl(var(--base-hue), 70%, 20%);
    .logo-bg{
      // position: absolute;
      // z-index: 2;
      // top: -20px;
      // left: -11px;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      background-image: url("~@/img/osu-logo-triangles.svg");
      background-repeat: no-repeat;
      // background-position: 50% 50%;
    };
    .mobile-header-body-left{
      display: flex;
      align-items: center;
    };
  }
  .mobile_header_menus{
    position: fixed;
    top: -100%;
    width: 100%;
    background-color: hsl(var(--base-hue), 10%, 15%);
    border-bottom: 2px solid hsl(var(--base-hue), 50%, 45%);
    z-index: 2;
    transition: all .2s 0s linear;
    .menu{
      // padding: 5px 0px;
      a{
        display: block;
        display: flex;
        padding: 5px 10px;
        text-align: left;
        span{
          padding: 0px 5px;
        }
      }
    }
  }
  .button-active{
    transform: rotate(90deg);
  }
  .active{
    top: 50px
  }
}
</style>
