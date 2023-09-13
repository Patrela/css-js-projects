function colorContainer() {
  //var component_text = "<div class='color-container'>";
  var component_text = "";
  var element = "";
  var cad= "";
  var item= "";
  const imageColors = [ 0xdb4437, 0xab47bc, 0x4285f4, 0x0f9d58, 0xff5722, 0xba68c8, 0x00bcd4, 0x33ac71, 0xffa726, 0xf48fb1, 0x80deea, 0x8bc34a, 0xffcc80, 0xe1bee7, 0xb2dfdb, 0xcddc39];
  for (let i = 0; i < 4; i++) {
    component_text += "<div class='row'>";
    for (let j = 0; j < 4; j++) {
      item = "#"+ imageColors[i*4 + j].toString(16);
      cad = "<button class='color-item' style='background-color: " + item + ";'"
      + " value='" + item + "'" 
      + `onclick= "changeColorShape('shape-main', '${item}')" >`
      + item + "</button>";
      component_text += cad;    
    }
    component_text += "</div>";
  }
  //component_text += "</div>";
return component_text;
}
function changeColorShape(element,colorValue) {
  document.getElementById(element).style.backgroundColor = colorValue;
}
function textShapeUpdate() {
  console.log(document.getElementById("shape-text").value);
  document.getElementById("shape-main").innerText= document.getElementById("shape-text").value;
}

function ShapeChange(){
  let elementoActivo = document.querySelector('input[name="shape-item"]:checked');
  if(elementoActivo) {
    ShapeClass(elementoActivo.value);
  }
 /*     alert(elementoActivo.value);
      //document.getElementById("shape-main");
  } else {
      alert('No hay ninún elemento activo');
  }  */

}

function ShapeClass(classValue) {
  const div = document.getElementById("shape-main");
  var shapesClasses = ["shape-square", "shape-rectangle", "shape-circle"];
  var classes = div.className.split(" ");
  //alert(classes.join(" "));
  var exist = false;
  classes.forEach(element => {
    if(element !== classValue) {
      switch(element){
        case shapesClasses[0]:
        case shapesClasses[1]:      
        case shapesClasses[2]:
          div.classList.remove(element);
          break;
      }
    }
    else {
      exist = true;
    }
  })
  if(!exist) { 
    div.classList.add(classValue);
  }
  //alert(div.classList);
}