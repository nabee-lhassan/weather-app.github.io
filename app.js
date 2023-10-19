
const apiKey = "2430a41d609b228cc7c95d2feb6a9483";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search_bar = document.querySelector('#search_bar');
const my_btn = document.querySelector('.my-btn');


const weatherIcon = {
rain: "https://cdn-icons-png.flaticon.com/512/116/116251.png",
sun:"https://cdn-icons-png.flaticon.com/512/831/831682.png",
}

console.log(weatherIcon.rain)

async function checkWeather(city){

    const weather = await fetch(apiUrl  + city + `&appid=${apiKey} `);

    const data = await weather.json();
    console.log(data);

    if (data.main.temp <= -10){


        document.querySelector('.div-temp-icon').innerHTML = `<img width="60px" height="60px" id="tem-icon" src="${weatherIcon.rain}" alt="">`;  
     
// document.querySelector('.div-body-image').innerHTML = `<img class="body-image" src="${weatherIcon.winter}" alt="">`;   
   document.getElementsByClassName('body-image')[0].classList.remove('active');   
   document.getElementsByClassName('body-image')[1].classList.add('active');   
   document.getElementsByClassName('body-image')[2].classList.remove('active');   
   document.getElementsByClassName('body-image')[3].classList.remove('active');   
   document.getElementsByClassName('body-image')[4].classList.remove('active');
 
    }else if (data.main.temp < 0 ){

        document.getElementsByClassName('body-image')[0].classList.remove('active');   
        document.getElementsByClassName('body-image')[1].classList.remove('active'); 
        document.getElementsByClassName('body-image')[2].classList.add('active'); 
        document.getElementsByClassName('body-image')[3].classList.remove('active'); 
        document.getElementsByClassName('body-image')[4].classList.remove('active');
        document.getElementsByClassName('body-image')[5].classList.remove('active');

        document.querySelector('.div-temp-icon').innerHTML = `<img width="60px" height="60px" id="tem-icon" src="${weatherIcon.sun}" alt="">`;  

    }else if (data.main.temp <= 10 ){


        document.getElementsByClassName('body-image')[0].classList.remove('active');   
        document.getElementsByClassName('body-image')[1].classList.remove('active'); 
        document.getElementsByClassName('body-image')[2].classList.remove('active'); 
        document.getElementsByClassName('body-image')[3].classList.add('active'); 
        document.getElementsByClassName('body-image')[4].classList.remove('active'); 
        document.getElementsByClassName('body-image')[5].classList.remove('active');

        document.querySelector('.div-temp-icon').innerHTML = `<img width="60px" height="60px" id="tem-icon" src="${weatherIcon.sun}" alt="">`; 

    }else if(data.main.temp <= 20){

        document.getElementsByClassName('body-image')[0].classList.remove('active');   
        document.getElementsByClassName('body-image')[1].classList.remove('active'); 
        document.getElementsByClassName('body-image')[2].classList.remove('active'); 
        document.getElementsByClassName('body-image')[3].classList.remove('active'); 
        document.getElementsByClassName('body-image')[4].classList.add('active'); 
        document.getElementsByClassName('body-image')[5].classList.remove('active');

    }else if(data.main.temp <= 30){

        document.getElementsByClassName('body-image')[0].classList.remove('active');   
        document.getElementsByClassName('body-image')[1].classList.remove('active'); 
        document.getElementsByClassName('body-image')[2].classList.remove('active'); 
        document.getElementsByClassName('body-image')[3].classList.remove('active'); 
        document.getElementsByClassName('body-image')[4].classList.remove('active'); 
        document.getElementsByClassName('body-image')[5].classList.add('active'); 

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

