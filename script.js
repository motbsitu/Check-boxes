window.addEventListener('load', function(event){

  const boxes =  document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function isChecked(e){
  //is shift key down and are checking
  let inBetween = false;

  if(e.shiftKey && this.checked){
    //loop thru checkboxes, look for first checked and check inbetween
    boxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('start checking/end checking');
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;

  console.log(lastChecked);
}

  boxes.forEach(checkbox => checkbox.addEventListener('click', isChecked));

});
