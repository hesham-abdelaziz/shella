let overlay = document.querySelector(".overlay");

// Help Modal
//#region
let help = document.querySelector(".help");
let helpModal = document.querySelector(".help-modal");
let closeBtn = document.querySelector(".close-mark");
help.addEventListener("click", () => {
  helpModal.classList.add("open");
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  helpModal.classList.remove("open");
  overlay.classList.remove("open");
  searchModal.classList.remove("open");
});

//#endregion

// Search Modal

//#region
let searchBtn = document.querySelector(".searchBtn");
let searchModal = document.querySelector(".search-modal");
let searchModalBody = document.querySelector(".search-modal .body");
let searchModalClose = document.querySelector(".search-modal-close");
searchBtn.addEventListener("click", () => {
  searchModal.classList.add("open");
  searchModalBody.style.opacity = "1";
  overlay.classList.add("open");
});

searchModalClose.addEventListener("click", () => {
  searchModal.classList.remove("open");
  searchModalBody.style.opacity = "0";
  overlay.classList.remove("open");
});

//#endregion

// Shopping-cart Modal

//#region
let shoppingIcon = document.querySelector(".cart");
let shoppingModal = document.querySelector(".shopping-cart-modal");
let shoppingModalClose = document.querySelector(".shopping-cart-modal-close");

shoppingIcon.addEventListener("click", () => {
  shoppingModal.classList.add("open");
  overlay.classList.add("open");
});

shoppingModalClose.addEventListener("click", () => {
  shoppingModal.classList.remove("open");
  overlay.classList.remove("open");
});

//#endregion

overlay.addEventListener("click", () => {
  helpModal.classList.remove("open");
  overlay.classList.remove("open");
  searchModal.classList.remove("open");
  shoppingModal.classList.remove("open");
  sideMenuContainer.classList.remove("open");

});

///////////////////////////

// Side Menu Toggle

//#region
let sideMenuIcon = document.querySelector(".side-menu-toggler");
let sideMenuContainer = document.querySelector(".side-menu-container");
let sideMenuClose = document.querySelector(".side-menu-close");
sideMenuIcon.addEventListener("click", () => {
  sideMenuContainer.classList.add("open");
  overlay.classList.add("open");
});
sideMenuClose.addEventListener("click", () => {
  sideMenuContainer.classList.remove("open");
  overlay.classList.remove("open");
  sideMenuContainer.children.item(1);
  sideMenuContainer.classList.forEach;
});
//#endregion

//#region
let sideMenuLinks = document.querySelectorAll(
  ".side-menu-container .body ul li"
);
let linksArray = Array.from(sideMenuLinks);

linksArray.forEach((link) => {
  link.addEventListener("click", (e) => {
    let arrow = link.firstElementChild;
    arrow.classList.toggle("open");

    if (link.lastElementChild) {
      let subMenu = link.lastElementChild;
      subMenu.classList.toggle("open");


      overlay.addEventListener('click' , () =>{
        subMenu.classList.remove("open");
        arrow.classList.remove("open");

      })
    } else {
      console.log("no las");
    }
    link.lastElementChild.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("he");
    });
  });
});
//#endregion
// Side Menu Toggle

// Like Button toggle && Add to cart
//#region

let hearts = document.querySelectorAll(".like");
let addBtns = document.querySelectorAll(".add");
let btnsArray = Array.from(addBtns);
let heartArray = Array.from(hearts);
let modal = document.querySelector('.add-success');

btnsArray.forEach((btn) =>{
  btn.addEventListener('click' , (e) =>{
    modal.classList.add('show')
    modal.innerHTML = `<p> Product added to cart! </p>`
    setTimeout(() => {
      modal.classList.remove('show')
    }, 2200);
  })
})

heartArray.forEach((heart) => {
  heart.addEventListener("click", (e) => {
    modal.classList.add('show')
    modal.innerHTML = `<p> Product added to whislist! </p>`

    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.replace("fa-regular", "fa-solid");

      setTimeout(() => {
        modal.classList.remove('show')
        
      }, 2200);
    } else {
      e.target.classList.replace("fa-solid", "fa-regular");
      modal.innerHTML = `<p> Product removed from whislist! </p>`
      setTimeout(() => {
        modal.classList.remove('show')
        
      }, 2200);

    }
  });
});



//#endregion
// Like Button toggle



let footer = document.querySelector('.footer');
window.addEventListener('scroll' , () => {
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    console.log('you are at the bottom ');
    footer.style.opacity = "1";
  }
  else {
    footer.style.opacity = "0";

  }
})




let shop = document.querySelector('.shop-sm');
let information = document.querySelector('.information');
information.addEventListener('click' , () => {
  footer.style.position
  let informationList = document.querySelector('.information-list-sm');
  informationList.classList.toggle('open')
})
shop.addEventListener('click' , () =>{
  let shopList = document.querySelector('.shop-list-sm');
  shopList.classList.toggle('open')
})





// Trending Section carousel

//#region 

const wrapper = document.querySelector('.product-wrapper');
// console.log(wrapper.clientWidth);
const btns = document.querySelector('.btns')
// console.log(dots);
let clickCount =0;
btns.addEventListener('click' , (e) => {
  if(e.target.nodeName === "SPAN"){
   Array.from(btns.children).forEach((btn) => {
     btn.classList.remove('active');
   });
   if(e.target.classList.contains('first')){
     wrapper.style.transform = "translateX(-0%)";
     e.target.classList.add('active')
   }
   else if(e.target.classList.contains('second')){
    wrapper.style.transform = "translateX(-100%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('third')){
    wrapper.style.transform = "translateX(-205%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('fourth')){
    wrapper.style.transform = "translateX(-305%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('fifth')){
    wrapper.style.transform = "translateX(-405%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('sixth')){
    wrapper.style.transform = "translateX(-505%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('seventh')){
    wrapper.style.transform = "translateX(-605%)";
    e.target.classList.add('active')
   }
   else if(e.target.classList.contains('eigth')){
    wrapper.style.transform = "translateX(-705%)";
    e.target.classList.add('active')
   }
  }
})
// let activeDot = 0;


// btns.forEach((btn , id) => {
//   btn.setAttribute('data-num' , id);
//   btn.addEventListener('click' , (e) => {
//     let clickedDot = e.target.dataset.num;

//     if(clickedDot == activeDot){
//       return;
//     }
//     else {
//       let shift = (wrapper.parentElement.clientWidth) / 4;

//       let pixels = -shift * clickedDot;

//       wrapper.style.transform += 'translateX('+ pixels + 'px)';    
      
//       activeDot += clickedDot;

//       let prev = document.querySelector('.btns span.prev')

//       prev.addEventListener('click' , () =>{
//           console.log('asdasd');
//       let pixels = shift * clickedDot;

//       wrapper.style.transform += 'translateX('+ pixels + 'px)';    

//       })
//     }
//   })
// })

//#endregion