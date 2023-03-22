import{_ as l,o as a,c as _,a as t,t as o,h as u}from"./index-c0c3596b.js";const{VITE_API:n,VITE_APIPATH:r}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"cheetah116",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{singleProduct:{}}},methods:{getSingleProduct(){const{id:c}=this.$route.params;this.$http.get(`${n}/api/${r}/product/${c}`).then(s=>{this.singleProduct=s.data.product}).catch(s=>{console.log(s)})},addToCart(c){const s={product_id:c,qty:1};this.$http.post(`${n}/api/${r}/cart`,{data:s}).then(i=>{alert("已加入購物車")}).catch(i=>{alert(i.response.data.message)})}},mounted(){this.getSingleProduct()}},g={class:"row container"},p={class:"col-6"},P=["src","alt"],m={class:"col-6"},v={class:"card"},T={class:"card-body"},b={class:"card-title"},f=t("hr",null,null,-1),x={class:"card-text"},E={class:"text-end"},I={class:"card-subtitle mb-2 text-decoration-line-through"},V={class:"card-subtitle mb-2 text-danger"},A=t("hr",null,null,-1),$={class:"card-subtitle mb-2"};function S(c,s,i,w,e,d){return a(),_("div",null,[t("div",g,[t("div",p,[t("img",{src:e.singleProduct.imageUrl,class:"img-fluid rounded mx-auto d-block img-cover",alt:e.singleProduct.title},null,8,P)]),t("div",m,[t("div",v,[t("div",T,[t("h2",b,o(e.singleProduct.title),1),f,t("h4",x,o(e.singleProduct.description),1),t("div",E,[t("h5",I,"NT$"+o(e.singleProduct.origin_price)+"元",1),t("h3",V,"NT$"+o(e.singleProduct.price)+"元",1),A,t("h6",$,"小計 NT$"+o(e.singleProduct.price)+"元",1),t("a",{href:"#",class:"btn btn-outline-danger w-100",onClick:s[0]||(s[0]=u(y=>d.addToCart(e.singleProduct.id),["prevent"]))},"加入購物車")])])])])])])}const B=l(h,[["render",S]]);export{B as default};
