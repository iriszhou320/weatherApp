
//the complete api url
var finalUrl = "https://hackathon.pic.pelmorex.com/api/search/string?keyword=london&prov=ontario&country=canada";

//global variable for use 
var locationCode;

var temperature;


async function getLocationCode (callback){
    //get user inputs 
    var city=document.getElementById("city").value;
    var province =null;
    var country =null;
    
    //set the url to fetch 
    finalUrl="https://hackathon.pic.pelmorex.com/api/search/string?keyword="+city +"&prov="+province+"&country="+country;
    
   
   // fetch function
    fetch(finalUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        locationCode=data.code;
        callback();
        
    })
}


async function setTemperature(callback){
    getLocationCode(function() {
        finalUrl="https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
        // document.getElementById("place").innerHTML = finalUrl;
        fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            temperature=data.data.temp;
            callback();
         })
    })
}



function getTemperature(){
    
   setTemperature(function(){
      document.getElementById("temp").innerHTML=temperature +"&#8451"; 
   })
   
}

function getFeels(){
    getLocationCode(function() {
        finalUrl="https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
        fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            document.getElementById("feels").innerHTML = data.data.feelsLike +"&#8451";
        })
    })
}

function getWindSpeed(){
    getLocationCode(function() {
        finalUrl="https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
        fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            document.getElementById("wind").innerHTML =  data.data.windSpeed+" m/s";
        })
    })
}


function getSunrise(){
    getLocationCode(function() {
        finalUrl = "https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
         fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            document.getElementById("sunrise").innerHTML =  data.data.sunrise;
        })
    })
}

function getSunset(){
     getLocationCode(function() {
        finalUrl = "https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
         fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            document.getElementById("sunset").innerHTML =  data.data.sunset;
        })
    })
}

function getHumidity(){
     getLocationCode(function() {
        finalUrl = "https://hackathon.pic.pelmorex.com/api/data/observation?locationcode="+locationCode;
         fetch(finalUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            document.getElementById("humidity").innerHTML =  data.data.humidity+"%";
        })
    })
}

function getClothing(){
    
    var image = document.getElementById("displayClothing");
    var other = document.getElementById("otherthing");
    var more = document.getElementById("more");
    var activity = document.getElementById("activity");
    
     setTemperature(function() {
       console.log(temperature);
        if(temperature >=28){
          image.src = "./img/devon_windsor_street_style_photo_paris_fashion_week_.jpg";
          other.src = "./img/sunglasses.jpg";
          more.src = "./img/sunscreen.jpg";
          activity.src = "./img/summer.jpg";
         }
        else if(temperature < 28 && temperature >18){
          image.src = "./img/16-seoul-fw-17-day-4.jpg";
          other.src = "./img/sneakers.jpg";
          more.src = "./img/sweater.png";
          activity.src = "./img/spring.jpg";
          
        }
        else if(temperature <= 18 && temperature > 8){
          image.src = "./img/0202-dan-roberts-street-style-NYMFW-FW17-30.jpg";
          other.src = "./img/umbrella.jpg";
          more.src = "./img/coat.jpg";
          activity.src = "./img/autumn.jpg";
        }
        else {
          image.src = "./img/Best-Winter-Street-Style.jpg";
          activity.src = "./img/winter.jpg";
          other.src = "./img/boots.jpg";
          more.src = "./img/winterman.jpg";
        }
    })
}

function setSong() {
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");
    setTemperature(function() {
        if(temperature >=28){
            console.log("worked");
          song1.innerHTML = "Summer Vibe";
          song2.innerHTML = "Summer Vibe";
          song3.innerHTML = "Summer Vibe";
          song1.href = "https://open.spotify.com/track/4nMlau89VAjmV7agkl7OY3";
          song2.href = "https://open.spotify.com/track/6M6Tk58pQvABy6ru66dY3d";
          song3.href = "https://open.spotify.com/track/3FDrI0FLKzrYQiWxPhqV2W";
         }
        else if(temperature < 28 && temperature >18){
          song1.innerHTML = "Warmer Jam";
          song2.innerHTML = "Warmer Jam";
          song3.innerHTML = "Warmer Jam";
          song1.href = "https://open.spotify.com/track/000xQL6tZNLJzIrtIgxqSl";
          song2.href = "https://open.spotify.com/track/6u0dQik0aif7FQlrhycG1L";
          song3.href = "https://open.spotify.com/track/3ALi74ohQ9DqiMDEs5jX5o";
          
        }
        else if(temperature <= 18 && temperature > 8){
          song1.innerHTML="Chilling Feels";
          song2.innerHTML="Chilling Feels";
          song3.innerHTML="Chilling Feels";
          song1.href = "https://open.spotify.com/track/2MR7uOIOsLEgRL6xi9p5pS";
          song2.href = "https://open.spotify.com/track/63Ly2sEzloc9s0yAXlMi6r";
          song3.href = "https://open.spotify.com/track/6obKvh06VvBZP98oqU6YR7";
        }
        else {
         song1.innerHTML = "Jingle Bells";
         song2.innerHTML = "Jingle Bells";
         song3.innerHTML = "Jingle Bells";
         
         song1.href = "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn";
         song2.href = "https://open.spotify.com/track/1ADjWm8QNhgNV8yCNNgQ1T";
         song3.href = "https://open.spotify.com/track/74u8cWJGP8d8xsdD0pFoWg";
        } 
    })
}