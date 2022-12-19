//LLAVE API 70KMry2Hl06I7Ge4Ksw7OqNFLKOXx9dqlwTZbaGy
function nasarequested(){
   let UrlNasa = 'https://api.nasa.gov/planetary/apod?api_key=';
   let api_Key = "70KMry2Hl06I7Ge4Ksw7OqNFLKOXx9dqlwTZbaGy";
   let dateInput = document.querySelector("#datepicker");
   let title = document.querySelector("#title");
   let mediaSection = document.querySelector("#media-section");
   let information = document.querySelector("#description");

   const currentDate =new Date().toISOString().slice(0, 10);


   const imageSection =
   `<a id="hdimg" href="" target="-blank">
    <div class="image-div">
    <img id="image_of_the_day" src="" alt="image-by-nasa">
    </div>
   </a>`;

   const videoSection=
   `<div class="video-div">
    <iframe id="videoLink" src="" frameborder="0">
    </iframe></div>`

   let newDate = "&date="+dateInput.value+"&";


   function fetchData(){
    try{
    fetch(UrlNasa + api_Key + newDate)
    .then(response=> response.json())
    .then((json)=>{
    diplayDT(json)
    });
     }   catch(error){
        console.log(error);
     }
    }

   function diplayDT(data){

    title.innerHTML = data.title;
    date.innerHTML=data.date;
    dateInput.max=currentDate;
   dateInput.min="1995-06-16";

    if(data.media_type=="video"){
    mediaSection.innerHTML=videoSection;
    document.getElementById("videoLink").src=data.url;

    } else{
    mediaSection.innerHTML=imageSection;
    document.getElementById("hdimg").href=data.hdurl;
    document.getElementById("image_of_the_day").src=data.url;
    }
    information.innerHTML=data.explanation;
   }
   fetchData();  
 }

const dateInput = document.querySelector("#datepicker");
    dateInput.addEventListener('change',(e)=>{
    e.preventDefault();
    nasarequested();
})
   nasarequested().onload;