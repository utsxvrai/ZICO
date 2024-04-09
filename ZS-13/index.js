var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById('no');

yesBtn.addEventListener('click', onSubmit);

noBtn.addEventListener('mouseover', function(){
    noBtn.innerHTML = 'Yes';
    yesBtn.innerHTML = 'No';
})

yesBtn.addEventListener('mouseout', function(){
    yesBtn.innerHTML = 'Yes';
    noBtn.innerHTML = 'No';
})

function onSubmit(){
    window.alert('Congratulations! you are going on date with me')
}