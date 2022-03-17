function changemode(){
    var mylogo = document.getElementById('mode');
    mylogo.classList.toggle('gridbox14')

    var mylogo2 = document.getElementById('mode2');
    mylogo2.classList.toggle('gridbox14')
    
    var mylogo3 = document.getElementById('mode3');
    mylogo3.classList.toggle('gridbox14')
    
    var mylogo4 = document.getElementById('mode4');
    mylogo4.classList.toggle('gridbox14')
    
    var mylogo5 = document.getElementById('mode5');
    mylogo5.classList.toggle('gridbox14')
    
    var mylogo6 = document.getElementById('mode6');
    mylogo6.classList.toggle('gridbox14')
    
    var mylogo7 = document.getElementById('mode7');
    mylogo7.classList.toggle('gridbox14')
  
    var mylogo8 = document.getElementById('mode8');
    mylogo8.classList.toggle('gridbox14')
}


// var x = document.getElementById("out");
// var y = document.getElementById("weatherOut");
// function geolocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         x.innerText="Geo Not Supported"
//     }
// }

// function showPosition(data){
//     console.log(data)
//     x.innerText=`Latitude is ${data.coords.latitude}, longitude is ${data.coords.longitude}`
//     let latitude = data.coords.latitude;
//     let longitude = data.coords.longitude
//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
//     // api calling
//     fetch(url,{method: 'GET'})
//     //return promise
//     .then((res) => res.json())
//     //return datatype
//     .then((data) => {
//         let cityName = data.city.name
//         let weather = `${data.list[0].temp.day} degree`
//         let output = `Weather of ${cityName} is ${weather}`
//         console.log(data)
//         y.innerText = output;
//     })
// }