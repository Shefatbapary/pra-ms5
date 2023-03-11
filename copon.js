document.getElementById('btn-apply').addEventListener('click', function(){
    const coponCode = getInputValueById('copon-code');
    if(coponCode === 'DISC30%'){
        const totalConst = getTextElementById('total-cost');
        const withDiscountTotalConst = discount(totalConst);
        console.log(withDiscountTotalConst);
        setTextElemantById('total-cost', withDiscountTotalConst);
        
    }
    else{
        alert('Invalid copon');
    }
});