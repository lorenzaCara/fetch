const loading = document.querySelector('#photos .loading');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const imgsDiv = document.querySelector('#photos');
        loading.remove();

        photos.forEach(photo => {
            const div = document.createElement('div');
            div.classList.add('col');
            imgsDiv.appendChild(div);
            
            //(left side)
            const divTitles = document.createElement('div');
            divTitles.classList.add('title-container');
            div.appendChild(divTitles);
            
            const title = document.createElement('p');
            title.textContent = photo.title;
            divTitles.appendChild(title);
            
            //(right side)
            const divImg = document.createElement('div');
            divImg.classList.add('image-container');
            div.appendChild(divImg);

            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            divImg.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        loading.textContent = "Error";
    });
