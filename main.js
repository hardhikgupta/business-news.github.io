let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=82cc774cf20c48e982dcf22abd1811c1';

const news=document.getElementById('news');
console.log('hi')

async function fetchDataJSON() {
  const response = await fetch(url);
  const fullData = await response.json();
  return fullData;
};

fetchDataJSON().then(fullData => {
    fullData;
    for(let a=0; a<20; a++){
      let items = 'item'+a;
      let card = document.createElement('div')
      card.className='card item ';
      
      let img = document.createElement('img')
      img.className = 'card-img-top';
      img.src=fullData.articles[a].urlToImage;
      card.appendChild(img)
      
      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      
      let header = document.createElement('h5');
      header.className = 'card-title'
      header.innerText = fullData.articles[a].title;
      cardBody.appendChild(header);
      
      let p = document.createElement('p');
      p.className='card-text';
      p.innerText= fullData.articles[a].description
      cardBody.appendChild(p)
      card.appendChild(cardBody)
      
      news.appendChild(card)
      
   
    };
    console.log(fullData)
  });
