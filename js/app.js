//function to retrieve racer data

const getData = async (season,round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    // console.log(response)
    // console.log(response.data)
    return response.data
}
//return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings

const racerList = '.racer-list'

// creation of the racer list html

const createList = (position,name,nationality,sponsor,points) => {
    const html = `<tr>
        <td>${position}</td>
        <td>${name}</td>
        <td>${nationality}</td>
        <td>${sponsor}</td>
        <td>${points}</td>
    </tr>`
// return html 
return document.querySelector(racerList).insertAdjacentHTML('beforeend', html)
}






const loadData = async () => {
    const racers = getData() //await getData()

    racers.forEach(element => createList(element.position,element.name,element.nationality,element.sponsor,element.points))
}
const clearData = () => {
    document.querySelector(racerList).innerHTML = '';
}