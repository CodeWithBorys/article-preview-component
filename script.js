const shareBtn = document.querySelector('.share__btn');
const overlay = document.querySelector('.overlay');
const socialBlock = document.querySelector('.share__block');
const body = document.querySelector('body');

shareBtn.addEventListener('click', toggleSocialBlock);
overlay.addEventListener('click', toggleSocialBlock);

function toggleSocialBlock() {
  body.classList.toggle('active');
  socialBlock.classList.toggle('hidden');
}
