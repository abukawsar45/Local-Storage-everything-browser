const addProduct = () =>{
    const inputProductField = document.getElementById('input-product');
    const inputQuantityField = document.getElementById('input-quantity');
    const productValue = inputProductField.value;
    const quantityValue = inputQuantityField.value;
    inputProductField.value = '';
    inputQuantityField.value = '';
    console.log(productValue, quantityValue);
    displayProduct (productValue, quantityValue)

}
const displayProduct = (productValue, quantityValue) =>{
    if(productValue && quantityValue){
        const li = window.document.createElement('li');
        li.innerHTML = `${productValue}  ${quantityValue}`;
        const olContainer = document.getElementById('ol-container')
        olContainer.appendChild(li)
    }
    else{
        alert('please input field check');
        return
    }
}