var logos = ["img/1.png", "img/2.png", "img/3.png", "img/4.png"];

for (var i = 0; i < logos.length; i++) {
  var logo = logos[i];
  particlesJS("logo" + (i + 1),
  {
     "particles":{
        "number":{
           "value":1,
           "density": {
            "enable": false
          }
        },
        "shape":{
           "type": "image",
           "image":{
              "src":logo,
              "width":100,
              "height":100
           }
        },
        "size":{
          "value": 50,
          "random": false
        },
        "move":{
           "enable":true,
           "speed":8,
           "direction":"left",
           "random":false,
           "straight":true,
           "out_mode":"out",
           "bounce":false,
           "attract":{
              "enable":false,
              "rotateX":600,
              "rotateY":1200
           }
        }
     },
     "interactivity": {
       "detect_on": "canvas",
       "events": {
         "onhover": {
           "enable": false,
         },
         "onclick": {
           "enable": false,
         },
         "resize": true
       }
     },
     "retina_detect":true
  });
}
