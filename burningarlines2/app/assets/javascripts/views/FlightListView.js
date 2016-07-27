var app = app ||{};

app.flightListView = Backbone.View.extend({
  tagName: 'td',
  events:{
    'click': 'navigateToFLight'
  },
  render: function(){
    console.log("Hi there");
    this.$el.text('Phani here');
    this.$el.appendTo('#flightNumber');
  },
  navigateToFLight: function(){
    app.router.navigate('/flight' + this.model.get('id'), true);
  }
});
