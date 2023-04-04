const imageContainer = document.querySelector('.image-container');
const description = document.querySelector('#description');


const eventList = document.getElementById('events-list');

const descriptions = [
  'WOOHOOO QUITE THE TURNOUT THIS MORNING 😆😆😆 I get it, it’s freezing. THANKS FOR COMING OUT!!!',
  'Productive cleanup today! Thanks for coming out 💚💙',
  'Every little piece counts'
];

// Loop through all the images and add event listeners
const images = imageContainer.querySelectorAll('img');
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    
    description.textContent = descriptions[index];
  });
});

// Clear cache and reload page in Safari
clearCache();

// Get the events data from the JSON file
fetch('events.json')
  .then(response => response.json())
  .then(events => {
    
    events.forEach(event => {

      const li = document.createElement('li');
      li.classList.add('event');

      const title = document.createElement('h3');
      title.textContent = event.title;
      li.appendChild(title);

      const date = document.createElement('p');
      date.classList.add('date');
      const dateObj = new Date(`${event.date}T${event.time}`);
      const dateString = dateObj.toISOString().replace(/-|:|\.\d+/g, '');
      date.textContent = `${event.date} at ${event.time}`;
      li.appendChild(date);

      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = event.description;
      li.appendChild(description);

      // Add Buttons for google calendar integration.
      const button = document.createElement('button');
      button.textContent = 'Add to Calendar';
      button.addEventListener('click', () => {
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${dateString}/${dateString}`;
        window.open(url, '_blank');
      });
      li.appendChild(button);

      // Add the new list item to the event list
      eventList.appendChild(li);

    });
  })
  .catch(error => console.error(error));


function clearCache() {
  window.caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      window.caches.delete(cacheName);
    });
    console.log('Cache cleared.');
  }).catch(error => {
    console.error(`Error clearing cache: ${error}`);
  });
}

