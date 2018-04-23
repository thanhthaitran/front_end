let productlist = [
  {
    id : 1,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 1'
  },
  {
    id : 2,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 2'
  },
  {
    id : 3,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 3'
  },
  {
    id : 4,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 4'
  },
  {
    id : 5,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 1'
  },
  {
    id : 6,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 2'
  },
  {
    id : 7,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 3'
  },
  {
    id : 8,
    img : '../shop-cart/images/activities-image-1.png',
    name : 'item 4'
  }
]

let listProduct = document.getElementById('shoplist');
let arrLength = productlist.length;
let n = 0;
let productAdded = [];
function init() {
  for (let i = 0; i < arrLength; i++) {
    let listItem, button, text;
    listItem = document.createElement('li');
    listItem.setAttribute('class','product-item');
    listItem.innerHTML = '<img class="product-img" src="' + productlist[i].img  + '"/>' + '<p class="product-title">' + productlist[i].name + '</p>';
    listProduct.appendChild(listItem);
    button = document.createElement('button');
    button.setAttribute('class','add-to-cart');
    button.setAttribute('id','addcart');
    text = document.createTextNode('Add Product');
    button.appendChild(text);
    listItem.appendChild(button);
    button.addEventListener('click',
      function added() {
        productAdded.push(productlist[i]);
        n = n +1;
        document.getElementById('number').innerHTML = n;
        // document.getElementById('addcart').style.display = "none";
        localStorage.setItem('products', JSON.stringify(productAdded));
      }
    );
  }
}
function zeroNumber() {
  if (document.getElementById('number').innerHTML === "0"){
    document.getElementById('number').style.display = "none";
    // document.getElementById('number').innerHTML = "<style> .number{display: none;}</style>";
  } else {
    document.getElementById('number').style.display = "block";
  }
}
// zeroNumber();
init();
