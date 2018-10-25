function deleteItem(){
  var item = document.getElementById('product-info');
  item.parentNode.removeChild(item);
}

function getPriceByProduct(){
  console.log("Unit Price is: " + parseFloat(document.getElementById('unit-price').innerText)) //Unit Price
  console.log("Quantity:  " + document.getElementById("quantity").value)
  console.log("Unit Price x Quantity:  " + totalUnitPrice)
//  var totalQuantity = document.getElementById("quantity").value
  var unitPrice = parseFloat(document.getElementById('unit-price').innerText);
  var totalQuantity = document.getElementById("quantity").value;
  var totalUnitPrice = unitPrice*totalQuantity;
// var
  //total-quantity-price, var productPrice = document.getElementById('total-quantity-price'),
  //var num = parseFloat(productPrice.innerText)
  // var unitPrice = parseFloat(document.getElementById('unit-price').innerText)
  //
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
