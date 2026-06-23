
const newElemenet = document.createElement("h2");

newElemenet.textContent = "This is Piyush";
newElemenet.className = "Study";
newElemenet.id = "second";

console.dir(newElemenet);

const element = document.querySelector("h1");
console.dir(element);

element.id = "first";
element.textContent = "Hello Coding world";
element.className = "coding";
console.dir(element);

element.after(newElemenet);
// element.before(newElemenet);

const newElemenet2 = document.createElement("h3");
newElemenet2.textContent = "CRT - Campus Requerment traning is comming soon";
newElemenet2.id = "Dhamaka";
console.dir(newElemenet2);

newElemenet2.classList.add("CRT");
newElemenet2.classList.add("traning");
newElemenet2.classList.remove("traning");

newElemenet.after(newElemenet2);
console.dir(newElemenet2);


// aaply css on It 
newElemenet2.style.backgroundColor = "green";
newElemenet2.style.color = "yellow";
newElemenet2.style.fontSize = "25px";


// const list = document.createElement("li");
// list.textContent = "Coding";

// const list2 = document.createElement("li");
// list2.textContent = "LLM Models";

// const list3 = document.createElement("li");
// list3.textContent = "NLP";

// const list4 = document.createElement("li");
// list4.textContent = "LangChain";

// const unorderedElement = document.querySelector("ul");
// unorderedElement.append(list);
// unorderedElement.append(list2);  // push element on back
// unorderedElement.prepend(list3); // push element on front

// list.after(list4);

// unorderedElement.children[1].after(list4);
// console.log(list4);


//real world data operation

const arr = ["Coding","LangChain","LLMs","NLP","a8k2m", "9f3p1", "z0q7v"];

const unorderElement = document.getElementById("Listing");
const fragment = document.createDocumentFragment();

for(let topic of arr){
    const List = document.createElement("li");
    List.textContent = topic;
    fragment.append(List);
}
console.log(unorderElement);


// delete element

const s1 = document.getElementById("first");
console.log(s1);
