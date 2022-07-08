/* Animirani tekst na klik buttona */

let textTag = document.querySelector(".section1 h1")
let text = textTag.textContent 
let splittedText = text.split('')
let button = document.querySelector(".section1 button")

button.addEventListener("click", () => {
    textTag.innerHTML = "";

splittedText.forEach(slovo => {
    if(slovo == " ") {
        slovo = "&nbsp;"
    }
    textTag.innerHTML += `<span>${slovo}</span>`
});

let spans = textTag.querySelectorAll('span')
let br = 0;

let interval = setInterval(() => {
    let singleSpan = spans[br];
    if(br%2 == 0) {
        singleSpan.className = 'fadeMove'
    } else {
        singleSpan.className = 'fadeMove2'
    }   
    br++;
    if(br === spans.length) {
        clearInterval(interval);
    }
}, 150);
})

/* Pomjeranje linije na plus ili minus button */

let border = document.querySelector('.border-line')
let btns = document.querySelectorAll('.buttons button')
let sirina = 0
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === '+')
        {
            if(sirina < 100) sirina += 10;
        }
        else
        {
            if(sirina > 0) sirina -= 10;       
        }
        border.style.width = sirina + "%" 
    })
});

let leftImage = document.querySelector(".slideFromLeft")
let rightImage = document.querySelector(".slideFromRight")
let gumb = document.querySelector(".poseban")

gumb.addEventListener("click", () => {
    leftImage.classList.add("animated")
    rightImage.classList.add("animated")
})

/*
let animationWidth = 0;
window.onscroll = () => {
    if(this.oldScroll > this.scrollY) {
        animationWidth -= 1
    } else {
        animationWidth += 1
    }

    if(animationWidth >= 100) {
        animationWidth = 100
    }

    if(animationWidth <= 0) {
        animationWidth = 0
    }

    border.style.width = animationWidth + "%";
    this.oldScroll = this.scrollY

    ImageAnimation();
}

const ImageAnimation = () => {
    let sectionForAnimation = document.querySelector(".section2 .images")
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let leftImage = document.querySelector(".slideFromLeft")
    let rightImage = document.querySelector(".slideFromRight")
    
    if(sectionPosition < screenPosition) {
    leftImage.classList.add("animated")
    rightImage.classList.add("animated")
    }
}
*/