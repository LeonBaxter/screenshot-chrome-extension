const snipButton = document.getElementById('snip');
const previewImg = document.getElementById('preview');

snipButton.addEventListener('click', () => {
  if (typeof chrome !== 'undefined') {
    chrome.tabs.captureVisibleTab((screenshotUrl) => {
      previewImg.src = screenshotUrl;
      const link = document.createElement('a');
      link.href = screenshotUrl;
      link.download = 'screenshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } else if (typeof browser !== 'undefined') {
    browser.tabs.captureVisibleTab().then((screenshotUrl) => {
      previewImg.src = screenshotUrl;
      const link = document.createElement('a');
      link.href = screenshotUrl;
      link.download = 'screenshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  } else {
    console.log('Neither chrome nor browser object is defined.');
  }
});
