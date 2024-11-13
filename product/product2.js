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
      "image": "/images/simulation3.png"
    },
    {
      "id": 4,
      "image": "/images/simulation4.png"
    }
  ]

  const product_name2 = data2.map((e)=>{
    return `
    <a href="#">
    <img src=${e.image} />
    </a>
    `
  })

names2.innerHTML = product_name2.join("")