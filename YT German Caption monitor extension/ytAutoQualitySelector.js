// automatically selects 480p as default quality
let lastURL = [window.location.href]

// .getAttribute('aria-expanded'), || qualityButtons[i].innerText.includes('720')
// declaration of different functions

// this functions chooses the 480p option out of the other video qualities
function select480p(){
  let qualityButtons = document.getElementsByClassName('ytp-menuitem-label')
  for(i=0; i<qualityButtons.length; i++){
      if(qualityButtons[i].innerText.includes('480') ){
        qualityButtons[i].click()
        i = qualityButtons.length
      }
  }

}

// check if the settings button is previously clicked or not
function checkSettingsButtonClickStatus(){
  if(document.getElementsByClassName('ytp-button ytp-settings-button')[0].getAttribute('aria-expanded') == 'true'){
    document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
  }
}

// sets the video quality to 480p
function set480p(){
  document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
  document.getElementsByClassName('ytp-menu-label-secondary')[0].click()
  setTimeout(select480p, 1000)
}

function checkIfVideoLinkChanged(e){
  if(window.location.href !== lastURL[0]){
    lastURL.pop()
    lastURL.push(window.location.href)
    checkSettingsButtonClickStatus()
    setTimeout(set480p, 350)
  } else{
    return false
  }
}




// calling of the functions
// global area, only works if the url is from youtube
if(window.location.href.includes('youtube')){
  // checking if the site we are on is youtube or not
  

    setTimeout(set480p, 1000)
    setInterval(checkIfVideoLinkChanged, 10*1000);
    //   declaring the function after loading first time
    

}



