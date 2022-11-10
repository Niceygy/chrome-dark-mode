function darkPage() {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = 'white';
  }
  
  chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: darkPage
      });
    }
  });