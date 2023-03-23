document.addEventListener("DOMContentLoaded", function () {
    var changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", async function () {
      try {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            document.body.style.backgroundColor = "red";
          },
        });
      } catch (e) {
        console.error("Error occurred:", e);
      }
    });
  });
  