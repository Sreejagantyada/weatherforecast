var button = document.querySelector('.button')
var inputvalue= document.querySelector('.inputvalue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&units=imperial&appid=aa916b0aa7e9e0117904fe160154e050')
.then(Response=>Response.json())
.then(data => {
    var namevalue= data['name'];
    var tempvalue = data['main']['temp'];
    var descvalue = data['weather'][0]['description'];
    name.innerHTML = namevalue;
    temp.innerHTML = tempvalue;
    desc.innerHTML= descvalue;
})
 
.catch(err => alert("wrong city name!"))
})
