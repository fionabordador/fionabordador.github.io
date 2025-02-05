function showBox(day) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.classList.remove('show-box');
    });
    
    let selectedBox = document.getElementById(day);
    selectedBox.classList.add('show-box');
  }
  
