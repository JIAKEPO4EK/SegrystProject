<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Project</title>
    <link rel="stylesheet" href="Document.css">
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
      document.img.src = 'Dadada.jpg';
      flag = 1;
    }
    else {
      document.img.src = 'Kakaka.jpg';
      flag = 0;
    }
  }
    </script>
	</head>
	<body>
    <div class="MDA">
      <h1>Заполните анкету</h1>
      <FORM NAME="Sel1">
        <TABLE>
            <TR>
                  <TD>
                      <B>
                         Пол:
                      <B>
                  </TD>
                  <TD> 
                      <INPUT NAME="Sex" SIZE=13 list="идентификатор"
                      onBlur="this.value=this.value.toUpperCase()">
                      <datalist id="идентификатор">
                        <option value="Мужской">
                        <option value="Женский">
                      </datalist>
                  </TD>
              </TR>
              <TR>
                  <TD>
                      <B>
                          Рост:
                      <B>
                  </TD>
                  <TD>
                      <INPUT NAME="Height" SIZE=13
                       onBlur="this.value=this.value.toUpperCase()">
                  </TD>
              </TR>
              <TR>
                  <TD>
                      <B>
                          Вес:
                      <B>
                  </TD>
                  <TD>
                     <INPUT NAME="Weight" SIZE=13 
                        onBlur="this.value=CheckAge(this.value)"
                        onFocus="this.select()">

                  </TD>
              </TR>
              <TR>
                  <TD>
                      <B>
                          Возраст:
                      <B>
                  </TD>
                  <TD>
                      <INPUT NAME="Age" SIZE=13>
                  </TD>
              </TR>
        </TABLE>
        <INPUT TYPE="button" VALUE="Готово" onClick="Complete()">
        <INPUT TYPE="reset" VALUE="Сброс">
        <input type = 'button' value = 'Для женщин' onClick = 'changeImage()' />
        <input type = 'button' value = 'Для мужчин' onClick = 'Imagechang()' />
      </FORM>
      <img name = 'img' src = 'image1.jpg' />
    </div>  



	</body>
</html>
