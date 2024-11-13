const names = document.querySelector('#product_name');

const data = [
    {
      "id": 1,
      "image": "/images/pmr1.jpg"
    },
    {
      "id": 2,
      "image": "/images/pmr2.jpg"
    },
    {
      "id": 3,
      "image": "/images/pmr3.jpg"
    },
    {
      "id": 4,
      "image": "/images/pmr4.jpg"
    }
  ]

  const product_name = data.map((e)=>{
    return `
    <a href="#">
    <img src=${e.image} />
    </a>
    `
  })

names.innerHTML = product_name.join("")

//   <h2>${e.name}</h2>
//   <h4>${e.price}</h4>
//   <p>${e.description}</p>