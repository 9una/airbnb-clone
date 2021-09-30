function count(type) {
    const resultElement = document.getElementById('result');
    let count = resultElement.innerText;

    if(type === 'plus'){
        count = parseInt(count) + 1;
    } else if(type === 'minus') {
        if(count >= 1) {
            count = parseInt(count) - 1;
        }
        if(count == 0){
            console.log("guest count : 0");
        }
    };
    
    resultElement.innerText = count;
};