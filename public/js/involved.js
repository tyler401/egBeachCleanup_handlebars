

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

const submitBtn = $("#submit");
const nameInput = $("#name");
const ageInput = $("#age");
const resultDiv = $("#result");

submitBtn.on("click", function() {
  const name = nameInput.val();
  const age = Number(ageInput.val());

  const user = {
    name: name,
    age: age
  };

  if (user.age >= 16) {
    resultDiv.html(`${user.name}, you are ${user.age} so you can join us! `);
  } else {
    resultDiv.html(`Sorry ${user.name}, you are not old enough to join us. `);
  }
});
