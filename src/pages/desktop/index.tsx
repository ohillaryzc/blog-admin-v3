// import { Spin, Button } from 'ant-design-vue';
// import 'ant-design-vue/es/spin/style/css'
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive<{
      pageLoading: boolean;
      count: number;
    }>({
      pageLoading: false,
      count: 0,
    })

    const startLoading = () => {
      state.pageLoading = true;
      setTimeout(() => {
        state.count++
        state.pageLoading = false;
      }, 2000);
    }

    return () => (
      <a-spin spinning={state.pageLoading}>
        <div>desktop {state.count}</div>
        <a-button onClick={startLoading}>Loading...</a-button>
      </a-spin>
    )
  }
});
