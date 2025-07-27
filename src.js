console.log("wellcome to spotify");

//initialize the variable
let audioElement=new Audio('7.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay')
let progressBar=document.getElementById('progressBar')
let songItem= Array.from( document.getElementsByClassName('songName'))
let song= [
    {songName:"sala-e-Isq",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"bhool-e-Isq",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:" phatan-e-Isq",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"dilwale-e-Isq",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"eidi-e-Isq",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"hij-e-Isq",filePath:"8.mp3",coverPath:"8.jpg"}

]
songItem.forEach((element, i)=>{
    // console.log(element, i)
    if(i < song.length) {
        document.getElementsByClassName('logo')[i].src = song[i].coverPath;
        document.getElementsByClassName('songName')[i].innerText = song[i].songName;
    }
})
// handle pause play
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//listen event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    progressBar.value=progress;

})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})