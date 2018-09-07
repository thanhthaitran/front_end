playlist = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/LlgY37fdDRc',
    img: 'http://img.youtube.com/vi/LlgY37fdDRc/0.jpg'
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/rPU41Mw7txo',
    img: 'http://img.youtube.com/vi/rPU41Mw7txo/0.jpg'
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/CPkGTSW34_I',
    img: 'http://img.youtube.com/vi/CPkGTSW34_I/0.jpg'
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/5e7e_KZINA4',
    img: 'http://img.youtube.com/vi/5e7e_KZINA4/0.jpg'
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/Q1JiptOTxno',
    img: 'http://img.youtube.com/vi/Q1JiptOTxno/0.jpg'
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/J6N8jOxd-2c',
    img: 'http://img.youtube.com/vi/J6N8jOxd-2c/0.jpg'
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/1tBlaVjWwbI',
    img: 'http://img.youtube.com/vi/1tBlaVjWwbI/0.jpg'
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/lyObpKEp08k',
    img: 'http://img.youtube.com/vi/lyObpKEp08k/0.jpg'
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/eQg4C5dODQ4',
    img: 'http://img.youtube.com/vi/eQg4C5dODQ4/0.jpg'
  },
  {
    id: 10,
    url: 'https://www.youtube.com/embed/FnC-w1LpHUk',
    img: 'http://img.youtube.com/vi/FnC-w1LpHUk/0.jpg'
  }
]

var numb = 0;
var arrLength = playlist.length;
let linkUrl;
var video = document.getElementById('now-playing');
function init() {
  if (localStorage.getItem('uLink') === null){
    linkUrl = playlist[0];
  } 
  else {
    linkUrl = JSON.parse(localStorage.getItem('uLink'));
  }
  video.setAttribute('src',linkUrl['url']);
  localStorage.setItem('uLink',JSON.stringify(linkUrl));  
}
function initPlaylist() {
  let listItem, item, itemVideo, subtraction = 0;
  for(let i = 0; i < arrLength; i++) {
  
    if(linkUrl['url'] == playlist[i]['url']) {
      subtraction = 1;
      continue;
    }
    listItem = document.createElement('li');
    document.getElementById('video-list').appendChild(listItem);
    item = document.getElementsByTagName('li')[i-subtraction];
    item.setAttribute('class','video-item');
    itemVideo = document.createElement('img');
    itemVideo.setAttribute('src',playlist[i]['img']);
    itemVideo.addEventListener('click' ,function (){
      linkUrl = playlist[i];
      video.setAttribute('src',linkUrl['url']);
    });
    item.appendChild(itemVideo);
  }
}
function changeVideo(clickedId) {
  if(clickedId === 'next-vid') {
    if (numb > arrLength - 1) {
      numb = 0;
    } 
    numb++;
    linkUrl = playlist[numb];
    video.setAttribute('src', linkUrl['url']);
    localStorage.setItem('uLink', JSON.stringify(linkUrl));
  }else {
    if(numb <= 0) { 
      numb = arrLength - 1;
    }
    numb--;
    linkUrl = playlist[numb];
    video.setAttribute('src', linkUrl['url']);
    localStorage.setItem('uLink', JSON.stringify(linkUrl));
  }
  
  document.getElementById("video-list").innerHTML = "";
  initPlaylist();
}

function changeVid(changeID) {
  linkUrl = playlist[changeID-1];
  video.setAttribute('src',linkUrl['url']);
  localStorage.setItem('uLink',JSON.stringify(linkUrl));
  document.getElementById("video-list").innerHTML = "";
  initPlaylist();
}
init();
initPlaylist();
