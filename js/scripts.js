$(document).ready(function(){
  var icecreams = ["neapolitan", "rocky road", "your mom" , "pistachio"]
  var flavors = ["flavor", "flavor1", "flavor2", "flavor3"]
  var icecreamselector = 0;

  flavors.forEach(function(flavor){
    $("p#" + flavor).prepend(icecreams[icecreamselector])
    icecreamselector += 1;

  });
});
