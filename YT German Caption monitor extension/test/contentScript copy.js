// contentScript.js

// Function to handle changes in the captions
function handleCaptionChange(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.classList.contains('ytp-caption-segment')) {
          const captionText = node.innerText;
          console.log('Caption changed:', captionText);
          // Perform any desired action with the caption text
          // For example, you could send it to your background script
          // using message passing or update a variable accessible to
          // your extension's popup or options page.
        }
      });
    }
  });
}

// Create a new MutationObserver to monitor changes in the captions
const observer = new MutationObserver(handleCaptionChange);

// Find the element that contains the captions
const captionsContainer = document.querySelector('.captions-text span');

// Start observing changes in the captions container
// if (captionsContainer) {
  
  observer.observe(captionsContainer, { childList: true });
// } else {
//   console.log('Captions container not found');
// }
