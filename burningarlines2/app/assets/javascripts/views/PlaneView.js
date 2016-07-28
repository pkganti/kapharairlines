var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: "#planeInfo",

  render: function(planeId){
// debugger;
    var planeViewTemplate = $("#planeInfo").html();
    var planeViewTemplater = _.template(planeViewTemplate);

    var plane = app.showplanes.findWhere({id: parseInt(planeId)});
    var rows = plane.get("row");
    console.log(rows);
    var columns = plane.get("column");
    console.log(columns);
    

  }
});
