import getDateAndHourInStringToArr from "./getDateAndHourInStringToArr";
import tempGraphData from "./tempGraphData";

export default async function printWeatherData(objWeather) {
    const MAIN_SELECT = document.querySelector('main');

    const GRAPH_PARENT = document.createElement('div');
    GRAPH_PARENT.id = 'graph';
    MAIN_SELECT.appendChild(GRAPH_PARENT);

    const GRAPH_SELECT = document.createElement('canvas');
    GRAPH_PARENT.appendChild(GRAPH_SELECT);

    await tempGraphData(objWeather,GRAPH_SELECT);

    // const dateAndHour = await getDateAndHourInStringToArr(objWeather.list[0].dt_txt);

    // const DAY_CARD_SELECT = document.createElement('div');
    //     DAY_CARD_SELECT.className = 'dayCard';
    //     DAY_CARD_SELECT.id = `${dateAndHour[0]}`;
    //     MAIN_SELECT.appendChild(DAY_CARD_SELECT);
    
    for (let i = 0; i < objWeather.list.length; i++) {

        const dateAndHour = await getDateAndHourInStringToArr(objWeather.list[i].dt_txt);
        
        const DAY_CARD_SELECT = document.createElement('div');
        DAY_CARD_SELECT.className = 'dayCard';
        DAY_CARD_SELECT.id = `${dateAndHour[0]}`;
        MAIN_SELECT.appendChild(DAY_CARD_SELECT);
        
        // if(DAY_CARD_SELECT.id !== dateAndHour[0]){
        //     const DAY_CARD_SELECT = document.createElement('div');
        //     DAY_CARD_SELECT.className = 'dayCard';
        //     DAY_CARD_SELECT.id = `${dateAndHour[0]}`;
        //     MAIN_SELECT.appendChild(DAY_CARD_SELECT);
        // }


        const HEAD_CARD_SELECT = document.createElement('div');
        HEAD_CARD_SELECT.className = 'headCard';
        DAY_CARD_SELECT.appendChild(HEAD_CARD_SELECT);
        
        const CITY_SELECT = document.createElement('h2');
        CITY_SELECT.className ='city';
        HEAD_CARD_SELECT.appendChild(CITY_SELECT);
        
        const DATE_SELECT = document.createElement('p');
        DATE_SELECT.className = 'date';
        HEAD_CARD_SELECT.appendChild(DATE_SELECT);


        const HOUR_CARD_SELECT = document.createElement('div');
        HOUR_CARD_SELECT.className = 'hourCard';
        HOUR_CARD_SELECT.id = `${dateAndHour[0]}`;
        DAY_CARD_SELECT.appendChild(HOUR_CARD_SELECT);

        const HOUR_SELECT = document.createElement('p');
        HOUR_SELECT.className = 'hour';
        HOUR_CARD_SELECT.appendChild(HOUR_SELECT);

        const ICON_SELECT = document.createElement('img');
        ICON_SELECT.className = 'icon';
        HOUR_CARD_SELECT.appendChild(ICON_SELECT);

        const WEATHER_SELECT = document.createElement('p');
        WEATHER_SELECT.className = 'weather';
        HOUR_CARD_SELECT.appendChild(WEATHER_SELECT);

        const TEMPERATURE_SELECT = document.createElement('p');
        TEMPERATURE_SELECT.className = 'temperature';
        HOUR_CARD_SELECT.appendChild(TEMPERATURE_SELECT);

        const HUMIDITY_SELECT = document.createElement('p');
        HUMIDITY_SELECT.className = 'humidity';
        HOUR_CARD_SELECT.appendChild(HUMIDITY_SELECT);


        CITY_SELECT.innerHTML = objWeather.city.name;
        DATE_SELECT.innerHTML = dateAndHour[0] ;


        ICON_SELECT.src = `https://openweathermap.org/img/wn/${objWeather.list[i].weather[0].icon}@2x.png`;
        WEATHER_SELECT.innerHTML = objWeather.list[i].weather[0].description;
        TEMPERATURE_SELECT.innerHTML = objWeather.list[i].main.temp + "°C";            HUMIDITY_SELECT.innerHTML = objWeather.list[i].main.humidity + "%";
        HOUR_SELECT.innerHTML = dateAndHour[1] ;
        
        
    }

    
}

