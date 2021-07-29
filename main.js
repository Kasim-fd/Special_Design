// The Settings Box

const settingsToggle = document.querySelector('.gear-box');
const settingsGear = document.querySelector('.fa-gear');
const settingsBox = document.querySelector('.settings-box');

settingsToggle.onclick = () => {
    settingsBox.classList.toggle('open');
    settingsGear.classList.toggle('fa-spin');
}

// The Color Swicher

const colorsLi = document.querySelectorAll('.swicher li');

colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        if (background == false) {
            clearInterval(randomLanding);
            randomBackground().remove();
        } else {
            clearInterval(randomLanding);
            clearInterval(randomImg);
            randomBackground().remove();
        }
    });
});

// The Image Swicher

const imagesLi = document.querySelectorAll('.swicher-img li');

imagesLi.forEach(image => {
    image.addEventListener('click', () => {
        for (i = 0; i < imagesLi.length; i++) {
            if (image.className == `0${i}`) {
                landingPage.style.backgroundImage = `url(imgs/0${i}.png)`;
            }
        }

        clearInterval(randomLanding);
        background = true;
        console.log(background);

        if (background === true) {
            clearInterval(randomImg);
        } else {
            return false
        }
    });
});

// The Bergur Mneu Swicher

const btnsContainer = document.querySelector('.buttons');
const btns = document.querySelectorAll('.buttons span');
const okBtn = document.querySelector('.ok');
const canselBtn = document.querySelector('.cansel');

btns.forEach(span => {
    span.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });

        e.target.classList.add('active');
    });
});

okBtn.addEventListener('click', () => {
    navBar.classList.add('bergur');
    menu.classList.add('block');
});

canselBtn.addEventListener('click', () => {
    navBar.classList.remove('bergur');
    menu.classList.remove('block');
});

// The Nav Bullets

const allBullets = document.querySelectorAll('.nav-bullets .bullet');

allBullets.forEach(bullet => {
    bullet.addEventListener('click', (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// The Bergur Menu

const menu = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar');

menu.onclick = () => {
    navBar.classList.toggle('active');
    menu.classList.toggle('open');
};

// The Coloring & Change Background

const landingPage = document.querySelector('.landing-page');
const activeLink = document.querySelector('.active');
const hover = document.querySelectorAll('.landing-page .header a');
const span = document.getElementById('span');
let colorArray = ['#03a9f4', '#009688', '#f44336', '##ffc107', '#ff9800'];
let hoverArray = Array.from(hover);

landingPage.style.backgroundImage = `url(imgs/00.png)`;

randomLanding = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 5);
    landingPage.style.backgroundImage = `url(imgs/0${randomNumber}.png)`;

    setTimeout(() => {
        document.documentElement.style.setProperty('--main-color', colorArray[randomNumber]);
    }, 0);
}, 10000);

let background = false;

function randomBackground() {
    randomImg = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 5);
        landingPage.style.backgroundImage = `url(imgs/0${randomNumber}.png)`;
    }, 10000);
}

// The Gallery Popup

let galleryImg = document.querySelectorAll('.gallery img');

galleryImg.forEach(img => {
    img.addEventListener('click', () => {
        let overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);

        let popupBox = document.createElement('div');
        popupBox.className = 'popup-box';
        
        let popupH2 = document.createElement('h2');
        let popupH2Text = document.createTextNode(img.alt);
        popupH2.appendChild(popupH2Text);

        let popupImg = document.createElement('img');
        popupImg.src = img.src;

        let popupP = document.createElement('p');
        let popupPText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore, recusandae maiores perferendis.');
        popupP.appendChild(popupPText);

        let popupOk = document.createElement('button');
        let popupOkText = document.createTextNode('Ok');
        popupOk.appendChild(popupOkText);


        popupBox.appendChild(popupH2);
        popupBox.appendChild(popupImg);
        popupBox.appendChild(popupP);
        popupBox.appendChild(popupOk);
        document.body.appendChild(popupBox);

        popupOk.addEventListener('click', () => {
            popupBox.remove();
            overlay.remove();
        });

        overlay.addEventListener('click', () => {
            popupBox.remove();
            overlay.remove();
        });
    });
});

// The Testimonials Slider

const tsBoxes = document.querySelectorAll('.testimonails .ts-box');
const prevBtn = document.querySelector('.controls .prev');
const nextBtn = document.querySelector('.controls .next');
let counter = 0;

tsBoxes.forEach(box => box.classList.remove('active'));
tsBoxes[counter].classList.add('active');

const nextSlide = () => {
    if (counter >= tsBoxes.length - 1) {
        counter = -1;
    }
    counter++;

    tsBoxes.forEach(box => box.classList.remove('active'));
    tsBoxes[counter].classList.add('active');
};

nextBtn.addEventListener('click', () => {
    nextSlide();

    clearInterval(nextTimer);
    next();
});

const prevSlide = () => {
    if (counter <= 0) {
        counter = tsBoxes.length;
    }
    counter--;

    tsBoxes.forEach(box => box.classList.remove('active'));
    tsBoxes[counter].classList.add('active');
};

prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(nextTimer);
    next();
});

const next = () => {
    nextTimer = setInterval(() => {
        nextSlide();
    }, 7000);
};

next();

// The Progress Animation

const progressOne = document.querySelector('.progress1 span');
const progressTwo = document.querySelector('.progress2 span');
const progressThree = document.querySelector('.progress3 span');

const skillBox1 = document.querySelector('.one');
const skillBox2 = document.querySelector('.two');
const skillBox3 = document.querySelector('.three');

const leftImg = document.querySelectorAll('img.left');
const middleImg = document.querySelectorAll('img.middle');
const rightImg = document.querySelectorAll('img.right');

const topFeats = document.querySelectorAll('.feat-box.top');
const bottomFeats = document.querySelectorAll('.feat-box.bottom');

const contact1 = document.querySelector('form .left');
const contact2 = document.querySelector('form .right');

const about = document.querySelector('.about');

window.onscroll = function () {
    if (window.pageYOffset >= 350) {
        about.classList.add('full-opacity');
    }

    if (window.pageYOffset >= 650) {
        skillBox1.classList.add('zero');
        setTimeout(() => {
            skillBox2.classList.add('zero');
        }, 400);

        setTimeout(() => {
            skillBox3.classList.add('zero');
        }, 800);
    }

    if (window.pageYOffset > 875) {
        progressOne.style.width = '85%';
        progressTwo.style.width = '90%';
        progressThree.style.width = '65%';
    }

    if (window.pageYOffset >= 1300) {
        leftImg.forEach(img => img.classList.add('zero'));
        middleImg.forEach(img => img.classList.add('zero'));
        rightImg.forEach(img => img.classList.add('zero'));
    }

    if (window.pageYOffset >= 1950) {
        topFeats.forEach(feat => feat.classList.add('zero'));
        bottomFeats.forEach(feat => feat.classList.add('zero'));
    }

    if (window.pageYOffset >= 2773) {
        tsBoxes.forEach(box => box.classList.add('zero'));
        prevBtn.classList.add('zero');
        nextBtn.classList.add('zero');
    }

    if (window.pageYOffset >= 3200) {
        contact1.classList.add('middle');
        contact2.classList.add('middle');
    }
}