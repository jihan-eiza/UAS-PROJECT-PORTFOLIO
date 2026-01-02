/*=============== HOME SPLIT TEXT ===============*/
const { animate, splitText, stagger } = anime

const { chars: chars1 } = splitText('.home__profession-1', { chars: true})
const { chars: chars2 } = splitText('.home__profession-2', { chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2700,
    disableOnInteraction: false, 
  }
});

/*=============== MEDIA TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabsContents.forEach(c => c.classList.remove('media__active'))
    tabs.forEach(t => t.classList.remove('media__active'))

    tab.classList.add('media__active')
    target.classList.add('media__active')
  })
})



const modal = document.getElementById('mediaModal')
const modalContent = modal.querySelector('.media__modal-content')
const closeBtn = modal.querySelector('.media__close')

// Foto
document.querySelectorAll('.media__item').forEach(img => {
  img.onclick = () => {
    modalContent.innerHTML = `<img src="${img.src}">`
    modal.style.display = 'flex'
  }
})

// Video
document.querySelectorAll('.media__video').forEach(video => {
  video.onclick = () => {
    const src = video.dataset.video
    modalContent.innerHTML = `
      <video src="${src}" controls autoplay></video>
    `
    modal.style.display = 'flex'
  }
})

closeBtn.onclick = () => {
  modal.style.display = 'none'
  modalContent.innerHTML = ''
}

// Audio
document.querySelectorAll('.media__audio').forEach(audio => {
  audio.onclick = () => {
    const src = audio.dataset.audio
    modalContent.innerHTML = `
      <audio src="${src}" controls autoplay></audio>
    `
    modal.style.display = 'flex'
  }
})


/*=============== INFORMASI ACCORDION ===============*/
const informasiButtons = document.querySelectorAll('.informasi__button')

informasiButtons.forEach(button => {
    //Add your height to informasi info
    const heightinfo = document.querySelector('.informasi__info')
          heightinfo.style.height = heightinfo.scrollHeight + 'px'
    button.addEventListener('click', () => {
        const informasiCards = document.querySelectorAll('.informasi__card')
        const currentCards = button.closest('.informasi__card')
        const currentInfo = currentCards.querySelector('.informasi__info')
        const isCardsOpen = currentCards.classList.contains('informasi-open')

    informasiCards.forEach(card => {
      card.classList.replace('informasi-open', 'informasi-close')
      const info = card.querySelector('.informasi__info')
      info.style.height = '0'
    })

    if(!isCardsOpen){
      currentCards.classList.replace('informasi-close', 'informasi-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
    //Use the clipboard API to copy text
    navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>' 

        //Restore the original text
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
        }, 2000)
    })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer__year'),
      currentYear = new Date().getFullYear()

//Each year it is update to the current year
textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY

  sections.forEach(section => {
    const id = section.id, // id of each section
          top = section.offsetTop - 50, // Distance from the top edge
          height = section.offsetHeight, // Element height
          link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

    if (!link) return

    link.classList.toggle(
      'active-link',
      scrollY > top && scrollY <= top + height
    )
  })
}

window.addEventListener('scroll', scrollActive)


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/