const url =' https://api.openweathermap.org/data/2.5/';
const key = 'e0802d1870b825e3e975a502bb0498cb';

const setQuery = (e) => {
    if(e.keyCode == '13') // yakaladıgımız eventın keykodu 13 ise enter a basma ıslemı gerceklesmıs demektır.
    getResult(search.value) // işlem gerceklesmısse getresult fonksıyonu calısacak. 
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr` // link olusturma
    fetch(query)
    .then(weather =>{return weather.json()})
    .then(displayResult) // json formatındaki weather bu fonksıyonda parametre olarak kullanılacak.
}

const displayResult = result => { 
    console.log(result)
    let city = document.querySelector('.city')
    city.innerText=`${result.name}, ${result.sys.country}`
    let temp = document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp_min)}°C`
    let explain = document.querySelector('.explain')
    explain.innerText=`${result.weather[0].description}`
    let minmax = document.querySelector('.minmax')
    minmax.innerHTML=`${Math.round(result.main.temp_min)}°C/${Math.round(result.main.temp_max)}°C`
}

const search = document.querySelector('#search')
search.addEventListener('keypress',setQuery) // klavyeden enter tusuna bastıgımız da event tetıklenecek


