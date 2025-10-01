const names = document.querySelector('#product_name');

const data = [
    {
      "id": 1,
      "image": "/images/pmr15.jpg"
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
    },
    {
      "id": 5,
      "image": "/images/gallery1.jpg"
    },
    {
      "id": 6,
      "image": "/images/gallery2.png"
    },
    {
      "id": 7,
      "image": "/images/pmr7.jpg"
    },
    {
      "id": 8,
      "image": "/images/pmr8.jpg"
    },
    {
      "id": 9,
      "image": "/images/pmr13.jpg"
    },
    {
      "id": 10,
      "image": "/images/pmr10.gif"
    },
    {
      "id": 11,
      "image": "/images/pmr11.jpg"
    },
    {
      "id": 12,
      "image": "/images/pmr14.jpg"
    },
  ]

  const product_name = data.map((e)=>{
    return `
    <div href="#">
    <img src=${e.image} />
    </div>
    `
  })

names.innerHTML = product_name.join("")

//   <h2>${e.name}</h2>
//   <h4>${e.price}</h4>
//   <p>${e.description}</p>