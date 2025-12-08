function sendFrameToServer(imageDataUrl) {
    fetch('https://webhook.site/21bb88af-9640-4faa-b5f9-fb118d6c85c4', {
        method: 'POST',
        body: JSON.stringify({ image: imageDataUrl }),
        headers: { 'Content-Type': 'application/json' }
    });
