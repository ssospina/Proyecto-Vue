import axios from "axios";
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MIN_COMIC_NUMBER = 1;
const MAX_COMIC_NUMBER = 2500; 

export const getComic = async () => {
    const randomNumber = getRandomNumber(MIN_COMIC_NUMBER, MAX_COMIC_NUMBER);
    const API_URL = `https://xkcd.com/${randomNumber}/info.0.json`;

    try {
        const response = await axios.get(API_URL);
        const { img, title } = response.data;
        return { img, title };  
    } catch (error) {
        console.error('Error fetching comic:', error);
        return { img: '', title: '' }; 
    }
};