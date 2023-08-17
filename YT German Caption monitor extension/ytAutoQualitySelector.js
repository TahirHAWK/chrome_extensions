// automatically selects 480p as default quality
console.log('yt auto quality selector', window.location.href)
function select480p(){
    let qualityButtons = document.getElementsByClassName('ytp-menuitem-label')
    for(i=0; i<qualityButtons.length; i++){
        if(qualityButtons[i].innerText.includes('480')){
          qualityButtons[i].click()
          i = qualityButtons.length
        }
    }
  
  }
  
  // sets the video quality to 480p
  function set480p(){
    document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
    document.getElementsByClassName('ytp-menu-label-secondary')[0].click()
    setTimeout(select480p, 1000)
  }

  function checkIfVideoLinkChanged(e){
  console.log(window.location.href, e.target.tagName)
  }

  //   declaring the function after loading first time
  setTimeout(set480p, 1000)
  
  // document.addEventListener('click', (e)=> {
  //   checkIfVideoLinkChanged(e)
  // })



