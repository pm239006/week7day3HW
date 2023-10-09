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
    const racers = getData() await getData()
    let queryFirst = document.querySelector("#season").value
    let queryLast = document.querySelector('#round').value
    console.log(queryFirst, queryLast)
    const f1Racer = await getData(queryFirst, queryLast)
    console.log(f1Racer)
    f1Racer.forEach(element => createList(element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Driver.permanentNumber, element.points, element.positionText, element.wins))
}
const clearData = () => {
    document.querySelector(racerList).innerHTML = '';
}