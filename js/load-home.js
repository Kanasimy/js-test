fetch('http://localhost:3000/data')
  .then((response) => response.json())
  .then((posts) => console.log(posts));
