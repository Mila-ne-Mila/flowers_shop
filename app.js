

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
      function init() {
              fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
              .then((resp) => resp.json())
              .then((data) => {
              const fragment = document.createDocumentFragment();

              data.forEach((flower) => {
              fragment.appendChild(createContent(flower));
  })

  appendContent(fragment);
              
  });
}

  init();






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
  
