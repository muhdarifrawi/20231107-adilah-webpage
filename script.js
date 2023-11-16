let pageArray = ["landing-page", "section-1", "section-2", "section-3", "section-4"];


//let downArrow = document.getElementsByClassName("down-arrow-icon")[0];
let downArrow = $("#down-arrow")[0];

let num = 1;

downArrow.addEventListener("click", function () {

    let pageId = pageArray[num];
    console.log(pageId);
    document.location.href = "#" + pageId;
    if (num == 4) {
        num = 0;
    }
    else {
        num += 1;
    }
})


