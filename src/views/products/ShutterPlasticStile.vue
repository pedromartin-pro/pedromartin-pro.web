<template>
  <div class="wrapper">
    <ProductHeader
      :name="t('plastic_stile')"
      :parent="t('shutters')"
      parentLink="shutters"
      image="/images/wood.jpg"
   ></ProductHeader>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <ProductImages
              mainImage="/images/shutters.jpg"
              :images="['/images/shutters2.jpg', '/images/shutters3.jpg']"
            ></ProductImages>
          </div>
          <div class="col-lg-3 bg-gray">
            <!-- <RodFoodForm></RodFoodForm> -->
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>

    <section class="module p-t-0">
      <ProductTabs
        :description="t('plastic_stile_extended')"
        :options="[{title:t('types'), value:t('plastic_stile_types')}, {title:t('sizes'), value:t('plastic_stile_sizes')}, {title:t('wood'), value:t('pine')}, {title:t('painted'), value:t('no')}]"
      ></ProductTabs>
    </section>

    <EndOfTheRoad></EndOfTheRoad>
  </div>
</template>

<script>
import ProductHeader from '@/components/product/ProductHeader.vue'
import ProductImages from '@/components/product/ProductImages.vue'
import ProductTabs from '@/components/product/ProductTabs.vue'
// import RodFoodForm from '@/components/forms/RodFoodForm.vue'
import ContactForm from '@/components/forms/ContactForm.vue'
import EndOfTheRoad from '@/components/EndOfTheRoad.vue'

export default {
  name: 'rods',
  components: {
    ProductHeader,
    ProductImages,
    ProductTabs,
    // RodFoodForm,
    ContactForm,
    EndOfTheRoad
  },
  data () {
    return { form: 'equipment' }
  },
  methods: {
    t (val) {
      return this.$t(val)
    }
  }
}
</script>
