// js bạn muốn đi đâu

const inputSearch = document.querySelector(".input-search")
const autoBox = document.querySelector(".autoBox")
//console.log (inputSearch)
inputSearch.onkeyup =(e)=> {
  //console.log (e.target.value)
  let checkData = e.target.value
  let dataArray = []
  if(checkData) {
    dataArray=recomentlist.filter((data)=> { 
      return data.tolocaleLowerCase().startwith(checkData.tolocaleLowerCase())
      })
     dataArray=dataArray.map((data)=>{
      return data ='<li>'+data+'</li>'
     })
autoBox.classList.add('active')
     showldress (dataArray)
     let liItem = autoBox.querySelectorAll('li')
     for(let i=0; i<liItem.length;i++){
      liItem[i].addEventListener("click",function(){
        inputSearch.value = liItem[i].innerHTML
      })
     }
     //console.log(dataArray)
  }
  else {
    autoBox.classList.remove('active')
  }
}
    
function showldress (list){
  let listData
  if (!list.length){
    listData = '<li>'+inputSearch.value+'</li>'

  }
  else {
    listData = list.join('')
  }
autoBox.innerHTML = listData
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})