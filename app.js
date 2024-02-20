const toggle = document.querySelector('.toggle');
const hiddenSection = document.querySelector('.hiddenSection');

const openToggle = () => {
  hiddenSection.classList.toggle('hiddenSection')
}

const closeToggle = (e) => {
  if (!hiddenSection.contains(e.target) && !toggle.contains(e.target)) {
    hiddenSection.classList.add('hiddenSection')
  }
  console.log(hiddenSection.contains(e.target));
}

toggle.addEventListener('click', openToggle);
document.addEventListener('mousedown', closeToggle)
