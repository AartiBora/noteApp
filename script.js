//Note App

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem('notes');
  let notesObj;
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes', JSON.stringify(notesObj))
  addTxt.value = "";
  showNote();
});
//to show notes
let showNote = () => {
  let notes = localStorage.getItem('notes');
  let notesObj;
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `
    <div class="card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1} </h5>
          <p  class="card-text"> ${element} </p>
          <button id="${index}"  onclick="del(this.id)"  class="btn btn-success">Delete</button>
        </div>
      </div>
    `
    });
    let allNotes = document.getElementById('allNotes');
    if (notesObj.length != 0){
      allNotes.innerHTML = html;
    }
    else{
      allNotes.innerHTML = `<h4> <b> Nothing Here...</b></h4><h5> Add a Note using "Add Note" </h5>`;
    }
}
showNote();
//to delete notes
let del =(index)=>{
   let notes = localStorage.getItem('notes');
  let notesObj;
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
 notesObj.splice(index,1)
  localStorage.setItem('notes', JSON.stringify(notesObj))
  showNote();
}
