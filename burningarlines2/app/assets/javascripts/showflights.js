
_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {}; // Namespacing


app.router = new app.AppRouter();

$(document).ready(function () { // Wait until the document has finished loading

   // Abort and don't start the Backbone app if we're not on the Backbone single page application page.




   if ( $('#main').length === 0 ) { return; }
   //
  //  var url = 'http://localhost:3000/flights';

   app.showflights = new app.Flights(); // Instantiate our new empty collection of posts
   app.showflights.fetch().done(function () {
     var originArr=[];
     var destArr=[];
     var jsondata = app.showflights.models;
     _.each(jsondata, function(p){

         originArr.push(p.attributes.origin);

     });
     _.each(jsondata, function(p){
       destArr.push(p.attributes.destination);
     });
     originArr = _.uniq(originArr);
     destArr = _.uniq(destArr);
     console.log(originArr);
     console.log(destArr);

      _.each(originArr, function(origin){
        var places = $("<option>");
            places.attr("value", origin);
            places.text(origin);
            $(".from").append(places);
        });
        _.each(destArr, function(destination){
          var places = $("<option>");
              places.attr("value", destination);
              places.text(destination);
              $(".to").append(places);
          });

     Backbone.history.start({ pushState: false /* Modernizr.history */ }); // Starts the router
   });

});
