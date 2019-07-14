<template>
  <div class="shop-single-item-photos">
    <a class="shop-single-item-popup" :href="mainImage">
      <img :src="mainImage" alt />
    </a>
    <ul class="shop-single-item-gallery">
      <li v-for="image in images">
        <a class="shop-single-item-popup" :href="image">
          <img :src="image" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'productImages',
  props: {
    mainImage: String,
    images: Array
  },
  mounted: function () {
    const el = $(this.$el)
    el.find('.shop-single-item-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            tError: 'The image could not be loaded.',
        }
    });
  }
}
</script>
