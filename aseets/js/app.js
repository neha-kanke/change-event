const cl=console.log

const selectcolor=document.getElementById('selectcolor');
// cl(selectcolor);
const alldiv=[...document.querySelectorAll('.all')]
// cl(alldiv)

const onselect=(eve)=>{
    cl(eve.target.value);
    let getclass = eve.target.value;
    alldiv.forEach(c2=>{
     c2.classList.add('d-none');
    })
  
    const display=[...document.getElementsByClassName(getclass)];
    // cl(display)
    display.forEach(ele=>{
        // cl(ele)
        ele.classList.remove('d-none');
    })


}





selectcolor.addEventListener('change',onselect);







































// const user=document.getElementById('username');
// const onuser=(e)=>{
//     e.target.style.border='2px solid blue'
//     cl(e.target.value);

// }
// const onblur =(eve)=>{
//     eve.target.style.border='3px solid red'
// }
// const onkey=(eve)=>{
// eve.target.style.backgroundColor='blue'

// }
// const keydown=(eve)=>{
//     eve.target.style.borderradius='50%';
//     eve.target.style.color='red';
//     eve.target.style.fontSize='25px';
// }


// user.addEventListener('focus',onuser);
// user.addEventListener('blur', onblur);
// user.addEventListener('keyup',onkey)
// user.addEventListener('keydown',keydown)
