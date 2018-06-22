<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Projec</title>
	</head>
	<body>
		<script src="script"></script>
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
        <INPUT TYPE="button" VALUE="Готово" onClick="Complete();">
        <INPUT TYPE="reset" VALUE="Сброс">
    </FORM>



	</body>
</html>
