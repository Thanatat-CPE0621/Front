import Vue from 'vue'
import Element from 'element-ui'
import locale_EN from 'element-ui/lib/locale/lang/en'
import locale_TH from 'element-ui/lib/locale/lang/th'
import locale from 'element-ui/lib/locale'
import '~/theme/index.css'

locale.use(locale_TH)
export default () => {
  Vue.use(Element, { locale_TH })
}
