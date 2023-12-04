const elementsArr = document.querySelectorAll('li');

array.forEach(element => {
     if(element.classList.contains('highlight')){
        element.classList.remove();
     } else{
        element.classList.add('highlight');
     }
     return array;
});