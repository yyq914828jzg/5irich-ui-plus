
<script lang="ts">
export default {
    name: "richPage"
}
</script>
<script  setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  form: {
    type: Object,
    require: true,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const defaultPageSizes =  [10, 20, 30, 40];
const page = ref({});
watch(
  () => props.form,
  (item:any) => {
    page.value = { page: item.page, rows: item.rows };
  },
  { immediate: true },
);
const emit = defineEmits(['pageChange']);
const handleSizeChange = () => {
  emit('pageChange', page.value);
};
const handleCurrentChange = () => {
  emit('pageChange', page.value);
};
</script>
<template>
  <div class="rich-page" m-t-10px m-b-10px>
      <el-pagination
        v-model:currentPage="page.page"
        v-model:page-size="page.rows"
        :page-sizes="defaultPageSizes"
        small="small"
        :background="true"
        layout="total,prev, pager, next,sizes, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
  </div>
</template>

