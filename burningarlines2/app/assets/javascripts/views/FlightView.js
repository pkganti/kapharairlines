var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#flightlist',

  events: {
    'click button': 'showTable'
  },

  render: function() {
    var flightViewTemplate = $("#flightTable").html();
    var flightViewTemplater = _.template(flightViewTemplate);
    this.$el.html(flightViewTemplater( this.model.toJSON() ));
  },

  showTable: function(){
    console.log('ldjsfjeiewj');
  }
});
