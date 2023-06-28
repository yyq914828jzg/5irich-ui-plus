

import TTable from './table/src/index.vue'
import TSelect from './select/src/index.vue'
import TButton from './button/src/index.vue'
import TPage from './page/src/index.vue'


declare module 'vue' {
  export interface GlobalComponents {
    TTable: typeof TTable
    TSelect: typeof TSelect
    TButton: typeof TButton
    TPage: typeof TPage
  }
}