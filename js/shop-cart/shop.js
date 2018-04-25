var productlist = [
  {
    id : 1,
    img : '../shop-cart/images/p1.jpg',
    name : 'item 1'
  },
  {
    id : 2,
    img : '../shop-cart/images/p2.jpg',
    name : 'item 2'
  },
  {
    id : 3,
    img : '../shop-cart/images/p3.jpg',
    name : 'item 3'
  },
  {
    id : 4,
    img : '../shop-cart/images/p4.jpg',
    name : 'item 4'
  },
  {
    id : 5,
    img : '../shop-cart/images/p5.jpg',
    name : 'item 5'
  },
  {
    id : 6,
    img : '../shop-cart/images/p6.jpg',
    name : 'item 6'
  },
  {
    id : 7,
    img : '../shop-cart/images/p4.jpg',
    name : 'item 7'
  },
  {
    id : 8,
    img : '../shop-cart/images/p8.jpg',
    name : 'item 8'
  }
]

var listProduct = document.getElementById('shoplist');
var arrLength = productlist.length;
var a = 0;
var n = 0;
var productAdded = [];
var arrCart = [];
var lengthArrCart;
function initProducts() {
  for (let i = 0; i < arrLength; i++) {
    var listItem, button, text, j, checkAdd, itemproduct;
    listItem = document.createElement('li');
    listItem.id = "li"+productlist[i].id;
    listItem.setAttribute('class','product-item');
    listItem.innerHTML = '<img class="product-img" src="' + productlist[i].img  + '"/>' + '<p class="product-title">' + productlist[i].name + '</p>';
    listProduct.appendChild(listItem);
    checkAdd=false;
    if (typeof(Storage) !== "undefined") {
      if (localStorage.products != null) {
        itemproduct = JSON.parse(localStorage.products);
        for(j=0;j<itemproduct.length;j++) {
          if(productlist[i].id === itemproduct[j].id) {
            checkAdd=true;
          }
        }
      }
    }
    if(!checkAdd) {
      button = document.createElement('button');
      button.setAttribute('class','add-to-cart');
      button.setAttribute('id','addcart'+productlist[i].id);
      text = document.createTextNode('Add Product');
      button.appendChild(text);
      listItem.appendChild(button);
      if (typeof(Storage) !== 'undefined') {
        if(localStorage.count != null) {
          n = localStorage.count;
          document.getElementById('number').innerHTML=localStorage.count;
        }
      }
      button.addEventListener('click',
        function added(e) {
          n++;
          localStorage.setItem('count', n);
          if (typeof(Storage) !== 'undefined') {
            if(localStorage.count) {
              document.getElementById('number').innerHTML=localStorage.count;
            }
            if(localStorage.products) {
              var item, obj;
              var arr = [];
              item = JSON.parse(localStorage.products);
              for(let k = 0;k<item.length;k++){
                obj = {id:item[k].id,img:item[k].img,name:item[k].name};
                arr.push(obj);
              }
              arr.push(productlist[i]);
              localStorage.setItem('products', JSON.stringify(arr));
            }
            else{
              var c = [];
              c.push(productlist[i]);
              localStorage.setItem('products',JSON.stringify(c));
            }
          }
          else{
            document.getElementById('number').innerHTML = n;
          }
          e.target.parentNode.removeChild(e.target);
        }
      );
    }
  }
}
initProducts();
