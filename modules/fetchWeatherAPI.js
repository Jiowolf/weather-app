import { keyWeatherAPI } from "./sensible.js";
import  printWeatherData  from "./printWeatherData.js";

export default function fetchWeatherAPI() {
    const SEARCH_SELECT = document.querySelector('#searchButton');
    const INPUT_SEARCH_SELECT = document.querySelector('#search');

    SEARCH_SELECT.addEventListener('click', async() => {
        let searchValue = INPUT_SEARCH_SELECT.value;

        if (!searchValue) {
            alert('Veuillez entrer un nom de ville.');
            return;
        }
        try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${keyWeatherAPI}`);

            if (response){
                let data = await response.json();
            return printWeatherData(data);
            } else{
                alert('Erreur lors de la récupération des données météo.');
                return ;
            }
        }catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la récupération des données météo.');
            return;
        }
    });
};