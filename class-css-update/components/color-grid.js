function colorContainer() {
  //var component_text = "<div class='color-container'>";
  var component_text = "";
  var element = "";
  var cad= ""
  const imageColors = [ 0xdb4437, 0xab47bc, 0x4285f4, 0x0f9d58, 0xff5722, 0xba68c8, 0x00bcd4, 0x33ac71, 0xffa726, 0xf48fb1, 0x80deea, 0x8bc34a, 0xffcc80, 0xe1bee7, 0xb2dfdb, 0xcddc39]
  for (let i = 0; i < 4; i++) {
    component_text += "<div class='row'>";
    for (let j = 0; j < 4; j++) {
      cad = "<button class='color-item' style='background-color: #" + imageColors[i*4 + j].toString(16) + ";' value='#" + imageColors[i*4 + j].toString(16) + "'>#" + imageColors[i*4 + j].toString(16) + "</button>";
      component_text += cad;    
    }
    component_text += "</div>";
  }
  //component_text += "</div>";
return component_text;
}