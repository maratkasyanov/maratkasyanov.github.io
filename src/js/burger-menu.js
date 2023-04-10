const btnburger = document.querySelector('.nav-menu__burger')
const body = document.getElementById('opacity-js')


btnburger.onclick = function qq() {
  const sidebar = document.querySelector('.container')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  console.log(style.display)
  const left = document.querySelector('.left')

if (style.display == 'none' && width < 1120) {
  console.log('зашл\ел')
  document.getElementById('leftt').style.display = 'block'
  document.getElementById('js').style.display = 'flex';
  document.getElementById('js').style.justifyContent='space-around'
  document.getElementById('js').style.flexDirection = 'column';
  document.getElementById('js').style.marginTop = '-110px'
  document.getElementById('js').style.width = '320px'
  document.getElementById('js').style.position = 'absolute'
  document.getElementById('hidden-js').style.overflowY = 'hidden'
  document.getElementById('opacity-js').style.opacity = '0.2'
  document.getElementById('opacity-jss').style.opacity = '0.2'
  document.getElementById('js').style.zIndex = '1'
}

}

const zakr = body.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.container')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  console.log(style.display)
  const left = document.querySelector('.left')
  if(style.display == 'flex' && width < 1120){
    const body = document.getElementById('opacity-js')
  const zakr = body.addEventListener('click', function (event) {
    console.log('Произошло событие', event.type)
    document.getElementById('leftt').style.display = 'none'
    document.getElementById('js').style.display = 'none';

    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('js').style.zIndex = '0'

    console.log('4')
    location.reload();
  })
  let boaady = document.getElementById('opacity-jss')
  let zakr2 = boaady.addEventListener('click', function (event) {
    console.log('Произошло событие', event.type)
    console.log('Произошло событие', event.type)
    document.getElementById('leftt').style.display = 'none'
    document.getElementById('js').style.display = 'none';

    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('js').style.zIndex = '0'
    console.log('3')
    location.reload();
  })
  }


})



let boaady = document.getElementById('opacity-jss')
let zakr2 = boaady.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.container')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  if(style.display == 'flex' && width < 1120){
    const body = document.getElementById('opacity-js')
  const zakr = body.addEventListener('click', function (event) {
    console.log('Произошло событие', event.type)
    document.getElementById('leftt').style.display = 'none'
    document.getElementById('js').style.display = 'none';

    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('js').style.zIndex = '0'

console.log('1')
location.reload();
  })
  let boaady = document.getElementById('opacity-jss')
  let zakr2 = boaady.addEventListener('click', function (event) {
    console.log('Произошло событие', event.type)
    console.log('Произошло событие', event.type)
    document.getElementById('leftt').style.display = 'none'
    document.getElementById('js').style.display = 'none';

    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('js').style.zIndex = '0'

    console.log('2')
    location.reload();
  })

  }

})


const vv = document.querySelector('.burger-menu__btn-left')
vv.addEventListener('click', function (event) {
  console.log('Произошло событие', event.type)
  document.getElementById('leftt').style.display = 'none'
  document.getElementById('js').style.display = 'none';

  document.getElementById('hidden-js').style.overflowY = 'visible'
  document.getElementById('opacity-js').style.opacity = '1'
  document.getElementById('opacity-jss').style.opacity = '1'
  document.getElementById('js').style.zIndex = '0'

console.log('1')
location.reload();
})



const call = document.getElementById('call-btn')
call.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.feedback-side-container-call')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  if (style.display == 'none') {
    if (width > 1440) {
      document.getElementById('btn-1440-call').style.display = 'flex'
    }
    document.getElementById('container-call').style.display = 'flex'
    document.getElementById('container-call').style.zIndex = '11'
    document.getElementById('hidden-js').style.overflowY = 'hidden'
    document.getElementById('hidden-js').style.overflowY = 'hidden !important'
    document.getElementById('hidden-js').style.overflowX = 'hidden !important'
    document.getElementById('opacity-js').style.opacity = '0.2'
    document.getElementById('opacity-jss').style.opacity = '0.2'
    document.getElementById('caption').style.opacity = '0.2'
    document.getElementById('js').style.opacity = '0.2'
  }

})


const closeCall = document.querySelector('.burger-menu-feedback__close')
const closeCall2 = document.getElementById('btn-1440-call')
closeCall.addEventListener('click', function (event) {
  document.getElementById('container-call').style.display = 'none'
  document.getElementById('container-call').style.zIndex = '0'
  document.getElementById('zaplatka').style.display = 'none'
  document.getElementById('hidden-js').style.overflowY = 'visible'
  document.getElementById('hidden-js').style.overflowX = 'visible'
  document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('caption').style.opacity = '1'
    document.getElementById('js').style.opacity = '1'
    location.reload();

})
closeCall2.addEventListener('click',function (event) {
  document.getElementById('container-call').style.display = 'none'
   document.getElementById('container-call').style.zIndex = '0'
   document.getElementById('btn-1440-call').style.display = 'none'
   document.getElementById('zaplatka').style.display = 'none'
   document.getElementById('hidden-js').style.overflowY = 'visible'
   document.getElementById('hidden-js').style.overflowX = 'visible'
   document.getElementById('opacity-js').style.opacity = '1'
   document.getElementById('opacity-jss').style.opacity = '1'
   document.getElementById('caption').style.opacity = '1'
   document.getElementById('js').style.opacity = '1'
   location.reload();
})


