import { defineComponent, ref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const param = ref(0)
    // setInterval(() => {
    //   param.value ++
    // }, 1000)
    const selectVal = ref<string>("1")
    return () => (
      <>
        <ElSelect v-model={selectVal.value} onChange={(e: any) => {console.log(e)}} >
          <ElOption value="1" label="aaaa"></ElOption>
          <ElOption value="2" label="abbba"></ElOption>
          <ElOption value="3" label="aarfrdfcr"></ElOption>
        </ElSelect>
        <h1>Home{param.value}</h1>
        <h1>{store.state.title}</h1>
      </>
    );
  }
});