// declare module "*.vue" {
//   import { defineComponent } from "vue";
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }

import TTable from './lib/table/src/index.vue'
import TSelect from './lib/select/src/index.vue'
import TButton from './lib/button/src/index.vue'
import TPage from './lib/page/src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    TTable: typeof TTable
    TSelect: typeof TSelect
    TButton: typeof TButton
    TPage: typeof TPage
  }
}
