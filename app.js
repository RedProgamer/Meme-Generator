const generatorBtn = document.getElementById('generate');
const nsfwCheckBox = document.querySelector('.nsfw-check');
const memeImg = document.querySelector('.meme');
const sourceMeme = document.querySelector('.source');

let nonNSFWmemes = ['memes', 'wholesomememes', 'dankmemes', 'animememes', 'terriblefacebookmemes', 'IndianDankMemes'];
let NSFWmemes = ['Hentaimemes','NSFWMemes', 'Memes_Of_The_Dank'];

async function getMemes(type) {
    const result = await fetch(`https://meme-api.herokuapp.com/gimme/${type}`);
    const response = await result.json();

    return response;
}

function operate() {
    if(nsfwCheckBox.checked) {
        const type = NSFWmemes[Math.floor(Math.random() * NSFWmemes.length)];
        getMemes(type).then(response => showImg(response));
    }else {
        const type =  nonNSFWmemes[Math.floor(Math.random() * nonNSFWmemes.length)]
        getMemes(type).then(response => showImg(response));
    }
}

function showImg(img) {
    memeImg.style.display = 'block';
    memeImg.setAttribute('src', img.url);

    sourceMeme.style.display = 'block';
    sourceMeme.setAttribute('href', img.postLink);
}   

generatorBtn.addEventListener('click', operate);