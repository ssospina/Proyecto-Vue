import { useComicStore } from '../stores/useComicStore';
import { getComic } from '@/helpers/getComic';

export const useComic = async () => {
    const comicStore = useComicStore();
    const comic_info = await getComic();
    comicStore.setComic(comic_info);  
};
