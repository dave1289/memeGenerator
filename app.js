const memeInfo = document.querySelector('#info-submission');
const memeSpace = document.querySelector('#meme-space')
const upperText = document.querySelector('input[name="top-text"]');
const lowerText = document.querySelector('input[name="btm-text"]');
const imgInput = document.querySelector('input[name="img"]');

function createMeme (uptxt, bttxt, img) {
    const newMeme = document.createElement('div');
    const memeTopTxt = document.createElement('p');
    const memeBtmTxt = document.createElement('p');
    const memeImg = img;
    newMeme.classList.add('meme')
    memeTopTxt.textContent = uptxt;
    memeBtmTxt.textContent = bttxt;
    memeTopTxt.setAttribute('id', 'top-text')
    newMeme.style.backgroundImage = `url(${memeImg})`
    newMeme.appendChild(memeTopTxt);
    newMeme.appendChild(memeBtmTxt);
    memeSpace.appendChild(newMeme)
}


memeInfo.addEventListener('submit', function(e) {
    e.preventDefault();
    memeTopTxt = upperText.value;
    memeBtmTxt = lowerText.value;
    memeImg = imgInput.value;
    upperText.value = '';
    lowerText.value = '';
    imgInput.value = '';
    createMeme(memeTopTxt, memeBtmTxt,  memeImg)
})

memeSpace.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target.classList.contains('meme')) {
        const deadMeme = e.target;
        deadMeme.remove();
    }
})