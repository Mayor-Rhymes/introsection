let targeted = document.querySelector('.menu');


let vision = document.querySelector('.sider');
let closer = document.querySelector('.closer');
let features = document.getElementById('featuresdrop');
let company = document.getElementById('companydrop');
let dropone = document.querySelector('.dropone');
let droptwo = document.querySelector('.droptwo');

let gogo = document.querySelector('.gogo');
let gojo = document.querySelector('.gojo');
let siderfeatures = document.getElementById('siderfeatures');
let sidercompany = document.getElementById('sidercompany');
let drop1 = document.querySelector('.drop1');
let drop2 = document.querySelector('.drop2');

targeted.addEventListener('click', () => {


    vision.classList.toggle('seen');
    
    

});


closer.addEventListener('click', () => {

    vision.classList.remove('seen');
    

})



features.addEventListener('mouseover', () => {


   dropone.style.display = 'flex';
   gogo.src = "images/icon-arrow-up.svg";
   
})

siderfeatures.addEventListener('click', () => {

   if(drop1.style.display === 'flex') drop1.style.display = 'none';
   else{

      drop1.style.display = 'flex';
   }

    // gogo.src = "images/icon-arrow-up.svg";
    
 })



 sidercompany.addEventListener('click', () => {

    if(drop2.style.display === 'flex') drop2.style.display = 'none';
    else{
 
       drop2.style.display = 'flex';
    }
 
     
     
  })
 


company.addEventListener('mouseover', () => {


    droptwo.style.display = 'flex';
    gojo.src = "images/icon-arrow-up.svg";
    
 })

 company.addEventListener('mouseout', () => {


   droptwo.style.display = 'none';
   gojo.src = "images/icon-arrow-down.svg";
   
})



dropone.addEventListener('mouseover', () => {


    dropone.style.display = 'none';
})


droptwo.addEventListener('mouseout', () => {



    droptwo.style.display = 'none';
})



features.addEventListener('mouseout', () => {


    dropone.style.display = 'none';
    gogo.src = "images/icon-arrow-down.svg";
 })