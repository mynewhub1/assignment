const baseURL = 'https://picsum.photos/v2/list?limit=100';

const App = document.querySelector('#app');

const fetchPhotos = async () => {
  try {
    const response = await fetch(baseURL);
    const photos = await response.json();
    const randomPhoto = await photos[Math.floor(Math.random() * photos.length)];
    const photoUI = `
          <div class="card">
            <img src="${randomPhoto.download_url}" alter="picsum photo" loading="lazy">
            <h2><span>Author name :</span> ${randomPhoto.author}</h2>
            <h4>Photo id : ${randomPhoto.id}</h4>
          </div>
        `;
    App.innerHTML = photoUI;
  } catch (error) {
    console.log(error.message);
  }
};

fetchPhotos();


// //import "./style.css";

// fetch("https://picsum.photos/v2/list?page=2&limit=100")
// .then((response) => response.json())
// .then((listOfPhotos) => {
//   for (let i = 0; i < listOfPhotos.length; i++) {
//     console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
//     document.querySelector(
//       "#app"
//       ).innerHTML += `<img src="${listOfPhotos[i].download_url}"alt= "Random image" />`;
//     }
// });