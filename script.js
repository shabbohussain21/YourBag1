

const iphone = {
    phone: 'iphone12',
    image:'iphone.jpeg',
    price:350.00,
    id:'1',
    amount:1
  };
  
const sumsung = {
    phone: 'Samsung A51',
    image:'samsung.jpeg',
    price:200.00,
    id:'2',
    amount:1
  };
  
const nokia = {
    phone: 'Nokia',
    image:'nokia1.jpeg',
    price:150.00,
    id:'3',
    amount:1
  };
  const vivo = {
    phone: 'Vivo V20 Pro',
    image:'vivo.jpeg',
    price:100.00,
    id:'4',
    amount:1
  };

  
  const phones = [iphone,sumsung, nokia,vivo];
//////////////////////all class////////////////////


  const increaseItemBtn = document.getElementsByClassName('fa-chevron-up');
  const decreaseItemBtn = document.getElementsByClassName('fa-chevron-down'); 
  let addItem = document.querySelector('.item-amount');

  const totalPrice = document.querySelector('.cart-total');
  const clearBtn = document.querySelector('.clear-cart');
  let totalBill;
  let total =0;

///////////////////Display items///////////////////


////////////////add in local storage////////////

let setInLocalStorage = function(product){
  localStorage.setItem("products", JSON.stringify(product));
}
setInLocalStorage(phones);


// get data from local storage
const dataGet = localStorage.getItem("products");
let data = JSON.parse(dataGet);

let cart = [...data];
// console.log(data);
/////////////////////////////
const cartContent = document.querySelector('.cart-content');
const dispayItem = function(mob){
mob.map(function(mob){

    // console.log(mobile.phone);
    const item = `<div class="cart-item" data-id=${mob.id}>
    <img src="images/${mob.image}" alt="product">
    <div>
          <h4>${mob.phone}</h4>
          <h5>$${mob.price}</h5>
            <span class="remove-item" name="removethis" data-id=${mob.id}>remove</span>
    </div>
    <div>
        <i class="fas fa-chevron-up " data-id=${mob.id}></i>
        <p class="item-amount">1</p>
        <i class="fas fa-chevron-down" data-id=${mob.id}></i>
    </div>
</input>`
const position = "beforeend";
cartContent.insertAdjacentHTML(position,item);
});
}
dispayItem(data);
//////////////////////////Local Storage////////////////////
//----------------------------------------------- 
clearBtn.addEventListener('click',function(){
  
  cartContent.remove();
  totalPrice.innerText = "0.00";
});

/////////////////////////////////////////////////////
const dlt = document.querySelector('.cart-item');
cartContent.addEventListener('click',event=>{
  // console.log(event.target);
  if(event.target.classList.contains('remove-item')){
    let removeProduct = event.target.parentElement.parentElement;
       removeProduct.remove();
       del(event.target.dataset.id);
      
      //  del(event.target.dataset.id);
       
   };
 

     if(event.target.classList.contains("fa-chevron-up")){
       let addAmount = event.target;
       const id= addAmount.dataset.id;
       let template = data.find(item=>item.id=== id);
          template.amount= template.amount+1;
          addAmount.nextElementSibling.innerText=template.amount;
          let incAmount = template.amount;       
         addPrice(id)
         if(id == 1){
           document.querySelector("#id1").value= template.amount;
          }
          if(id == 2){
            document.querySelector("#id2").value= template.amount;
           }
           if(id == 3){
            document.querySelector("#id3").value= template.amount;
           }
           if(id == 4){
            document.querySelector("#id4").value= template.amount;
           }
     }
     if(event.target.classList.contains("fa-chevron-down")){
      let lowerAmount = event.target;
      const id= lowerAmount.dataset.id;
      let template = data.find(item=>item.id=== id);
      if(template.amount >1){
        template.amount= template.amount-1;
        lowerAmount.previousElementSibling.innerText=template.amount;
        minusPrice(id);
        if(id == 1){
          document.querySelector("#id1").value= template.amount;
         }
         if(id == 2){
           document.querySelector("#id2").value= template.amount;
          }
          if(id == 3){
           document.querySelector("#id3").value= template.amount;
          }
          if(id == 4){
            document.querySelector("#id4").value= template.amount;
           }
        
      }else{
        cartContent.removeChild(lowerAmount.parentElement.parentElement);
        minusPrice(id);
      }
        
     }

    

});


totalBill = function(cart){
   cart.map(data=>{
     total += data.price * data.amount;
   });
   totalPrice.innerText = parseFloat(total).toFixed(2);

}
totalBill(cart);

function addPrice(id){
  // console.log(id , amountplus);
  let products = JSON.parse(localStorage.getItem('products'));

    let newData = products.find(product => product.id === id); 
    total += newData.price;
   totalPrice.innerText = parseFloat(total).toFixed(2);
   
}
function minusPrice(id){
  // console.log(id , amountplus);
  let products = JSON.parse(localStorage.getItem('products'));

    let newData = products.find(product => product.id === id); 
    total -= newData.price;
   totalPrice.innerText = parseFloat(total).toFixed(2);

}

function del(id){

 let products = JSON.parse(localStorage.getItem('products'));
    let newData = products.find(product => product.id === id); 
    if(id == 1){
    const id1= document.querySelector("#id1").value;
    const removePrice = newData.price*id1; 
    total -= removePrice;
    totalPrice.innerText = parseFloat(total).toFixed(2);
     }
     if(id == 2){
      const id2= document.querySelector("#id2").value;
      const removePrice = newData.price*id2; 
      total -= removePrice;
      totalPrice.innerText = parseFloat(total).toFixed(2);
      }
      if(id == 3){
    const id3= document.querySelector("#id3").value;
    const removePrice = newData.price*id3; 
    total -= removePrice;
    totalPrice.innerText = parseFloat(total).toFixed(2);
      }
      if(id == 4){
        const id4= document.querySelector("#id4").value;
        const removePrice = newData.price*id4; 
        total -= removePrice;
        totalPrice.innerText = parseFloat(total).toFixed(2);
          }       
               

}









