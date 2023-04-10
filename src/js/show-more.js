const btn = document.querySelector('.show-more__btn')
const btn2 = document.querySelector('.show-more__btn-repaire')
const ShowTxt = document.querySelector('.read-more')
 
  btn.onclick = function ddd(){
    const disNone = document.querySelectorAll('.none')
    const disNone2 = document.querySelectorAll('.none-1120')
    let txt = document.querySelector('.show-more__btn-txt')
    let width = screen.width;
    let stylenone =  window.getComputedStyle(disNone[0]);
    let stylenone2 =  window.getComputedStyle(disNone2[0]);
    if (stylenone.display == 'none' && stylenone2.display == 'none') {
    document.getElementById("myDIV3").style.display = "grid";
    document.getElementById("myDIV4").style.display = "grid";
    document.getElementById("myDIV5").style.display = "grid";
    document.getElementById("myDIV1").style.display = "grid";
    document.getElementById("myDIV2").style.display = "grid";
    document.getElementsByClassName('show-more__btn-txt')[0].textContent = "Скрыть";
    } 
    else if(stylenone.display == 'none'){
      document.getElementById("myDIV3").style.display = "grid";
      document.getElementById("myDIV4").style.display = "grid";
      document.getElementById("myDIV5").style.display = "grid";
      document.getElementById("myDIV1").style.display = "grid";
      document.getElementById("myDIV2").style.display = "grid";
      document.getElementsByClassName('show-more__btn-txt')[0].textContent = "Скрыть";
    }
    else if(stylenone2.display == 'none'){
    document.getElementById("myDIV1").style.display = "grid";
    document.getElementById("myDIV2").style.display = "grid";
    document.getElementsByClassName('show-more__btn-txt')[0].textContent = "Скрыть";
    }
    else if(stylenone.display == 'grid' && width > 1119){
      document.getElementById("myDIV3").style.display = "none";
      document.getElementById("myDIV4").style.display = "none";
      document.getElementById("myDIV5").style.display = "none";
      document.getElementsByClassName('show-more__btn-txt')[0].textContent = "Показать все";
      location.reload();
    }
    else if(stylenone.display == 'grid' && width < 1119){
      document.getElementById("myDIV3").style.display = "none";
      document.getElementById("myDIV4").style.display = "none";
      document.getElementById("myDIV5").style.display = "none";
      document.getElementById("myDIV1").style.display = "none";
      document.getElementById("myDIV2").style.display = "none";
      document.getElementsByClassName('show-more__btn-txt')[0].textContent = "Показать все";
      location.reload();
    }
  }
  btn2.onclick = function ss() {
    const wew = document.getElementsByClassName('show-more__btn-repaire')[0].textContent
    let width = screen.width;
    const qqw = document.getElementById('hidden-1120-3')
    const stylr = window.getComputedStyle(qqw);
    if (width > 767 && stylr.display =='none') {
      document.getElementById('hidden-1120').style.display = 'flex'
      document.getElementById('hidden-1120-2').style.display = 'flex'
      document.getElementById('hidden-1120-3').style.display = 'flex'
      document.getElementById('js-wrap').style.flexWrap  = 'wrap'
      document.getElementsByClassName('show-more__btn-repaire')[0].textContent = "Скрыть";
      const wew = document.getElementsByClassName('show-more__btn-repaire')[0].textContent
      console.log(stylr.display)
      console.log(qqw)
    }
    else if (stylr.display == 'flex'){
      let width = screen.width;
      console.log('зашел')
      if (width<1120 && width>767) {
        document.getElementById('hidden-1120').style.display = 'none'
        document.getElementById('hidden-1120-2').style.display = 'none'
        document.getElementById('hidden-1120-3').style.display = 'none'
        location.reload();
      }
      else if(width>1120){
        document.getElementById('hidden-1120-2').style.display = 'none'
        document.getElementById('hidden-1120-3').style.display = 'none'
        location.reload();
      }
    }

  }


  ShowTxt.onclick = function () {
    let width = screen.width;
   let wwww = document.getElementById("height-txt").style.height
  let znach =  document.getElementsByClassName('read-more__txt')[0].textContent
if (znach=='Читать далее') {
  document.getElementById("height-txt").style.height = 'auto'
  document.getElementsByClassName('read-more__txt')[0].textContent = "Скрыть";
}
else if(znach=='Скрыть' && width>768){
  document.getElementById("height-txt").style.height = '160px'
  document.getElementsByClassName('read-more__txt')[0].textContent = "Читать далее";
}  
else if(znach=='Скрыть' && width<768){
  document.getElementById("height-txt").style.height = '81px'
  document.getElementsByClassName('read-more__txt')[0].textContent = "Читать далее";
}  
  }


  console.log('Я РАБОТАЮ')