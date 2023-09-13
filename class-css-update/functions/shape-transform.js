/**
 * Create a div with the grid for 16 hexa colors that will change the shape-main element's background
 * @returns {string} The div with 4 rows and 4 columns
 */
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

/**
 * update element's background color
 * @param {string} element DOM id for the shape element to change
 * @param {string} colorValue hexa color for element's background, including # character
 */
function changeColorShape(element,colorValue) {
  document.getElementById(element).style.backgroundColor = colorValue;
}

/**
 * update element's text
 */
function textShapeUpdate() {
  console.log(document.getElementById("shape-text").value);
  document.getElementById("shape-main").innerText= document.getElementById("shape-text").value;
}

/**
 * select element's shape for changing the shape-main element
 */
function ShapeChange(){
  let elementActive = document.querySelector('input[name="shape-item"]:checked');
  if(elementActive) {
    ShapeClass(elementActive.value);
  }
}


/**
 * update element's shape with classes
 * @param {string} classValue the class name to apply for the shape element
 */
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