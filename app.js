const flowers = [{
    image: "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
    name: "Ніжна свіжість",
    flovers: "троянди та лілії",
    price: 445
  },
  {
    image: "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
    name: "Сорбет",
    flovers: "хризантеми та троянди",
    price: 450
  },

  {
    image: "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
    name: "Yellow song",
    flovers: "соняшники та солідаго",
    price: 455
  },
  {
    "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
    "name": "Персиковий нектар",
    "flovers": "лілії та троянди",
    "price": 455
  },
  {
    "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
    "name": "Аврора",
    "flovers": "лілії та троянди",
    "price": 460
  },
  {
    "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
    "name": "Класика кохання",
    "flovers": "червоні троянди",
    "price": 465
  }
]


//   <div class="flowers_card">
//   <img class="frower_card_img" src="bouquet-cart1.png" alt="" />   
//   <div class="flowers_name">Ніжна свіжість: троянди та лілії</div>
//   <div class="flower_price"> 445грн</div>
// </div>



  function createContent(flower) {
        const div = document.createElement('div');
        div.classList.add('flowers_card');

        const img = document.createElement('img');
        img.classList.add('frower_card_img');
        img.style.backgroundImage = `url(${flower.image})`;

        const divFlowersName = document.createElement('div');
        divFlowersName.classList.add('flowers_name');
        divFlowersName.textContent = `${flower.name} : ${flower.flovers}`;

        const divFlowersPrice = document.createElement('div');
        divFlowersPrice.classList.add('flower_price');
        divFlowersPrice.textContent = flower.price;

        div.appendChild(img);
        div.appendChild(divFlowersName);
        div.appendChild(divFlowersPrice);

        return div;
  }

function appendContent(content) {
    const el = document.getElementById('content')
    el.appendChild(content);
}


  function init(flowers) {
    const fragment = document.createDocumentFragment();
    flowers.forEach((flower) => {
        fragment.appendChild(createContent(flower));
    })

    appendContent(fragment);
  }

  init(flowers);



  const template = document.querySelector('template');
  const list = document.getElementById('review_list');
  
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    
    xhr.responseType = 'json';
  
    xhr.onload = function() {
      const res = xhr.response;
      
  
      for(const item of res) {
              if(item.id <3) {
                  const ell = document.importNode(template.content, true);
                  const userEmail = ell.querySelector('p');
                  const userReview = ell.querySelector('div');
                  userEmail.textContent = item.email;
                  userReview.textContent = item.body;
                  list.append(ell);
              }
      }
      
    }
    xhr.send();
  


  
