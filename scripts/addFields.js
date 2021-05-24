let addTime = document.querySelector("#add-time");

addTime.addEventListener('click', function(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');


    console.log(addTime);
    console.log(fields[0]);

})
