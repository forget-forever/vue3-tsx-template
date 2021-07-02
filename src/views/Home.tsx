import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const param = ref(0)
    // setInterval(() => {
    //   param.value ++
    // }, 1000)
    return () => (
      <>
        <h1>Home{param.value}</h1>
        <h1>{store.state.title}</h1>
      </>
    );
  }
});