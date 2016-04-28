exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('wines').del(), 

    // Inserts seed entries
    knex('wines').insert({
      id: 1,
      name: 'Sauvignon Blanc',
      image: 'http://www.cakebread.com/system/uploads/wine/large_bottle_image/12/Sized_SB_bottleLarge.png',
      pairing: 'Sauvignon blanc goes well with delicately flavored foods or slightly acidic dishes. It does well with grilled or sautéed foods as well raw vegetables.',
      about: 'Sauvignon blanc is a green-skinned grape variety that originates from the Bordeaux region of France. The grape most likely gets its name from the French words sauvage ("wild") and blanc ("white") due to its early origins as an indigenous grape in South West France. It is possibly a descendant of Savagnin. Sauvignon blanc is planted in many of the world\'s wine regions, producing a crisp, dry, and refreshing white varietal wine.'
    }),
    knex('wines').insert({
      id: 2,
      name: 'Chardonnay',
      image: 'http://www.gaydavineyards.com/sites/default/files/cepage_chardonnay_2014_1_1.png',
      pairing: 'Chardonnay goes well with full flavored dishes which have been grilled, roasted or sautéed. Its full flavor and complexity goes well with cool-weather and upscale meals.',
      about: 'Chardonnay is a green-skinned grape variety used to make white wine. It originated in the Burgundy wine region of eastern France,. The Chardonnay grape itself is very neutral, with many of the flavors commonly associated with the grape being derived from such influences as terroir and oak. It is vinified in many different styles, from the lean, crisply mineral wines of Chablis, France, to New World wines with oak, and tropical fruit flavors. In cool climates (such as Chablis and the Carneros AVA of California), Chardonnay tends to be medium to light body with noticeable acidity and flavors of green plum, apple, and pear.'
    }),
    knex('wines').insert({
      id: 3,
      name: 'Riesling',
      image: 'http://www.robertmondaviprivateselection.com/images/riesling-bt.png',
      pairing: 'Riesling pairs wells with sweet and spicy dishes. The slight sweetness of many Rieslings tame the heat of spicy Asian and Indian dishes.',
      about: 'Riesling is a white grape variety which originated in the Rhine region of Germany. Riesling is an aromatic grape variety displaying flowery, almost perfumed, aromas as well as high acidity. It is used to make dry, semi-sweet, sweet, and sparkling white wines. Riesling wines tend to exhibit apple and tree fruit notes with noticeable levels of acidity that are sometimes balanced with residual sugar. A late-ripening variety that can develop more citrus and peach notes is grown in warmer climates.'
    }),
    knex('wines').insert({
      id: 4,
      name: 'Pinot Noir',
      image: 'http://www.dreamingtreewines.com/assets/images/wine/pinotNoirBottle.png',
      pairing: 'Pinot Noir does well with lighter flavors and mild red meats. Recipes made with ingredients like mushrooms and truffles taste great with red wine like Pinot Noir.',
      about: 'Pinot Noir is a red wine grape variety of the species Vitis vinifera. The name may also refer to wines created predominantly from Pinot Noir grapes. The name is derived from the French words for pine and black; the pine alluding to the grape variety having tightly clustered, pine cone-shaped bunches of fruit. Pinot Noir grapes are grown around the world, mostly in the cooler regions, but the grape is chiefly associated with the Burgundy region of France.'
    }),
    knex('wines').insert({
      id: 5,
      name: 'Syrah',
      image: 'https://www.wolfblass.com/~/media/Images/WolfBlass/Wines/Gold-Label/Wolf-Blass-Gold-Label-Adelaide-Hills-Syrah.png?h=800&la=en-CA&w=286',
      pairing: 'Syrah matches well with heavily spiced dishes, such as entrees that include pepperoni and spicy sausage.',
      about: 'Syrah also known as Shiraz is a dark-skinned grape variety grown throughout the world and used primarily to produce red wine. The style and flavor profile of wines made from Syrah is influenced by the climate where the grapes are grown with moderate climates, tending to produce medium to full-bodied wines with medium-plus to high levels of tannins and flavors of blackberry, mint and black pepper notes.'
    }),
    knex('wines').insert({
      id: 6,
      name: 'Merlot',
      image: 'http://www.pighin.com/sites/default/files/vini/grave-merlot_0.png',
      pairing: 'Merlot pairs well with grilled grilled meats and charred meats.  Its softness and "fleshiness", combined with its earlier ripening, makes Merlot a perfect match with the bold, smokey taste of the grill!',
      about: 'Merlot is a dark blue-colored wine grape variety, that is used as both a blending grape and for varietal wines. The name Merlot is thought to be a diminutive of merle, the French name for the blackbird, probably a reference to the color of the grape.'
    }),
    knex('wines').insert({
      id: 7,
      name: 'Cabernet Sanvignon',
      image: 'http://waterbrook.com/sites/default/files/waterbrookcabsauvnvbshr1png.png',
      pairing: 'Cabernet Sanvignon pairs extremely well with juicy, red meats as well as meaty fish, such as Tuna.',
      about: "Cabernet Sauvignon is one of the world's most widely recognized red wine grape varieties. It is grown in nearly every major wine producing country among a diverse spectrum of climates. Despite its prominence in the industry, the grape is a relatively new variety, the product of a chance crossing between Cabernet Franc and Sauvignon blanc during the 17th century in southwestern France. Its popularity is often attributed to its ease of cultivation."
    }),
    knex('wines').insert({
      id: 8,
      name: 'Zinfandel',
      image: 'http://www.woodbridgewines.com/images/woodbridge-white-zin.png',
      pairing: 'Zinfandel’s robust flavor keeps up with full-flavored, spicy dishes, and red meats, such as spicy sausage and beef.',
      about: "Zinfandel is a variety of black-skinned wine grape. The grapes typically produce a robust red wine, although in the United States a semi-sweet rosé (blush-style) wine called White Zinfandel has six times as many sales as the red wine. The grape's high sugar content can be fermented into levels of alcohol exceeding 15 percent!"
    })
  );
};