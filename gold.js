AFRAME.registerComponent("gold", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `gold${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + (-10));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 100 + -10);
  
        var position = { x: posX, y: posY, z: posZ };
  console.log('gold')
        //call the function
        this.createGold(id, position);
      }
    } ,
  
    createGold: function(id, position) { 
      
      var terrainEl = document.querySelector("#scene");
  
      var goldEl = document.createElement("a-entity");
  
      goldEl.setAttribute("id",id);
      goldEl.setAttribute("position",position);
      goldEl.setAttribute('scale',{x:5,y:5,z:5})
      
      
      goldEl.setAttribute("gltf-model","./low_poly_gold_coin/scene.gltf");   
  
      terrainEl.appendChild(goldEl);
    }
  });
  
  