// Create a function that takes in x parameters, assigns a value
// to each wine based on that input. Adds the total value of each 
// wine, and returns the name of the wine with the highest value.

module.exports = {
  wineMatch(v, c, m, d){
    var veggies = ["asparagus", "squash", "chilli peppers", "mushrooms", "tomatoes", "onions", "broccoli", "grilled peppers"];
    var cheese = ["feta", "asiago", "havarti", "gouda", "goat cheese", "cheddar", "parmesan", "romano", "gorgonzola", "aged cheese"];
    var meat = ["chicken", "turkey", "veal", "duck", "lamb", "filet mignon", "pepperoni", "spicy sausage", "steak", "ribeye", "beef", "pork", "scallops", "shrimp", "crab", "trout", "tuna", "salmon", "swordfish", "blackened fish"];
    var dessert = ["sorbet", "vanilla pudding", "apple pie", "creme brulee", "cake", "dark chocolate", "bittersweet", "carrot cake"];

    var sauvignonBlanc = 0;
    var chardonnay = 0;
    var riesling = 0;
    var pinotNoir = 0;
    var syrah = 0;
    var merlot = 0;
    var cabernetSanvignon = 0;
    var zinfandel = 0;
    if (v === "asparagus") {sauvignonBlanc += .2}
      else if (v === "squash") {chardonnay += .2}
      else if (v === "chilli peppers") {riesling += .2} 
      else if (v === "mushrooms") {pinotNoir += .2}
      else if (v === "tomatoes") {syrah += .2}
      else if (v === "onions") {merlot += .2}
      else if (v === "broccoli") {cabernetSanvignon += .2}
      else if (v === "grilled peppers") {zinfandel += .2};

    if (c === "feta") {sauvignonBlanc += .2}
      else if (c === "asiago") {chardonnay += .2}
      else if (c === "havarti") {chardonnay += .2; riesling += .2}
      else if (c === "gouda") {riesling += .2}
      else if (c === "goat cheese") {pinotNoir += .2}
      else if (c === "cheddar") {syrah += .2; cabernetSanvignon += .2}
      else if (c === "parmesan") {merlot += .2}
      else if (c === "romano") {merlot += .2} 
      else if (c === "gorgonzola") {cabernetSanvignon += .2}
      else if (c === "aged cheese") {zinfandel += .2}

    if (m === "chicken") {sauvignonBlanc += .45; chardonnay += 45}
      else if (m === "turkey") {sauvignonBlanc += .45}
      else if (m === "veal") {chardonnay += .45}
      else if (m === "duck") {riesling += .45; zinfandel += .45}
      else if (m === "lamb") {pinotNoir += .45}
      else if (m === "filet mignon") {pinotNoir +=.45}
      else if (m === "pepperoni") {syrah += .45}
      else if (m === "spicy sausage") {syrah += .45; zinfandel += .45}
      else if (m === "steak") {merlot += .45}
      else if (m === "ribeye") {cabernetSanvignon += .45}
      else if (m === "beef") {cabernetSanvignon += .45; zinfandel +=.45}
      else if (m === "pork") {zinfandel += .45}
      else if (m === "scallops") {sauvignonBlanc += .45}
      else if (m === "shrimp") {chardonnay += .45}
      else if (m === "crab") {chardonnay += .45}
      else if (m === "trout") {riesling += .45}
      else if (m === "tuna") {pinotNoir += .45; merlot += .45; cabernetSanvignon += .45}
      else if (m === "salmon") {syrah += .45}
      else if (m === "swordfish") {merlot += .45}
      else if (m === "blackened fish") {zinfandel += .45}

    if (d === "sorbet") {sauvignonBlanc += .15}
      else if (d === "vanilla pudding") {chardonnay += .15}
      else if (d === "apple pie") {riesling += .15}
      else if (d === "creme brulee") {pinotNoir += .15}
      else if (d === "cake") {syrah += .15}
      else if (d === "dark chocolate") {merlot += .15}
      else if (d === "bittersweet") {cabernetSanvignon += .15}
      else if (d === "carrot cake") {zinfandel += .15}

    var max = Math.max(sauvignonBlanc, chardonnay, riesling, pinotNoir, syrah, merlot, cabernetSanvignon, zinfandel)

    if (max === sauvignonBlanc) {return "Sauvignon Blanc"}
      else if (max === chardonnay) {return "Chardonnay"}
      else if (max === riesling) {return "Riesling"}
      else if (max === pinotNoir) {return "Pinot Noir"}
      else if (max === syrah) {return "Syrah"}
      else if (max === merlot) {return "Merlot"}
      else if (max === cabernetSanvignon) {return "Cabernet Sanvignon"}
      else if (max === zinfandel) {return "Zinfandel"}
  }
};
