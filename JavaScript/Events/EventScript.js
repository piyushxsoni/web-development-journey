// method - 2

// const element = document.getElementById("first");

// element.addEventListener('mouseenter', ()=>{
//     element.textContent = "Strike is comming";
// })

// element.addEventListener('mouseleave', ()=>{
//     element.style.backgroundColor="brown";
// })

// method -3

// const child1 = document.getElementById("child1");

// child1.addEventListener('click',()=>{
//     child1.textContent = "first child div";
// })

// child1.addEventListener('dblclick', function(){
//     child1.style.color = "Black";
// })

// method - 4

const parent = document.getElementById("parent");
console.log(parent.children);

parent.addEventListener('click', (e)=>{
    // console.log(e.target);
    e.target.textContent = "I am clicked";
})


// for(let child of parent.children){     
//     console.log(child);
//     child.addEventListener('click',function(){
//         child.textContent = "I am clicked";
//     })
// }



// Bubbly Event

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e)=>{
//     console.log(e.target);
//     console.log("grandparent is click");
// })

// const parent = document.getElementById("parent");
// grandparent.addEventListener('click', function(e){
//     console.log(e);
//     console.log("parent is click");
// })

// const child = document.getElementById('child');
// grandparent.addEventListener('click', function(e){
//     console.log(e);
//     console.log("child is click");
// }) 
