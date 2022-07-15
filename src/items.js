
   let items =  [
    { "id": 1, "name": " MODERN ME GREEN: Salt - 220g",  "price": "R99", "img":"../img/mordern me range.png", "type":"salt"},
    { "id": 2, "name": " MODERN ME LIME:  Salt - 220g",  "price": "R45", "img":"../img/mordern me range lime.png", "type":"salt"},
    { "id": 3, "name": " MODERN ME PINK:  Salt - 220g",  "price": "R78", "img":"../img/mordern me range pink.png", "type":"salt"},
    { "id": 4, "name": " MIRACLE OIL: MOHLOLO - 30ml",  "price": "R87", "img":"../img/miracle oil mohlolo.png", "type":"oil"},
    { "id": 5, "name": " Essential Oil: Skin cleansing - 30ml",  "price": "R67", "img":"../img/Essential Oil Skin cleansing.png", "type":"oil"},
    { "id": 6, "name": " Essential Oil: Uplifting Blend - 10ml",  "price": "R87", "img":"../img/Essential Oil Skin uplifting.png", "type":"oil"},
    { "id": 7, "name": " Essential Oil: Soothing Blend - 10ml",  "price": "R98", "img":"../img/Essential Oil Skin Soothing.png", "type":"oil"},
    { "id": 8, "name": " Essential Oil: Protective Blend - 10ml",  "price": "R67", "img":"../img/Essential Oil Skin protective.png", "type":"oil"},
    { "id": 9, "name": " Essential Oil: Calming Blend - 10ml",  "price": "R56", "img":"../img/Essential Oil Skin protective.png", "type":"oil"},
    { "id": 10, "name": " Essential Oil:Shield Blend - 10ml",  "price": "R78", "img":"../img/Essential Oil Skin health shield.png", "type":"oil"}
    ] 

    export default function getItem(itemId) {
        return items.find(
          (item) => item.id === itemId
        );
      }