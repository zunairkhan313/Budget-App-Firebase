import {db} from "./script.mjs"
import{collection, addDoc,onSnapshot,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const set = document.getElementById("set")
set.addEventListener('click',async()=>{
const bud = document.getElementById("budget").value;

    try {
        const docRef = await addDoc(collection(db, "budd"), {
        budget : bud       
            
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})
const check = document.getElementById("check")
check.addEventListener('click',async()=>{
const cost = document.getElementById("costInp").value;

    try {
        const docRef = await addDoc(collection(db, "cost"), {
            costInp : cost       
            
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})


function show(){
var budgetPlace = document.getElementById("budgetPlace")
var b = document.getElementById("b")
var e =document.getElementById("e")
const q = collection(db, "budd")
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
   
    budgetPlace.innerHTML+=`
    
   
            <p id="budgetPlace">${change.doc.data().budget}</p>
       

    `
 
b.innerHTML+=`
<p id="b">${change.doc.data().budget}</p>

`


  });
});


}
show()
function show1(){

var e = document.getElementById("e")
const q = collection(db, "cost")
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
   
e.innerHTML +=`

<p id="e">${change.doc.data().costInp}</p>
`


  });
});


}
show1()








async function product(){
  var aa = budget - costInp;
  
  var b = document.getElementById("b")
  b.innerHTML = aa
const titleInp = document.getElementById("titleInp").value
  try {
    const docRef = await addDoc(collection(db, "title"), {
      title : titleInp       
        
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
}
window.product = product;



// function show4(){
//   var e = document.getElementById("e")
//   const q = collection(db, "cost")
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
      
//       document.getElementById("eL").innerHTML += `
     
//       <div class="delete">
//   <p ><i  class="fa fa-trash" onclick="removeExpense()"></i></p>
// </div>

      
//       `


//     });
//   });

// }
// show4();
function show2(){
  const titleInp = document.getElementById("titleInp")
  const q = collection(db, "title")
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
    

      document.getElementById("eL").innerHTML += `
      <div class="list-item">
          <div class="expense-name">
              <h3>${change.doc.data().title}</h3>
          </div>
          <div  class="expense-price">
          <h3>${change.doc.data().costInp}</h3>
      </div>
      <div class="delete">
      <p ><i  class="fa fa-trash" onclick="del('${change.doc.id}')"></i></p>
    </div>
      </div>
  `;



    });
  });
  

}
show2();



async function del(id){
  console.log(id);
  await deleteDoc(doc(db, "title", id));
  window.location.reload();
}
window.del=del;





// function show3(){
//   var e = document.getElementById("e")
//   const q = collection(db, "cost")
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
      
//       document.getElementById("eL").innerHTML += `
      
//       <div  class="expense-price">
//               <h3>${change.doc.data().costInp}</h3>
//           </div>
          
//       `


//     });
//   });

// }
// show3();










