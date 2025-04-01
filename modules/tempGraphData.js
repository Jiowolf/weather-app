import Chart from 'chart.js/auto'


export default async function tempGraphData(obj,where){
    
    let minTemp = [];
    let maxTemp = [];
    let dateHour = [];

    let objWeather = obj

    
    for(let i = 0 ; i < objWeather.list.length ; i++){
        minTemp.push(objWeather.list[i].main.temp_min);
        maxTemp.push(objWeather.list[i].main.temp_max);
        dateHour.push(objWeather.list[i].dt_txt);
    }
    let minMaxDateHour = [minTemp,maxTemp,dateHour];

    const minMaxGraph = new Chart(
        where, 
        {
        data: {
            datasets: [{
                type: 'line',
                label: 'Min Temperature',
                data: minMaxDateHour[0],
                borderColor: 'rgb(54, 162, 235)'
            }, {
                type: 'line',
                label: 'Max Temperature',
                data: minMaxDateHour[1],
                borderColor: 'rgb(235, 54, 54)'
            }],
            labels: minMaxDateHour[2]
        },
        options:{
            aspectRatio: 1,
            scales:{
                x:{
                    max: 50,
                    min: -40
                    
                }
            }
        }   
        
    });
    

    return minMaxGraph
}


