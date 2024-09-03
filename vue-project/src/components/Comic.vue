<script setup>
import Header from '../modules/shared/Header.vue';
import {useComic} from '../composables/useComic';
import { onMounted } from 'vue';
import { useComicStore } from '@/stores/useComicStore';
import { ref } from 'vue';

const comicStore = useComicStore();

onMounted( () => {
    useComic();
})

const starImage = new URL('@/assets/images/star.png', import.meta.url).href;
const starColorImage = new URL('@/assets/images/star-color.png', import.meta.url).href;
const selectedStar = ref(-1);
const hoveredStar = ref(-1); 
const stars = [0, 1, 2, 3, 4];

const getStarImage = (index) => {
  return index <= hoveredStar.value || index <= selectedStar.value
    ? starColorImage
    : starImage;
};

const hoverStar = (index) => {
  hoveredStar.value = index;
};

const resetHover = () => {
  hoveredStar.value = -1;
};

const selectStar = (index) => {
  selectedStar.value = index;
  saveRating(); 
};

const saveRating = () => {
  localStorage.setItem('userRating', selectedStar.value);
  console.log("La calificación es: ", selectedStar.value)
};

</script>

<template>
<Header></Header>

<div class="col-12 content-center mt-5">
    <div class="col-xxl-7 col-xl-7 col-lg-10 col-md-10 col-11 content-center">
        <img class="img-fluid" :src="comicStore.image" alt="Comic Image" />
    </div>
</div>
<div class="col-12 content-center mt-5">
    <span class="opinion-text">¡Tú opinión nos importa!</span>
</div>
<div class="col-12 content-center mt-3 mb-5">
    <div class="col-4 content-center">
      <img v-for="(star, index) in stars" :key="index" class="star-img mx-2" :src="getStarImage(index)" @mouseover="hoverStar(index)" @mouseleave="resetHover()" @click="selectStar(index)" alt=""/>
    </div>
</div>
<div class="col-12 content-center mt-5">
    <span v-if="selectedStar === 0" class="opinion-text">¡Vamos a mejorar, gracias por tu opinión!</span>
    <span v-if="selectedStar === 1" class="opinion-text">¡Vamos a mejorar!</span>
    <span v-if="selectedStar === 2" class="opinion-text">¡Nos alegra que te agrade!</span>
    <span v-if="selectedStar === 3" class="opinion-text">¡Tú opinión nos motiva a seguir así!</span>
    <span v-if="selectedStar === 4" class="opinion-text">¡Gracias por tu opinión, seguiremos así!</span>
</div>

</template>

<style scoped>

/* BODY */
.content-center{
    display: flex;
    justify-content: center;
    align-items: center;
}

/* IMAGES */

.opinion-text{
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
}

.star-img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.2s;
}
.star-img:hover {
  transform: scale(1.1);
}
</style>
