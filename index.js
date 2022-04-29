/* ## Topic?
After a lot of thinking we realized that it would be great to work with something known by most of us, and the answer was clear: __BEER__.
Luckily, we _do_ know a public API about this topic, called [PUNK API](https://punkapi.com). The website has the necessary documentation to work with it.
## App needs
Using the data from the provided API, we need the Web app to:
* Display a list of 10 beers with their {
name:
date:
image:
description:
}
* Implement a delete button to delete the beer on your list
* BONUS Add a search bar to search for a beer based on it's title */

const body = document.querySelector('body');
const btn = document.querySelector('#remove');
const searchBar = document.querySelector('#searchBar');
const arrayForSearch = [];

async function getdata() {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const result = await response.json();
    console.log(result);
    const array = result.slice(1, 10)
    console.log(array);

    array.map((e) => {
        const li = document.createElement('li');
        li.textContent = e.name + 'la data ' + e.first_brewed;
        body.appendChild(li);

        const image = document.createElement('img');
        image.src = e.image_url;

        body.appendChild(image);

        const description = document.createElement('span');
        description.innerHTML = e.description;
    })
    btn.addEventListener('click', () =>{
        body.lastChild.remove();
    })


    searchBar.addEventListener('keyup', (e) =>{
        const stringSearched = e.target.value;
        console.log(stringSearched);

        const filter = arrayForSearch.filter((array) => {
          return(b.name.includes(stringSearched));  
        });
        array(filter)
    })
}

getdata()

