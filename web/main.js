console.log("Hello world");

window.addEventListener("load", function(){
    let count = 0;
    const plusButton = document.getElementById("plus-button");
    const countPreview = document.getElementById("count-preview");
    const minusButton = this.document.getElementById("minus-button");
    console.log(plusButton);

    function handlePlus(){
        console.log("click");
        count++;
        console.log(count);
        console.dir(countPreview);
        countPreview.innerHTML = count;
        console.dir(countPreview);        
    }

    function handleMinus(){
        if(count == 0){
            return;
        }
        console.log("minus");
        count--;
        console.log(count);
        countPreview.innerHTML = count;
    }

    plusButton.addEventListener("click", handlePlus)
    minusButton.addEventListener("click", handleMinus)
})