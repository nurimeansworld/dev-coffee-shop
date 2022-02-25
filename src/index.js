function setProductList(resJson){
  const productSec = document.querySelector('.ProductListPage');
  const productList = productSec.querySelector('ul');
  const listFrag = document.createDocumentFragment();
 
  productSec.addEventListener('click',(e) => {
    // TODO:: img, price 범위에도 li로 해당되도록 설정
    if(e.target.tagName == 'LI'){
      // route = e.target.getAttribute('route');
      itemId = e.target.getAttribute('data-id');
     // CHCECK:: 여기든 하여튼 render 설정해주면 될..듯..
      // e.target.innerHTML = route;
      // location.href=`${window.location.href}${route}`;
      location.href=`${window.location.href}/product/${itemId}}`;
    }
  });

  if(Object.keys(resJson).length !== 0){
    for (const item of resJson) {
      let itemPrice = item.price;
      
      let listItem = document.createElement('li');
      listItem.setAttribute('class', 'Product');
      // listItem.setAttribute('route', `product/${item.id}`);
      listItem.setAttribute('data-id', item.id);

      let listImg = document.createElement('img');
      listImg.setAttribute('src', item.imageUrl);

      let listDiv = document.createElement('div');
      listDiv.setAttribute('class', 'Product__info');
      listDiv.innerHTML = `<div>${item.name}</div><div>${itemPrice.toLocaleString('ko-KR')}원~</div>`;

      listItem.appendChild(listImg);
      listItem.appendChild(listDiv);

      listFrag.appendChild(listItem);
    }
  }else{
    // 빈 객체인 경우
    productList.remove();

    const emptyText = document.createElement('p');
    emptyText.textContent = '상품이 존재하지 않습니다.';
    productSec.appendChild(emptyText);    
  }
  productList.appendChild(listFrag);
  
}

async function getProductList(){
  const url = "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";
  try{
    const res = await fetch(`${url}`,{ method: 'GET' });
    const resJson = await res.json();

    console.log('resJson', resJson);
    console.log('resJson', resJson[0].name);

    setProductList(resJson);
  } catch(err){
    console.error(err);
  }
}
getProductList();