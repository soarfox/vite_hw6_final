import{_ as d,r as c,o as _,c as h,a as e,b as a,w as n,d as r,h as m,R as b,F as f}from"./index-ca017b57.js";const g={methods:{logout(){document.cookie=`hexToken=; expires = ${new Date};`,this.$router.push("/login")}}},$={class:"navbar navbar-expand-lg bg-body-tertiary fixed-top fw-bold",style:{"background-color":"#A5E89E"}},k={class:"container-fluid"},x=e("a",{class:"navbar-brand",href:"#"},"米諾可icon",-1),A=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse",id:"navbarNav"},w={class:"navbar-nav"},E={class:"nav-item"},N={class:"nav-item"},T={class:"nav-item"},C={class:"nav-item"};function I(s,t,p,u,v,i){const o=c("router-link");return _(),h("nav",$,[e("div",k,[x,A,e("div",V,[e("ul",w,[e("li",E,[a(o,{to:"/",class:"nav-link"},{default:n(()=>[r("回到前台首頁 ")]),_:1})]),e("li",N,[a(o,{to:"/admin/products",class:"nav-link"},{default:n(()=>[r("後台的產品列表 ")]),_:1})]),e("li",T,[a(o,{to:"/admin/orders",class:"nav-link"},{default:n(()=>[r("後台的訂單列表 ")]),_:1})]),e("li",C,[e("a",{href:"#",class:"nav-link",onClick:t[0]||(t[0]=m(l=>i.logout(),["prevent"]))},"登出 ")])])])])])}const R=d(g,[["render",I]]),{VITE_API:y}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"cheetah116",BASE_URL:"/vite_hw6_final/",MODE:"production",DEV:!1,PROD:!0},D={components:{RouterView:b,AdminNavbarComponent:R},methods:{checkLogin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.$http.defaults.headers.common.Authorization?this.$http.post(`${y}/api/user/check`).then(t=>{}).catch(t=>{alert(t.response.data.message),this.$router.push("/login")}):(alert("請先登入"),this.$router.push("/login"))}},mounted(){this.checkLogin()}};function P(s,t,p,u,v,i){const o=c("AdminNavbarComponent"),l=c("RouterView");return _(),h(f,null,[a(o),a(l)],64)}const L=d(D,[["render",P]]);export{L as default};