const starCheckSumbitBtn = document.querySelector('.star-widget-btn button')
const starPost = document.querySelector('.star-post')
const starWidget = document.querySelector('.star-widget')
const starPostEditBtn = document.querySelector('.star-post-edit')

starCheckSumbitBtn.addEventListener('click',()=>{
    starWidget.style.display = 'none';
    starPost.style.display = 'block';
    starPostEditBtn.addEventListener('click',()=>{
        starWidget.style.display = 'block';
        starPost.style.display = 'none';
    })
    return false;
})