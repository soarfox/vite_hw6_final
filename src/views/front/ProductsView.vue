<!-- 請養成好習慣:新建立元件, 再來建立路由 -->
<template>
  <!-- 使用BootStrap的格線系統方式來排版, 如果當使用者點擊查看更多後, this.$route.params.id會有商品的id, 因此便將這個產品列表的div給隱藏起來, 只留下router-view的畫面 -->
  <div class="row" v-if="!this.$route.params.id">
    <!-- 設定左側有col-2 -->
    <div class="col-2">
      <!-- 下方套用BootStrap的list group內的Links and buttons選單樣式 https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
      <!-- 修改字體為粗體fw-bold, 參考官網: https://getbootstrap.com/docs/5.0/utilities/text/#font-weight-and-italics -->
      <div class="list-group text-center fw-bold">
        <a href="#/products" class="list-group-item list-group-item-action " @click="getPastaAll('全部商品')">全部商品</a>
        <a href="#/products" class="list-group-item list-group-item-action"
          @click="getPastaCategoryProducts('青醬義大利麵')">青醬義大利麵</a>
        <a href="#/products" class="list-group-item list-group-item-action"
          @click="getPastaCategoryProducts('蕃茄義大利麵')">蕃茄義大利麵</a>
        <a href="#/products" class="list-group-item list-group-item-action"
          @click="getPastaCategoryProducts('奶油義大利麵')">奶油義大利麵</a>
      </div>
    </div>
    <!-- 設定右側有col-10 -->
    <div class="col-10">
      <!-- 使用Bootstrap 5的格線系統(row)來製作, 以row為起手式語法, 加上row-cols-1(要分成幾欄), row-cols-md-3代表一欄有3張卡片, 且為了預留一點空白空間, 避免該區塊距離上下方太靠近, 因此使用my, 代表上下方的margin(元素與元素之間的邊界距離), 輸入4代表一定距離; 因為兩張卡片的距離貼得太靠近, 因此使用gutters來增加垂直與水平的距離, 可參考: https://www.casper.tw/development/2020/10/10/bootstrap-5-grid-whats-new/, 因此在此設定g-4(將垂直與水平距離都設定為4這個尺寸)-->
      <div class="row row-cols-1 row-cols-md-3 my-4 g-4">
        <div class="col" v-for="item in products" :key="item.id">
          <!-- 讓每張卡片擁有相同高度, 設定h-100 -->
          <div class="card h-100">
            <img :src="item.imageUrl" class="card-img-top" alt="">
            <!-- 在卡片的圖片下方直接加上card-body的內容, 官網:https://getbootstrap.com/docs/5.0/components/card/ -->
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ item.title }}</h5>
              <!-- 下方這句為浮動的樣式, 很適合用於文字, 參考官網說明:https://bootstrap5.hexschool.com/docs/5.0/utilities/float/ -->
              <span class="float-end">NT$ {{ item.price }}</span>
            </div>
            <div class="card-footer bg-white">
              <!-- <small class="text-muted">Last updated 3 mins ago</small> -->

              <!-- 由於原本的bottom顏色太深, 故可參考Bootstrap 5的bottom樣式內的outline按鈕樣式, 參考官網:https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons, 那為了讓這個按鈕填滿寬度, 故使用w-100 -->

              <!-- 使用router-link, 請務必在想要顯示內容的地方加上router-view標籤 -->
              <RouterLink :to="`/singleProduct/${item.id}`" class="btn btn-outline-secondary w-50">
                查看更多
              </RouterLink>

              <a href="#" class="btn btn-outline-danger w-50" @click.prevent="addToCart(item.id)">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 加上一個註解試試看 -->
  <!-- 想知道NetWork行數有沒有增加 -->
  <router-view></router-view>
</template>

<script>
import { RouterLink } from 'vue-router'
// 使用解構的方式取得環境變數
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      // 空陣列資料, 用來接收從axios回傳回來的商品資料
      products: []
    }
  },
  methods: {
    getPastaAll () {
      // 顯示所有產品(與顯示單一類別產品的API不同)
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/products/all`)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getPastaCategoryProducts (category) {
      // 顯示單一類別的產品
      this.$http.get(`${VITE_API}/api/${VITE_APIPATH}/products/?category=${category}`)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addToCart (id) {
      // 直接把API所需的資料格式貼入
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_API}/api/${VITE_APIPATH}/cart`, { data })
        .then((res) => {
          // console.log(res)
          alert('已加入購物車')
        })
        .catch((error) => {
          // console.log(error)
          alert(error.response.data.message)
        })
    }
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getPastaAll()
  }
}
</script>

<style lang="scss">
// 引入的方式為@import
// @import "../assets/all.scss";

// 當游標點擊左側list group item後, 套用以下樣式
// .list-group-item-action:focus {
//   background-color: #FFEEDD;
//   color: orange;
// }
.list-group-item:focus {
  background-color: #FFEEDD;
  color: orange;
}

// 設定商品圖片樣式
.card-img-top {
  /* 在使僅設定高度即可 */
  height: 200px;
  /*  */
  /* 因為圖片設定寬度或高度後容易變形, 且使圖片能夠填滿所設定的寬與高的框框而比例盡可能不失真, 故建議可加上object-fit: cover; 參考官網:https://developer.mozilla.org/zh-TW/docs/Web/CSS/  */
  object-fit: cover;
}
</style>
