const user_seeds = [
    {name: 'Joshua J.', profilephoto: 'https://avatars0.githubusercontent.com/u/33384155?s=460&v=4', counts: '9999,9999,6', location: 'San Diego'},
    {name: 'Aldo H.', profilephoto: 'https://avatars2.githubusercontent.com/u/32969152?s=460&v=4', counts: '5,37,10', location: 'Los Angeles'},
    {name: 'Arthur R.', profilephoto: "https://avatars3.githubusercontent.com/u/34402403?s=460&v=4", counts: '7,7,7', location: 'Russia'},
    {name: 'Caden W.', profilephoto: "https://avatars0.githubusercontent.com/u/35724524?s=460&v=4", counts: '99,69,66', location: 'Los Angeles'},
    {name: 'Cole M.', profilephoto: "https://avatars0.githubusercontent.com/u/34247773?s=460&v=4", counts: '23,9,9', location: 'Los Angeles'},
    {name: 'David E.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '100,100,100', location: 'Los Angeles'},
    {name: 'Gus H.', profilephoto: 'https://avatars2.githubusercontent.com/u/21264642?s=460&v=4', counts: '9,6,9', location: 'Virginia'},
    {name: 'Hana D.', profilephoto: 'https://avatars2.githubusercontent.com/u/35520158?s=460&v=4', counts: '23,11,99', location: 'Oregon'},
    {name: 'Jacob M.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '12,7,12', location: 'Los Angeles'},
    {name: 'Jamison L.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '31,25,12', location: 'Los Angeles'},
    {name: 'John M.', profilephoto: 'https://avatars3.githubusercontent.com/u/836262?s=460&v=4', counts: '80,45,52', location: 'Coding land'},
    {name: 'Kevin C.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '13,42,34', location: 'The Amazon'},
    {name: 'Kevin J.', profilephoto: 'https://avatars2.githubusercontent.com/u/16075113?s=460&v=4', counts: '46,51,82', location: 'Berkeley'},
    {name: 'Kyle M.', profilephoto: 'https://avatars1.githubusercontent.com/u/35908313?s=460&v=4', counts: '300,27,83', location: 'Los Angeles'},
    {name: 'Lore W.', profilephoto: 'https://avatars1.githubusercontent.com/u/28396381?s=460&v=4', counts: '56, 74, 39', location: 'Axolotl land'},
    {name: 'Paolo R.', profilephoto: 'https://avatars0.githubusercontent.com/u/33631935?s=460&v=4', counts: '45,32,66', location: 'Philippines'},
    {name: 'Brent D.', profilephoto: 'https://avatars1.githubusercontent.com/u/28748598?s=460&v=4', counts: '500,400,300', location: 'HRLA 23'},
    {name: 'Joseph A.', profilephoto: 'https://avatars3.githubusercontent.com/u/35905860?s=460&v=4', counts: '45,54,45', location: 'Los Angeles'},
    {name: 'Kevin T.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '100,300,100', location: 'Irvine'},
    {name: 'Nick C.', profilephoto: 'https://avatars3.githubusercontent.com/u/35505015?s=460&v=4', counts: '32,54,53', location: 'Los Angeles'},
    {name: 'Peter H.', profilephoto: 'https://avatars0.githubusercontent.com/u/35724524?s=460&v=4', counts: '100,100,100', location: 'Los Angeles'},
    {name: 'Sury V.', profilephoto: 'https://avatars2.githubusercontent.com/u/34047095?s=460&v=4', counts: '48,93,100', location: 'Los Angeles'},
]

const photo_seeds = [
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/LL_ibUp-R_2-iXkdO4V4-Q/o.jpg', review_id: 1, restaurant_id: 1},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/FBoLLCJsOE2lL-Mbcy9S9w/o.jpg', review_id: 1, restaurant_id: 1},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg', review_id: 2, restaurant_id: 1},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/D5iz3-3XXFlzNbmI0ft6lg/o.jpg', review_id: 4, restaurant_id: 2},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/Kau2nVXb86awQuf__6ne1Q/o.jpg', review_id: 4, restaurant_id: 2},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/YMZDvRjbbtvR23_n1HGB0w/o.jpg', review_id: 6, restaurant_id: 3},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/NrGw9alaEPQ-EW7aaGpxWQ/o.jpg', review_id: 6, restaurant_id: 3},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/9_Rw4GinB050sDzECTJZ7g/o.jpg', review_id: 6, restaurant_id: 3},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/htzdc0IVF8t4eE5FXyjq0Q/o.jpg', review_id: 7, restaurant_id: 3},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/yVnQkwrnl36U3LTDGWa1Ow/o.jpg', review_id: 7, restaurant_id: 3},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/R_nhNXaDugnLCTHb_HqSVw/o.jpg', review_id: 8, restaurant_id: 3},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/arHtSEJhPK-eRrJg50T9MA/o.jpg', review_id: 9, restaurant_id: 4},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/hQDnWccGdgPHJDfa4Ht5Ig/o.jpg', review_id: 9, restaurant_id: 4},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/lokjec_jQy7Quc2co4Voeg/o.jpg', review_id: 10, restaurant_id: 4},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/4PKpYavKII2S5t4LyqVLJA/o.jpg', review_id: 11, restaurant_id: 5},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/oAdfYdes8tbm7LtdLwoirg/o.jpg', review_id: 12, restaurant_id: 5},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/P4B4KHEOcCMTHX6jpomTrQ/o.jpg', review_id: 12, restaurant_id: 5},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/sIs3kIJxv0cFlWGLG-pdYw/o.jpg', review_id: 12, restaurant_id: 5},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/D5onVCpt_yd66CySfHqupQ/o.jpg', review_id: 13, restaurant_id: 5},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/bjVM7EU4EIONpApXD8H5RA/o.jpg', review_id: 13, restaurant_id: 5},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/j_uAjiI_9SfRqQlKEreq2A/o.jpg', review_id: 14, restaurant_id: 6},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/7gJk28u6Z8n38AdEjhbj1w/o.jpg', review_id: 14, restaurant_id: 6},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/4gUN0paSkCNPBqV5evvLkQ/o.jpg', review_id: 14, restaurant_id: 6},
    {src: 'https://s3-media2.fl.yelpcdn.com/bphoto/jGNsTWAg3B2eb5BRwEx1lA/o.jpg', review_id: 15, restaurant_id: 6},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/sJOKYa6_y_AodSlMBH9IbA/o.jpg', review_id: 15, restaurant_id: 6},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/nz5gTrP0MasImd1nq3o6RQ/o.jpg', review_id: 16, restaurant_id: 7},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/Hcl8zR7tBbMKKudXtzbEMA/o.jpg', review_id: 17, restaurant_id: 7},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/eH9O_dKH-y7yMUUdidSJFw/o.jpg', review_id: 17, restaurant_id: 7},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/uWPP2LXUMWa7y_vGzyb2qg/o.jpg', review_id: 18, restaurant_id: 7},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/h_4PImxJvkSl-DeCyq6uag/o.jpg', review_id: 19, restaurant_id: 8},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/TcUctJIiKw47GuHXpRfqqQ/o.jpg', review_id: 19, restaurant_id: 8},
    {src: 'https://s3-media4.fl.yelpcdn.com/bphoto/lo5mYZTGxHwfB_paQ8TiQw/o.jpg', review_id: 19, restaurant_id: 8},
    {src: 'https://s3-media2.fl.yelpcdn.com/bphoto/y4vzzB_fJpzvKnA-Ka-Lcw/o.jpg', review_id: 20, restaurant_id: 8},
    {src: 'https://s3-media1.fl.yelpcdn.com/bphoto/QbqCC1IiPS1O6nIK6734Ng/o.jpg', review_id: 20, restaurant_id: 8},
    {src: 'https://s3-media3.fl.yelpcdn.com/bphoto/75SLAExTKsx2wdm9TFr0nw/o.jpg', review_id: 21, restaurant_id: 8},
]

