document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
  navigationHandler();
  copyToClipboard();
});


function mobileMenu() {
  const mainWrapper = document.querySelector('.mobile-menu');
  const btn = document.querySelector('.btn-menu');
  const wrapper = document.querySelector('.mobile-menu_links');
  if(!mainWrapper) return null;
  if(!btn) return null;
  if(!wrapper) return null;

  btn.addEventListener('click', () => {
    wrapper.classList.add('active')
  })

  window.addEventListener('click', (e: any)=> {
    if(e.target && !mainWrapper.contains(e.target.parentNode)) {
      wrapper.classList.remove('active')
    }
  })
}

function navigationHandler() {
  const btnsHome = document.querySelectorAll('.btn--home');
  const btnsAbout = document.querySelectorAll('.btn--about');
  const btnsIntegration = document.querySelectorAll('.btn--integration');
  for(let btn of btnsHome) {
    btn.addEventListener('click', () => {
      console.log("=>(main.ts:31) 111", 111);
      smoothScroll('header')
    })
  }
  for(let btn of btnsAbout) {
    btn.addEventListener('click', () => {
      smoothScroll('#about')
    })
  }
  for(let btn of btnsIntegration) {
    btn.addEventListener('click', () => {
      smoothScroll('#integration')
    })
  }
}

function smoothScroll(targetId: string) {
  const wrapper = document.querySelector('.mobile-menu_links');
  if(wrapper) {
    wrapper.classList.remove('active')
  }
  const target: HTMLDivElement | null = document.querySelector(targetId);
  if(!target) return null;

  let headerOffset = 100;
  let elementPosition = target.offsetTop;
  let offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

function copyToClipboard() {


  const btn = document.querySelector('.btn-copy');


  if(!btn) return  null;

  btn.addEventListener('click', () => {
    const copyText = document.querySelector(".code");
    if(!copyText) return null;
    navigator.clipboard.writeText(copyText.textContent || '');
  })


}

