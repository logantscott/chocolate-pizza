const lis = document.getElementsByTagName('li');

for (let i = 0; i < lis.length; i++){
    lis[i].addEventListner('click', function() {
        if (lis[i].classList.contains('strike')) {
            lis[i].classList.remove('strike');
        } else {
            lis[i].classList.add('strike');
        }
    });
}