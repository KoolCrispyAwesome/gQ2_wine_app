exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('matches').del(), 

    // Inserts seed entries
    knex('matches').insert({
      id: 1,
      name: 'Sauvignon Blanc',
      image: 'http://www.cakebread.com/system/uploads/wine/large_bottle_image/12/Sized_SB_bottleLarge.png'
    }),
    knex('matches').insert({
      id: 2,
      name: 'Chardonnay',
      image: 'http://www.gaydavineyards.com/sites/default/files/cepage_chardonnay_2014_1_1.png'
    }),
    knex('matches').insert({
      id: 3,
      name: 'Riesling',
      image: 'http://www.robertmondaviprivateselection.com/images/riesling-bt.png'
    }),
    knex('matches').insert({
      id: 4,
      name: 'Pinot Noir',
      image: 'http://www.dreamingtreewines.com/assets/images/wine/pinotNoirBottle.png'
    }),
    knex('matches').insert({
      id: 5,
      name: 'Syrah',
      image: 'https://www.wolfblass.com/~/media/Images/WolfBlass/Wines/Gold-Label/Wolf-Blass-Gold-Label-Adelaide-Hills-Syrah.png?h=800&la=en-CA&w=286'
    }),
    knex('matches').insert({
      id: 6,
      name: 'Merlot',
      image: 'http://www.pighin.com/sites/default/files/vini/grave-merlot_0.png'
    }),
    knex('matches').insert({
      id: 7,
      name: 'Cabernet Sanvignon',
      image: 'http://waterbrook.com/sites/default/files/waterbrookcabsauvnvbshr1png.png'
    }),
    knex('matches').insert({
      id: 8,
      name: 'Zinfandel',
      image: 'http://www.woodbridgewines.com/images/woodbridge-white-zin.png'
    })
  );
};