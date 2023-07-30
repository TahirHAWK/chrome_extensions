chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message.data, 'hello from popup js');
    document.getElementById('links').innerText = message.data
    sendResponse({ data: "data sent" }); 
});

// chrome.runtime
 
let copyButton = document.getElementById('copy-links')
let text = document.getElementById('links')

function copyContent(){
 
      let text = document.getElementById('links').innerText;
      navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text successfully written to clipboard!");
            copyButton.innerText = 'Content copied to clipboard'
        })
        .catch((error) => {
            console.error("Error writing to clipboard:", error);
  });
   
}


  function arrayToNewLineString(arr) {
    return arr.join('\n');
  }
  


copyButton.addEventListener('click', copyContent)


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { data: "copy-links" }, function(response){
        
        text.innerText = arrayToNewLineString(response)
        console.log(response, arrayToNewLineString(response))
    });
  });


