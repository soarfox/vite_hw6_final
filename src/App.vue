<template>
  <div class="container">
  <!-- 將點擊navbar項目後的結果顯示在下方此處, 在navbar有router-link, 在這裡有對應的router-view -->
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<!-- 參考Vite官網: https://vitejs.dev/guide/features.html#css-pre-processors , 將sass安裝起來, 在VScode輸入指令npm add -D sass, 且將此處原本的程式碼都刪除, 且寫上lang="scss" -->
<style lang="scss">
//在此處增加一個body且設定padding-top是某一高度, 藉此避免網頁內容被navbar給遮蓋住
body {
  padding-top: 80px
}
</style>
