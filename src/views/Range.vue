<template>
    <div>
        <PageHeader title="Range" v-if="isSelf"/>
        <div class="page">
            <div class="page_header">
                <ul class="page_header_container">
                    <li><a href="">周排名</a></li>
                    <li><a href="">月排名</a></li>
                    <li><a href="">总排名</a></li>
                </ul>
                <div class="page_header_description">
                    <div class="select">
                        <a href="" class="options_select" @click.prevent="isOptionsSelect = !isOptionsSelect">全部</a>
                        <div class="options_selector" v-show="isOptionsSelect">
                            <a href="">地区1</a>
                            <a href="">地区2</a>
                            <a href="">地区3</a>
                            <a href="">地区4</a>
                            <a href="">地区5</a>
                            <a href="">地区6</a>
                            <a href="">地区7</a>
                            <a href="">地区8</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_generic">
                <nav class="pagination">
                    <div class="up"><a href="">上一页</a></div>
                    <ul class="pages">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>...</li>
                        <li>14</li>
                    </ul>
                    <div class="down"><a href="">下一页</a></div>
                </nav>
                <div class="ranking_page">
                    <table class="ranking_page_table">
                        <thead>
                            <th>表头1</th>
                            <th class="name">店名</th>
                            <th>粉丝数</th>
                            <th>表头4</th>
                            <th>表头5</th>
                            <th>表头6</th>
                            <th>表头7</th>
                            <th>表头8</th>
                            </thead>
                        <tbody>
                            <tr :key="item.id" v-for="item in rankings">
                                <td><img style="width:20px" :src="'https://' + item.shopIcon" alt=""></td>
                                <td class="name">{{item.shopname}}</td>
                                <td>{{item.fans}}</td>
                                <td><a target="_blank" :href="`https://shop${item.shopid}.taobao.com/`">taobao</a></td>
                                <td>{{item.col3}}</td>
                                <td>{{item.col4}}</td>
                                <td>{{item.col5}}</td>
                                <td>{{item.col6}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="mobile-page">
          <div class="page_header">
            <!-- <ul class="page_header_container">
                <li><a href="">周排名</a></li>
                <li><a href="">月排名</a></li>
                <li><a href="">总排名</a></li>
            </ul> -->
            <div class="rangeRule">
                <a href="" class="options_select" @click.prevent="isRangeOptionsSelect = !isRangeOptionsSelect">周排名</a>
                <div class="options_selector" v-show="isRangeOptionsSelect">
                    <a href="">周排名</a>
                    <a href="">月排名</a>
                    <a href="">总排名</a>
                </div>
            </div>
            <div class="page_header_description">
                <a href="" class="options_select" @click.prevent="isOptionsSelect = !isOptionsSelect">全部地区</a>
                <div class="options_selector" v-show="isOptionsSelect">
                    <a href="">地区1</a>
                    <a href="">地区2</a>
                    <a href="">地区3</a>
                    <a href="">地区4</a>
                    <a href="">地区5</a>
                    <a href="">地区6</a>
                    <a href="">地区7</a>
                    <a href="">地区8</a>
                </div>
            </div>
          </div>
          <div class="ranking_page">
            <table class="ranking_page_table">
                <thead>
                    <th>Logo</th>
                    <th class="name">店名</th>
                    <th>粉丝数</th>
                </thead>
                <tbody>
                    <tr :key="item.id" v-for="item in rankings">
                        <td><img style="width:20px" :src="'https://' + item.shopIcon" alt=""></td>
                        <td class="name"><a target="_blank" :href="`https://shop${item.shopid}.taobao.com/`">{{item.shopname}}</a></td>
                        <td>{{item.fans}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
import PageHeader from './PageHeader.vue'

const rank = []
for (let i = 1; i < 50; i++) {
  const temp = {}
  temp.id = i
  temp.name = '名称' + i
  temp.col1 = i + '%'
  temp.col2 = 5 * i
  temp.col3 = 6 * i
  temp.col4 = 7 * i
  temp.col5 = 8 * i
  temp.col6 = 9 * i
  rank.push(temp)
}
export default {
  name: 'Range',
  components: {
    PageHeader
  },
  props: {
    isSelf: {
      default: true
    }
  },
  methods: {
    getRankings: function () {
      this.$axios.get('range')
        .then(res => {
          if (res.data) {
            this.rankings = res.data
          }
        })
    }
  },
  created () {
    this.getRankings()
  },
  data: function () {
    return {
      isRangeOptionsSelect: false,
      isOptionsSelect: false,
      rankings: rank
    }
  }
}
</script>

<style lang="less" scoped>
.page{
    @media screen and (max-width: 800px){
        display: none;
    }
    // height: 1000px;
    // @media screen and (max-width: 800px){
    //     display: none;
    // }
    .page_header{
        max-width: 1000px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        background-color: hsl(var(--base-hue), 20%, 20%);
        .page_header_container{
            display: flex;
            padding: 0 35px;
            li{
                padding: 0px 10px;
                a{
                    display: block;
                    padding: 15px 0px;
                }
            }
        }
        .page_header_description{
            min-width: 200px;
            text-align: left;
            background-color: hsl(var(--base-hue),30%, 30%);
            .select{
                width: 100%;
                height: 100%;
                a{
                    padding: 15px 15px;
                }
            }
            a{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 15px;
                // display: block;
            }
            a:hover{
                background-color: hsl(var(--base-hue),20%, 20%);
            }
            .options_selector{
                z-index: 2;
                position: absolute;
                top:100%;
                width: 100%;
                background-color: hsl(var(--base-hue),30%, 30%);
                a{
                    padding: 5px 15px;
                }
            }
        }
    }
    .page_generic{
        background-color: hsl(var(--base-hue), 10%, 15%);
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 20px 50px;
        max-width: 1000px;
        .pagination{
            margin: auto;
            display: flex;
            .pages{
                padding: 0px 10px;
                display: flex;
                li{
                    padding: 0px 10px;
                }
            }
        }
        .ranking_page{
            margin: 10px 10px;
            .ranking_page_table{
                min-width: 650ox;
                width: 100%;
                text-align: center;
                border-collapse: separate;
                border-spacing:0 3px;
                thead{
                    th{
                        padding: 5px 10px
                    }
                }
                tr{
                    background-color: hsl(var(--base-hue), 10%, 20%);
                }
                tr:hover{
                    background-color: hsl(var(--base-hue), 10%, 25%);
                }
            }

            .name{
                display: flex;
                padding: 0px 10px;
            }
        }
    }
}

.mobile-page{
    @media screen and (min-width: 800px){
        display: none;
    }
    .page_header{
    display: flex;
    background-color: hsl(var(--base-hue),10% ,10%);
    height: 50px;
    .options_select{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    >div{
        width: 50%;
        border: 1px solid #fff;
    }
    .options_selector{
        z-index: 2;
        position: absolute;
        top:100%;
        width: 100%;
        background-color: hsl(var(--base-hue),30%, 30%);
        display: flex;
        flex-direction: column;
        a{
            padding: 5px 15px;
        }
    }
    }
    .ranking_page{
    .ranking_page_table{
        tr{
        border:1px solid #fff;
        }
    }
    padding: 10px 5px;
    th{
        padding: 10px 2px;
        margin: 10px 20px;
    }
    .name{
        text-align: left;
    }
    }
}

</style>
