let sharetab= document.querySelector(".share");
let navbar=document.querySelector(".navbar");
let hero=document.querySelector(".hero");
let Skills = document.querySelector(".Skills")
let hidden=document.querySelector(".hidden");
let color="white"
let Scroll=document.querySelector(".no-scroll");

sharetab.addEventListener("click",() => {
    if(color==="white"){
        hero.classList.add("shadow");
        Skills.classList.add("shadow");
        document.body.classList.add("no-scroll");  /*I had use this to stop scroll functionality */
        hidden.style.visibility="visible"
        color="black";
    }
    else{
        color="white"
        hero.classList.remove("shadow");
        Skills.classList.remove("shadow");
        document.body.classList.remove("no-scroll");  /*And this to again start scroll functionality */
        hidden.style.visibility="hidden"
    }
})

//project window on click 
let project_tag=document.querySelector(".project_tag");
let projects=document.querySelector(".projects_sec");

project_tag.addEventListener("click",()=>{
    projects.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
})

//contacts button
let contact_tag=document.querySelector(".contact_tag");
let contact=document.querySelector(".contacts");

contact_tag.addEventListener("click",()=>{
    contact.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
})

// home btn
let home =document.querySelector(".home");
let hero_bar=document.querySelector(".hero");

let hom=home.addEventListener("click",()=>{
    hero_bar.scrollIntoView({
        behavior:"smooth",
        block:"start",
    })
})


//view more button 
let btnmore=document.querySelector(".more");
btnmore.addEventListener("click",(event)=>{
    alert("There are no new projects right now but soon when new projects were made they will soon shared with you.")
})

let xxbtn=document.querySelector(".xx")
xxbtn.addEventListener("click",()=>{
    color="white"
        hero.classList.remove("shadow");
        Skills.classList.remove("shadow");
        hidden.style.visibility="hidden";
        document.body.classList.remove("no-scroll");  /*And this to again start scroll functionality */
})

// window.onload=alert("This site is optimized for PC viewing only. For the best experience, please visit from a desktop or laptop.")