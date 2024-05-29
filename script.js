const button = document.getElementById('btn');
const colorText = document.querySelector('.color');
const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
]
//add event listner on the button 

button.addEventListener('click',() =>{
    // alert('clicked ho gaya!');
    //hex color
    const hexColor = generateHexColor();
    document.body.style.backgroundColor = hexColor;
    document.body.style.transitionDuration = '0.8s';
    colorText.textContent = hexColor;
    // alert('Do You want to change Background Color');
    

})
const generateHexColor = () =>{
     let hexColor = '#';
     for(let i=0; i<6; i++){
        hexColor += hex[generateRandomNumber()];
     }
    //  alert(hexColor);
    return hexColor;
    }
const generateRandomNumber = () =>{
    return Math.floor(Math.random() * hex.length);
}