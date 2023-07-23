// contentscript

console.log('hello from content script')

// display a custom nav with js where the translated script will be displayed
  let ytBody = document.getElementsByTagName('body')
  let ytContent = document.getElementById('content')
  let mastHeadContainer = document.getElementById('masthead-container')
  let customNav = `
  <style>
  .navbar {
    background-color: #f2f2f2;
    padding: 10px;
  }
  
  .navbar-text {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .navbar-line {
    margin-right: auto;
  }
  
  .navbar-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
  }  </style>
  <nav class="navbar">
  <div class="navbar-text">
    <span class="navbar-line">This is the sample line that will appear, Tamin</span>
    <button class="navbar-button">Button</button>
  </div>
  </nav>
 `

    // Insert the new element as the top child
    

    let ytInserter = function(){

      // console.log("inside function", ytContent);
      // if (ytBody.firstChild) {

      //   ytBody.insertBefore(customNav, ytBody.firstChild);
      // } else {
      //   //  ytBody.appendChild(customNav);
      // }
      ytBody.innerHTML += customNav
    }
    console.log("Page fully loaded");
    // ytInserter()
    setTimeout(ytInserter, 5000)


// ytp-caption-window-container

let captonContainer = document.getElementById('ytp-caption-window-container')

let checkCaptionChange = function(){
  if(captonContainer.hasChildNodes()){
    // scan the child elements for content and translate by word
  } else{
    
  }
}

// let sample = function () {
//   console.log('every second')
// }

// setInterval(sample, 100)