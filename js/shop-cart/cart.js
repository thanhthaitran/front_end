function initCart() {
  if (localStorage.getItem('products') !== null) {
    arrCart = JSON.parse(localStorage.getItem('products'));
  } else {
    arrCart = [];
  }
  lengthCart = parseInt(arrCart.length);
  for (let i = 0; i < lengthCart; i++) {
    var idProduct, imgProduct, nameProduct, listcart;
    idProduct = arrCart[i].id;
    imgProduct = arrCart[i].img;
    nameProduct = arrCart[i].name;
    listcart = document.createElement('tr');
    listcart.id = "tr"+arrCart[i].id;
    listcart.innerHTML = '<td>'+ idProduct +'</td>'+
                          '<td>'+ nameProduct +'</td>'+
                          '<td><img src="'+ imgProduct +'" alt=""></td>' +
                          '<td><button id="'+idProduct+'" class="delete" onclick="delProduct(this.id)">Delete</button></td>';
    document.getElementById('cart-list').appendChild(listcart);
  }
}
initCart();

function delProduct(id) {
  if(confirm('Do you want to delete product '+ id)) {
    let newCart = [];
    let newCount;
    let a = localStorage.getItem('count');
    for (let i = 0; i < arrCart.length; i++) {
      if(parseInt(arrCart[i]['id']) !== parseInt(id)) {
        newCart.push(arrCart[i]);
        newCount = a - 1;
      } 
    }
    localStorage.setItem('products',JSON.stringify(newCart));
    localStorage.setItem('count',JSON.stringify(newCount));
    if (localStorage.getItem('count') === 'undefined') {
      newCount = 0;
    }
    localStorage.setItem('count',JSON.stringify(newCount));
    location.reload();
  }
}

function back() {
  history.back(1);
}
