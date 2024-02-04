// here we will register the service worker

// if browser supports service workers, it will be registered
if ("serviceWorker" in navigator) {
  // on page load, the code is executed
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(function (registration) {
        // success message
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch(function (error) {
        // error message
        console.error("Service Worker registration failed:", error);
      });
  });
}
