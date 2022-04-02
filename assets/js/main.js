const education = document.getElementById('education');
const experience = document.getElementById('experience');

const experienceCss = document.querySelector('.experience');

const educationCss = document.querySelector('.education');

education.addEventListener('click', (e) => {

    experience.classList.remove('tab-active');
    education.classList.add('tab-active');


    experienceCss.style.visibility = 'hidden';
    educationCss.style.visibility = 'visible';

    experienceCss.style.display = 'none';
    educationCss.style.display = 'block';

    console.log(e.target);
});

experience.addEventListener('click', (e) => {

    education.classList.remove('tab-active');
    experience.classList.add('tab-active');

    educationCss.style.visibility = 'hidden';
    experienceCss.style.visibility = 'visible';

    educationCss.style.display = 'none';
    experienceCss.style.display = 'block';

});