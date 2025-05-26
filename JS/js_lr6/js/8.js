function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    
    if (text != null && value != null){
        document.getElementById('menu').add(new Option(text, value));
    }
}