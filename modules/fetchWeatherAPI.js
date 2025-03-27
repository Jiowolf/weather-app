import { keyWeatherAPI } from "./sensible.js";

export default function fetchWeatherAPI() {
    const SEARCH_SELECT = document.querySelector('#searchButton');
    const INPUT_SEARCH_SELECT = document.querySelector('#search');

    SEARCH_SELECT.addEventListener('click', async() => {
        let searchValue = INPUT_SEARCH_SELECT.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${keyWeatherAPI}`);
        let data = await response.json();
        console.log(data);
    });
};