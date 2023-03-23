document.addEventListener("DOMContentLoaded", function () {
  var openPageButton = document.getElementById("openPageButton");
  openPageButton.addEventListener("click", function () {
    fetch(chrome.runtime.getURL("data.json"))
      .then((response) => response.json())
      .then((data) => {
        var url = data.exampleUrl || "https://www.example.com";
        chrome.tabs.create({ url: url }, function(tab) {
          if (chrome.runtime.lastError) {
            console.error("Error occurred:", chrome.runtime.lastError);
          } else {
            console.log("Tab created with URL:", url);
            chrome.tabs.executeScript(tab.id, { code: 'document.getElementById("button-test").click();' });
          }
        });
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  });
});
