let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const collection = document.querySelector('div#toy-collection');
  const url = 'http://localhost:3000/toys';
  const form = document.querySelector('form.add-toy-form');

  // debugger

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  function renderAllToys() {
    fetch(url)
      .then(res => res.json())
      .then(toys => {
        console.log(toys)
        toys.forEach(toy => {
          renderOneToy(toy)
        })
      })
  }


  function renderOneToy(toy) {
    const cardDiv = document.createElement('div')
    cardDiv.dataset.id = toy.id
    cardDiv.dataset.chicken = "rocks"

    cardDiv.classList.add('card')

    cardDiv.innerHTML = `<h2>${toy.name}</h2>
        <img src=${toy.image} class="toy-avatar" />
        <p>${toy.likes} Likes </p>
        <button class="like-btn">Like <3</button>`

    collection.append(cardDiv)

    // closure approach for like deliverable
    // const button = cardDiv.querySelector('button')
    // button.addEventListener('click', event => {
    //   const pTag = cardDiv.querySelector('p')
    //   const likes = parseInt(pTag.textContent) + 1

    //   fetch(`${url}/${cardDiv.dataset.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     // body: JSON.stringify({likes: likes})
    //     body: JSON.stringify({ likes })
    //   })
    //     .then(res => res.json())
    //     .then(updatedToy => {
    //       pTag.textContent = `${updatedToy.likes} Likes`
    //     })

    // })

  }

  function handleSubmitForm(event) {
    event.preventDefault()

    const name = event.target[0].value
    // const name = event.target.name.value
    const image = event.target[1].value
    // const image = event.target.image.value

    // form.reset()
    event.target.reset()

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // body: JSON.stringify({ name: name, image: image, likes: 0 })
      body: JSON.stringify({ name, 
        image, 
        likes: 0, 
        eric: "Likes chicken", 
        michelle: [0,1,2,3] })
    })
      .then(res => res.json())
      .then(newToy => {
        // do something with it
        renderOneToy(newToy) // pessimisitc
      })
  }

  function handleCollectionClick(event) {
    if (event.target.matches('button.like-btn')) {
      const cardDiv = event.target.parentNode
      const pTag = cardDiv.querySelector('p')
      // const pTag = event.target.previousElementSibling
      const likes = parseInt(pTag.textContent) + 1

      fetch(`${url}/${cardDiv.dataset.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        // body: JSON.stringify({likes: likes})
        body: JSON.stringify({ likes })
      })
        .then(res => res.json())
        .then(updatedToy => {
          pTag.textContent = `${updatedToy.likes} Likes`
        })
    }
  }


  // console.log(toyFormContainer.firstElementChild)
  form.addEventListener('submit', handleSubmitForm)
  collection.addEventListener('click', handleCollectionClick)

  renderAllToys()
});
