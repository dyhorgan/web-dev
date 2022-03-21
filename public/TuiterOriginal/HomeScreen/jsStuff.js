import {active} from "./active.js";

let rows = document.getElementsByClassName("navRow");

function wipe(index){
  for(let j = 0; j < Array.from(rows).length; j++){
    let row = Array.from(rows)[j];
    if(index !== j){
      row.className = "navRow container"
    }
  }
}

for(let i = 0; i < Array.from(rows).length; i++){
  let row = Array.from(rows)[i];
   console.log("looping");
  row.addEventListener("click", () => {

    row.className = "navRow container blue";
    wipe(i)
  })
}
