var items = [];
        
var operators = document.getElementById("operators");
var numbers = document.getElementById("numbers");
var inputField = document.getElementById("inputField");

numbers.addEventListener("click", function(event){
    if(event.target && event.target.matches("#allClear")){
        inputField.value = "";
        items = [];
    }
    if(event.target && event.target.matches("#cancelEntry")){
        items.pop();
        inputField.value = items;
        var newValue = inputField.value.split(",").join("").replace(/\s+/g, '');
        inputField.value = newValue;
    }
    if(event.target && event.target.matches(".num")){
       inputField.value += event.target.innerHTML.trim();
        items.push(event.target.innerHTML);
    }     
    if(event.target && event.target.matches(".decimal")){
        inputField.value += event.target.innerHTML.trim();
        items.push(event.target.innerHTML);
    }
})

operators.addEventListener("click", function(event){
    if(event.target && event.target.matches("#addition")){
        inputField.value += event.target.innerHTML;
        items.push(event.target.innerHTML);
    }
    if(event.target && event.target.matches("#divide")){
        inputField.value += event.target.innerHTML;
        items.push(event.target.innerHTML);
    }
    if(event.target && event.target.matches("#multiply")){
        inputField.value += event.target.innerHTML;
        items.push(event.target.innerHTML);
    }
    if(event.target && event.target.matches("#subtract")){
        inputField.value += event.target.innerHTML;
        items.push(event.target.innerHTML);
    }
    if(event.target && event.target.matches("#equal")){
        var allItems = inputField.value;
        if(allItems.includes("x")){
            allItems = allItems.replace(/x/g,"*").replace(/÷/g,"/")
             allItems;
        }
        result = eval(allItems);
        inputField.value = result;
    }
})