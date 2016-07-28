var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  events:{
    'click': 'showflights'
  },

  render: function(){
    // debugger;
    var content = $('#default').html();
    this.$el.html( content);
    //  this.collection.each(function (f){
    //    var flightListView = new app.FlightListView({model: f});
    //    flightListView.render();
    //  });
  },
  showflights: function(){

      //  var content = $('#default').html();
      //  this.$el.html( content);
      // var flightViewTemplate = $("#flightTable").html();
      // var flightViewTemplater = _.template(flightViewTemplate);
      // this.$el.html(flightViewTemplater( this.model.toJSON() ));
      $('.searchTable').show();
      var flightlist = new app.FlightView();
      flightlist.render();

  }
});
