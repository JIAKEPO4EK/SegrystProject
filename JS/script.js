<script name="script">
      'use strict'
       function Complete()
    {
      var Elem="\nПол: " + document.Sel1.Sex.value +
      "\nРост: " + document.Sel1.Height.value +
      "\nВес: " + document.Sel1.Weight.value +
      "\nВозраст: " + document.Sel1.Age.value;
      alert(Elem);
    }
     var flag = 0;
  function changeImage() {
    if (flag == 0) {
      document.img.src = 'GBNП.jpg';
      flag = 1;
    }
    else {
      document.img.src = 'GBNТ.jpg';
      flag = 0;
    }
  }
      var flag = 0;
  function Imagechang() {
    if (flag == 0) {
      document.img.src = 'QWEП.jpg';
      flag = 1;
    }
    else {
      document.img.src = 'QWEТ.jpg';
      flag = 0;
    }
  }
    </script>
