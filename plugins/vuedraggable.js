import Draggable from 'vuedraggable';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Draggable);
});
