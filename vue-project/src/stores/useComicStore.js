import { defineStore } from "pinia";
import { ref } from "vue";

export const useComicStore = defineStore('comic', () => {
    const image = ref('');
    const title = ref('');

    const setComic = (comic_info) => {
        image.value = comic_info.img;
        title.value = comic_info.title;
    };

    return { image, title, setComic };
});
