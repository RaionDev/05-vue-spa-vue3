import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onActivated,
  onDeactivated,
  onRenderTracked,
  onRenderTriggered,
  onErrorCaptured,
  onBeforeUnmount,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup');

    const counter = ref(0);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    onActivated(() => {
      console.log('onActivated');
    });

    onDeactivated(() => {
      console.log('onDeactivated');
    });

    onRenderTracked(() => {
      console.log('onRenderTracked');
    });

    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });

    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });

    return {
      counter,
    };
  },
});
