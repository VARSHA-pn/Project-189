AFRAME.registerComponent("diamond", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `diamond${i}`;
  
        //position variables     
        var posX =(Math.random() * 200 + (-10));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 200 + -10);
  
        var position = { x: posX, y: posY, z: posZ };
  console.log('hi')
        //call the function
        this.createDiamonds(id, position);
      }
    } ,
  
    createDiamonds: function(id, position) { 
      
      var terrainEl = document.querySelector("#scene");
  
      var diamondEl = document.createElement("a-entity");
  
      diamondEl.setAttribute("id",id);
      diamondEl.setAttribute("position",position);
      diamondEl.setAttribute('scale',{x:5,y:5,z:5})
      
      
      diamondEl.setAttribute("gltf-model","./diamonds/diamonds/scene.gltf");   
  
      terrainEl.appendChild(diamondEl);
    }
  });
  
  
