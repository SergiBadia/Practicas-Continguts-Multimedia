/**
 * Created by boyander on 11/10/16.
 */

var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));




//Use pictures for our products - Punto 5
var pics = [new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/09/00110647903458____1__516x640.jpg",179.00,5),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/07/00110664403796____1__516x640.jpg",199.00,5),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/07/00110640706148____1__516x640.jpg",145.90,4),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/07/00110659101041____1__516x640.jpg",195.00,2),
            new Item("http://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201411/17/00110659905888____2__516x640.jpg",369.00,1),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/07/00110661001544____1__516x640.jpg",189.00,5),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201609/23/00110637901918____2__516x640.jpg",119.00,8),
            new Item("https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201606/14/00110642804354____1__516x640.jpg",399.00,6),
            new Item("http://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201507/24/00110661208024____1__516x640.jpg",399.00,1),


 ];

//Use API500px required pictures for our products - Punto 4
/*var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");
api500px.photos.searchByTerm("Barcelona",{'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results){
    // Do something

    pics = results.photos.map(function(a){
        // Compose object to be used in show items template
        return new Item(a.image_url);
    });
});

*/
// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{
        pics: pics
    });
});




// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});