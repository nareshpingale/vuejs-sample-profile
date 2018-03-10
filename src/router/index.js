import Vue from 'vue'
import Router from 'vue-router'
import ExportDocument from '@/components/export-document.component'

import 'font-awesome/css/font-awesome.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExportDocument',
      component: ExportDocument
    }
  ]
})
