let pageArray = ["landing-page", "section-1", "section-2", "section-3", "section-4"];


let downArrow = document.getElementsByClassName("down-arrow-icon")[0];

let num = 0
downArrow.addEventListener("click", function(){
    let pageId = pageArray[num];
    console.log(pageId);
    let y = document.getElementById(pageId).getBoundingClientRect().top;
    window.scrollTo(0, y);
    console.log(y);
    if(num == 4){
        num = 0;
    }
    else {
        num += 1;
    }
})
