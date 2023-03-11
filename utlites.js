function getInputValueById(id){
    const getinputFiled = document.getElementById(id);
    const getInputValue = getinputFiled.value;
    return getInputValue;
};

function getTextElementById (id){
    const textElement = document.getElementById(id);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
};
function discount(allCost){
    // const allConst = getTextElementById(cost);
    const cost1persent = allCost / 100;
    const discount30persent = cost1persent * 30;
    const discountValue = allCost - discount30persent;
    return discountValue ;
};

function setTextElemantById(id, value){
    const textElement = document.getElementById(id);
    textElement.innerText = value;
}
