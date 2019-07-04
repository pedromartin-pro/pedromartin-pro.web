<template>
  <div class="wrapper">
    <ProductHeader
      :name="t('rod_food')"
      :parent="t('rods')"
      parentLink="rods"
    ></ProductHeader>

    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <ProductImages
              mainImage="/images/shop/1.jpg"
              :images="['/images/shop/1.jpg', '/images/shop/1.jpg', '/images/shop/1.jpg']"
            ></ProductImages>
          </div>
          <div class="col-lg-3">
            <RodFoodForm></RodFoodForm>
          </div>
        </div>
      </div>
    </section>

    <section class="module p-t-0">
      <ProductTabs
        description="<p>lalalalalalala lalalalalalala</p>"
        :options="[{title:'op1', value:'val1'}, {title:'op2', value:'val2'}]"
      ></ProductTabs>
    </section>

    <EndOfTheRoad></EndOfTheRoad>
  </div>
</template>

<script>
import ProductHeader from '@/components/product/ProductHeader.vue'
import ProductImages from '@/components/product/ProductImages.vue'
import ProductTabs from '@/components/product/ProductTabs.vue'
import RodFoodForm from '@/components/forms/RodFoodForm.vue'
import EndOfTheRoad from '@/components/EndOfTheRoad.vue'

export default {
  name: 'rods',
  components: {
    ProductHeader,
    ProductImages,
    ProductTabs,
    RodFoodForm,
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