const feedback2 = document.getElementById('feedback-btn')
feedback2.addEventListener('click',function (event) {
  const sidebar = document.querySelector('.feedback-side-container')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  if (style.display == 'none') {
    if (width > 1440) {
      document.getElementById('btn-1440-feedback').style.display = 'flex'
    }
    document.getElementById('container-feedback').style.display = 'flex'
    document.getElementById('container-feedback').style.zIndex = '11'

    document.getElementById('hidden-js').style.overflowY = 'hidden'
    document.getElementById('opacity-js').style.opacity = '0.2'
    document.getElementById('opacity-jss').style.opacity = '0.2'
    document.getElementById('hidden-js').style.overflowY = 'hidden !important'
    document.getElementById('hidden-js').style.overflowX = 'hidden !important'
    document.getElementById('caption').style.opacity = '0.2'
    document.getElementById('js').style.opacity = '0.2'
  }
})
const closeFeed = document.getElementById('btn-1440-feedback')
closeFeed.addEventListener('click',function wq(event) {
  document.getElementById('container-feedback').style.display = 'none'
  document.getElementById('zaplatka').style.display = 'none'
  document.getElementById('container-feedback').style.zIndex = '0'
  document.getElementById('btn-1440-feedback').style.display = 'none'
  document.getElementById('hidden-js').style.overflowY = 'visible'
  document.getElementById('hidden-js').style.overflowX = 'visible'
  document.getElementById('opacity-js').style.opacity = '1'
  document.getElementById('opacity-jss').style.opacity = '1'
  document.getElementById('caption').style.opacity = '1'
  document.getElementById('js').style.opacity = '1'
  location.reload();
})
const closeFeed2 = document.querySelector('.burger-menu-call__close')
closeFeed2.addEventListener('click',function wq(event) {
  document.getElementById('zaplatka').style.display = 'none'
  document.getElementById('container-feedback').style.display = 'none'
  document.getElementById('container-feedback').style.zIndex = '0'
  document.getElementById('btn-1440-feedback').style.display = 'none'
  document.getElementById('hidden-js').style.overflowY = 'visible'
  document.getElementById('hidden-js').style.overflowX = 'visible'
  document.getElementById('opacity-js').style.opacity = '1'
  document.getElementById('opacity-jss').style.opacity = '1'
  document.getElementById('caption').style.opacity = '1'
  document.getElementById('js').style.opacity = '1'
  location.reload();
})



let boaady2 = document.querySelector('.nav-menu')
let zakr22 = boaady2.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.feedback-side-container')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  if(style.display == 'flex'){
    const body = document.getElementById('opacity-js')
  const zakr222 = body.addEventListener('click', function (event) {
    document.getElementById('zaplatka').style.display = 'none'
    document.getElementById('container-feedback').style.display = 'none'
    document.getElementById('container-feedback').style.zIndex = '0'
    document.getElementById('btn-1440-feedback').style.display = 'none'
    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('hidden-js').style.overflowX = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('caption').style.opacity = '1'
    document.getElementById('js').style.opacity = '1'



  })
  let boaady2 = document.querySelector('.ob')
  let zakr22 = boaady2.addEventListener('click', function (event) {

    document.getElementById('container-feedback').style.display = 'none'
    document.getElementById('zaplatka').style.display = 'none'
    document.getElementById('container-feedback').style.zIndex = '0'
    document.getElementById('btn-1440-feedback').style.display = 'none'
    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('hidden-js').style.overflowX = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('caption').style.opacity = '1'
    document.getElementById('js').style.opacity = '1'


  })

  }

})

let boaady22 = document.querySelector('.nav-menu')
let zakr222 = boaady22.addEventListener('click', function (event) {
  const sidebar = document.querySelector('.feedback-side-container-call')
  let width = screen.width;
  let style = window.getComputedStyle(sidebar)
  if(style.display == 'flex' ){
    const body = document.getElementById('opacity-js')
  const zakr222 = body.addEventListener('click', function (event) {
    document.getElementById('zaplatka').style.display = 'none'
    document.getElementById('container-call').style.display = 'none'
    document.getElementById('container-call').style.zIndex = '0'
    document.getElementById('btn-1440-feedback').style.display = 'none'
    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('hidden-js').style.overflowX = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('caption').style.opacity = '1'
    document.getElementById('js').style.opacity = '1'




  })
  let boaady2 = document.querySelector('.ob')
  let zakr22 = boaady2.addEventListener('click', function (event) {

    document.getElementById('container-call').style.display = 'none'
    document.getElementById('zaplatka').style.display = 'none'
    document.getElementById('container-call').style.zIndex = '0'
    document.getElementById('btn-1440-feedback').style.display = 'none'
    document.getElementById('hidden-js').style.overflowY = 'visible'
    document.getElementById('hidden-js').style.overflowX = 'visible'
    document.getElementById('opacity-js').style.opacity = '1'
    document.getElementById('opacity-jss').style.opacity = '1'
    document.getElementById('caption').style.opacity = '1'
    document.getElementById('js').style.opacity = '1'


  })

  }

})
