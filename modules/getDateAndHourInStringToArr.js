

export default async function getDateAndHourInStringToArr(txt) {
    try{
    const stringArr = await txt.split(' ');
    return (stringArr)
    } catch (error){
        console.error('Erreur:', error);
        alert('Erreur lors de la récupération des données météo.');
        return;
    }
}