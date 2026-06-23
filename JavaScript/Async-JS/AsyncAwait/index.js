// async await
// async function always return promises
// async function greet(){
//     return "hello";

// return new Promise(resolve, reject) =>{
    // reject("rohit");
// })

// const response = greet();

// // console.log(response);

// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:", error);
// // })


// // fetch("https://api.github.com/users")
// // .then((response)=>response.json())
// // .then((data)=>console.log(data));

// }

async function github(){
    try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        // console.log(data);
        if(!response.ok){
            throw new Error("Data is not persent");
        }

        const parent = document.getElementById("first");
        for(let user of data){
    
            const element = document.createElement("div");
            element.classList.add("user");
    
            const image = document.createElement("img");
            image.src = user.avatar_url; 
    
            const username = document.createElement("h2");
            username.textContent = user.login;
    
            const anchor = document.createElement("a");
            anchor.href = user.avatar_url;
            anchor.textContent = "Visit Profile";
    
            element.append(image, username, anchor);
            parent.append(element);    
        }
    }
    catch(error){
        console.log("error");

    }
}
github();