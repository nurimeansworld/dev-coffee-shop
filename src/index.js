// console.log('location.pathname', location.pathname);
// console.log('location.name', location.name);
// console.log('location', location);


import ProductListPage from './productlistpage.js';
console.log(ProductListPage);

export default function App({$target}) {
  this.route = () => {
    const {pathname} = location;
    $target.innerHTML = '';

    if(pathname === '/'){
      // 상품 목록 리스트 페이지
      new ProductListPage({$target}).render;

    }else if(pathname.indexOf('/products/') === 0){
      // 상품 상세 페이지 

    }else if(pathname === '/'){
      // 장바구니 페이지

    }
  }

}

const pathname = location;
console.log('pathname', pathname);

