<script setup>
import {useComic} from '@/composables/useComic';
import { onMounted } from 'vue';
import { useComicStore } from '@/stores/useComicStore';
const comicStore = useComicStore();

onMounted( () => {
    useComic();
})
</script>

<template>
<div>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-center">
            <span class="title-comic">{{ comicStore.title }}</span>
        </div>
    </nav>
</div>
</template>

<style scoped>

/* TEXT */

.title-comic{
    font-size: 38px;
    font-weight: bold;
    line-height: 48px;
    color: black;
}


</style>
