const names2 = document.querySelector('#product_name2');

const data2 = [
    {
      "id": 1,
      "image": "/images/simulation1.png"
    },
    {
      "id": 2,
      "image": "/images/simulation2.png"
    },
    {
      "id": 3,
      "image": "/images/simulation14.png"
    },
    {
      "id": 4,
      "image": "/images/simulation13.png"
    },
    {
      "id": 5,
      "image": "/images/gallery3.png"
    },
    {
      "id": 6,
      "image": "/images/gallery4.jpg"
    },
    {
      "id": 7,
      "image": "/images/simulation7.png"
    },
    {
      "id": 8,
      "image": "/images/simulation8.jpg"
    },
    {
      "id": 9,
      "image": "/images/simulation9.jpg"
    },
    {
      "id": 10,
      "image": "/images/simulation10.jpg"
    },
    {
      "id": 11,
      "image": "/images/simulation11.png"
    },
    {
      "id": 12,
      "image": "/images/simulation12.png"
    },
  ]

  const product_name2 = data2.map((e)=>{
    return `
    <div href="#">
    <img src=${e.image} />
    </div>
    `
  })

names2.innerHTML = product_name2.join("")