const restaurant_seeds = [
    {name: 'Hungry Bear'},
    {name: 'Pho ck you'},
    {name: 'Sushi Sasabune'},
    {name: 'Manhattan Beach Post'},
    {name: 'Lucha Libre Gourmet Taco Shop'},
    {name: 'Josh\'s kitchen'},
    {name: 'Ivory on Sunset'},
    {name: 'Del Frisco\'s Grill'},
]

const review_seeds = [
    {date: '06/01/2018', counts: '4,8,0', rating: 4, user_id: 1, restaurant_id: 1, description: 'I LOVE Hungry Bear. Absolutely awesome. The atmosphere of the place was comfortable af. I now feel bomb as F#!K. Bring your friends and family to Hungry Bear to try the Fries'},
    {date: '06/02/2018', counts: '3,1,5', rating: 2, user_id: 2, restaurant_id: 1, description: 'Turn around. Hungry Bear is not worth your money. The manager especially was awful. If you get the Burger, expect it to be soggy. I couldnt believe it. When my tastebuds made contact with the Fries, I felt disgusted. I have to give the place a 1 out of 5.'}, 
    {date: '06/21/2018', counts: '0,0,0', rating: 3, user_id: 17, restaurant_id: 1, description: 'Hungry Bear was the most delicious experience of my life so far. And the staff? Dont even get me started. They were excellent. The first thing I thought when I saw the menu was "yummy!" It is my distinct honor to give this place a 3 out of 5.'},
    {date: '06/31/2018', counts: '6,5,0', rating: 4, user_id: 3, restaurant_id: 2, description: 'Pho ck You was the most dank experience of my life so far. I now feel good $#!T. the Pho was filling. And with that, I can now happily die.'},
    {date: '06/11/2018', counts: '0,0,6', rating: 4, user_id: 13, restaurant_id: 2, description: 'bomb. Thats the only word I can use to describe Pho ck You. I now feel just right. The manager especially was filling. If you come here, expect to feel excellent! And with that, I can now happily die.'},
    {date: '06/21/2018', counts: '2,0,4', rating: 2, user_id: 5, restaurant_id: 3, description: 'Looking for a place to eat? Look no further. Sushi Sasabune is the place for you. the Scallop was the $#!T. the Butterfish was bomb as F#!K. Now go. Spread the word of Sushi Sasabune and their filling Blue crab roll.'},
    {date: '06/21/2018', counts: '0,6,0', rating: 5, user_id: 10, restaurant_id: 3, description: 'I LOVE Sushi Sasabune. The smell in the air as I walked inside... completely dank. I now feel excellent. It is my distinct honor to give this place a 5 out of 5.'},
    {date: '06/11/2018', counts: '7,7,7', rating: 4, user_id: 9, restaurant_id: 3, description: 'I have to give Sushi Sasabune a 2. The atmosphere of the place was commendable. The manager especially was filling. I have to give the place a 4 out of 5.'},
    {date: '06/01/2018', counts: '6,0,0', rating: 4, user_id: 12, restaurant_id: 4, description: 'delightful. Thats the only word I can use to describe Manhatten Beach Post. The atmosphere of the place was the $#!T. Absolutely just right. Bring your friends and family to Manhatten Beach Post to try the Caramel Tuile'},
    {date: '06/01/2018', counts: '0,8,0', rating: 2, user_id: 19, restaurant_id: 4, description: 'Manhatten Beach Post is the most crap place I have ever eaten at! The first thing I thought when I saw the menu was "bland!" The atmosphere of the place was $#!t. And the staff? Dont even get me started. They were repulsive. Thats why I have to give Manhatten Beach Post a 2.'},
    {date: '06/01/2018', counts: '0,10,0', rating: 5, user_id: 6, restaurant_id: 5, description: 'I LOVE Lucha Libre. the California Surfin Burrito was delightful. The smell in the air as I walked inside... completely DANK. the California Surfin Burrito was delicious. Bring your friends and family to Lucha Libre to try the California Surfin Burrito'},
    {date: '06/01/2018', counts: '3,0,2', rating: 3, user_id: 8, restaurant_id: 5, description: 'Looking for a place to eat? Look no further. Lucha Libre is the place for you. The atmosphere of the place was good $#!T. I now feel bomb as F#!K. It is my distinct honor to give this place a 3 out of 5.'},
    {date: '06/01/2018', counts: '0,7,0', rating: 1, user_id: 4, restaurant_id: 5, description: 'Dont even think about coming to Lucha Libre! The first thing I thought when I saw the menu was "distateful!" If you come here, expect to feel sour! The first thing I thought when I saw the menu was "$#!t!" All in all, just know I warned you. Dont get the California Surfin Burrito.'},
    {date: '06/01/2018', counts: '0,0,3', rating: 5, user_id: 16, restaurant_id: 6, description: 'Looking for a place to eat? Look no further. Joshs Kitchen is the place for you. I couldnt believe it. When my tastebuds made contact with the Lobster, I was in a dank place. The first thing I thought when I saw the menu was "dank!" And with that, I can now happily die.'},
    {date: '06/01/2018', counts: '5,6,7', rating: 5, user_id: 22, restaurant_id: 6, description: 'delicious. Thats the only word I can use to describe Joshs Kitchen. And the staff? Dont even get me started. They were filling. the Seabass was yummy. If you come here, expect to feel amazing! Now go. Spread the word of Joshs Kitchen and their good $#!T Seabass.'},
    {date: '06/01/2018', counts: '12,0,0', rating: 5, user_id: 14, restaurant_id: 7, description: 'the $#!T. Thats the only word I can use to describe Ivory on Sunset. If you get the Shrimp Cocktail, expect it to be yummy. I now feel the $#!T. If you get the Shrimp Cocktail, expect it to be bomb as F#!K. It is my distinct honor to give this place a 5 out of 5.'},
    {date: '06/01/2018', counts: '0,3,0', rating: 4, user_id: 21, restaurant_id: 7, description: 'Looking for a place to eat? Look no further. Ivory on Sunset is the place for you. Absolutely excellent. And the staff? Dont even get me started. They were good. Absolutely delicious. It is my distinct honor to give this place a 4 out of 5.'},
    {date: '06/01/2018', counts: '4,0,0', rating: 5, user_id: 15, restaurant_id: 7, description: 'I LOVE Ivory on Sunset. If you get the Shrimp Cocktail, expect it to be good. If you come here, expect to feel commendable! And with that, I can now happily die.'},
    {date: '06/01/2018', counts: '0,0,4', rating: 5, user_id: 16, restaurant_id: 8, description: 'Del Friscos Grille was the most bomb experience of my life so far. The manager especially was bomb. Absolutely bomb as F#!K. I now feel excellent. Bring your friends and family to Del Friscos Grille to try the Nutella Bread Pudding'},
    {date: '06/01/2018', counts: '5,0,0', rating: 3, user_id: 18, restaurant_id: 8, description: 'These are the reasons why I have to give Del Friscos Grille a 2. the Steakhouse Salad was distateful. I now feel awful. If you get the Steakhouse Salad, expect it to be bad. Thats why I have to give Del Friscos Grille a 3.'},
    {date: '06/01/2018', counts: '0,3,0', rating: 4, user_id: 20, restaurant_id: 8, description: 'I give Del Friscos Grille a well deserved 4 out of 5. I couldnt believe it. When my tastebuds made contact with the Nutella Bread Pudding, I was in a just right place. If you get the Nutella Bread Pudding, expect it to be commendable. If you come here, expect to feel excellent! Bring your friends and family to Del Friscos Grille to try the Nutella Bread Pudding'},
    {date: '06/01/2018', counts: '4,0,0', rating: 1, user_id: 7, restaurant_id: 8, description: 'Dont even think about coming to Del Friscos Grille! And the staff? Dont even get me started. They were shallow. Absolutely bad. Overall, I can go the rest of my life without ever coming back!'},
]

module.exports = {
    user_seeds: user_seeds,
    photo_seeds: photo_seeds,
    restaurant_seeds: restaurant_seeds,
    review_seeds: review_seeds
} 