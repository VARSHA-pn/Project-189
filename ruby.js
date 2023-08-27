AFRAME.registerComponent("ruby", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ruby${i}`;
  
        //position variables     
        var posX =(Math.random() * 200 + (-10));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 100 + -10);
  
        var position = { x: posX, y: posY, z: posZ };
  console.log('ruby')
        //call the function
        this.createRuby(id, position);
      }
    } ,
  
    createGold: function(id, position) { 
      
      var terrainEl = document.querySelector("#scene");
  
      var rubyEl = document.createElement("a-entity");
  
      rubyEl.setAttribute("id",id);
      rubyEl.setAttribute("position",position);
      rubyEl.setAttribute('scale',{x:5,y:5,z:5})
      
      
      rubyEl.setAttribute("gltf-model","./low_poly_gold_coin/scene.gltf");   
  
      terrainEl.appendChild(rubyEl);
    }
  });
  
  