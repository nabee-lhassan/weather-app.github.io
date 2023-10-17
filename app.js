
const apiKey = "2430a41d609b228cc7c95d2feb6a9483";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search_bar = document.querySelector('#search_bar');
const my_btn = document.querySelector('.my-btn');


const weatherIcon = {
rain: "https://cdn-icons-png.flaticon.com/512/116/116251.png",
sun:"https://cdn-icons-png.flaticon.com/512/831/831682.png",
winter:"https://10wallpaper.com/wallpaper/2560x1600/1609/Sunbeams_light_snow_winter-Scenery_HD_Wallpaper_2560x1600.jpg",
midWeather:"https://elmina.club/uploads/posts/2023-05/1684928330_elmina-club-p-gori-nebo-solntse-foni-krasivo-8.jpg",

}

console.log(weatherIcon.rain)

async function checkWeather(city){

    const weather = await fetch(apiUrl  + city + `&appid=${apiKey} `);

    const data = await weather.json();
    console.log(data);

    if (data.main.temp < 0){


        document.querySelector('.div-temp-icon').innerHTML = `<img width="60px" height="60px" id="tem-icon" src="${weatherIcon.rain}" alt="">`;  
     
document.querySelector('.div-body-image').innerHTML = `<img class="body-image" src="${weatherIcon.winter}" alt="">`;   
    }else if (data.main.temp < 10){



        document.querySelector('.div-temp-icon').innerHTML = `<img width="60px" height="60px" id="tem-icon" src="${weatherIcon.sun}" alt="">`;  
     
document.querySelector('.div-body-image').innerHTML = `<img class="body-image" src="${weatherIcon.midWeather}" alt="">`;   


    }

    document.querySelector('.temp').innerHTML = `${ Math.round( data.main.temp)} &#176;C`;
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML =` Humidity ${data.main.humidity} %`;
    document.querySelector('.wind').innerHTML =` wind speed ${data.wind.speed} Km/h `;
    document.querySelector('.feel-like').innerHTML =` feel like ${data.main.feels_like}  `;
    
//    const search = document.querySelector('#search_bar');

   

}



my_btn.addEventListener('click', function () {

// if (search_bar.value == ) {}

    checkWeather(search_bar.value);

} )

