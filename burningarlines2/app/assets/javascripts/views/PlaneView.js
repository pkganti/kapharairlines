var app = app || {};

app.PlaneView = Backbone.View.extend({
    el: "#planeInfo",

    events: {
      'click button': 'alertMessage'
    },


    render: function(planeId) {

        $(".search").remove();

        var planeViewTemplate = $("#planeInfo").html();
        var planeViewTemplater = _.template(planeViewTemplate);

        // var flight = app.showflights.findWhere({
        //     plane_id: parseInt(planeId)
        // });
        // console.log(flight);

        var plane = app.showplanes.findWhere({
            id: parseInt(planeId)
        });
        var rowCount = plane.get("row");
        console.log(rowCount);
        var columnCount = plane.get("column");
        console.log(columnCount);


        app.seats = $('#seats').flexiSeats({
            rows: columnCount,
            columns: rowCount,
            multiple: false,
            booked: ['1-6', '4-9']
        });

        getBlocks();

        $('#btnDraw').click(function() {
            var _rows = parseInt($('#txtRows').val());
            var _cols = parseInt($('#txtCols').val());
        });

        $('#btnAddBlock').click(function() {
            var _label = $('#txtBlockLabel').val();
            var _price = $('#txtBlockPrice').val();
            var _color = $('#txtBlockColor').val();

            app.seats.addBlock(_label, _price, _color);
            getBlocks();
        });

        function getBlocks() {
            $('#lstBlocks').empty();
            $.each(app.seats.getBlocks(), function(i, v) {
                var _block = $('<option value="' + this.label + '">' + this.label + ' (' + this.price + ' Rs.)</option>');
                $('#lstBlocks').append(_block);
            });
        }

        $('.flexiSeatsMode').click(function() {
            app.seats.setMultiple($(this).val());
        });

        $('#btnDefineGold').click(function() {
            var _label = $('#lstBlocks').val();
            app.seats.defineBlock(_label, app.seats.getSelected());
        });

        $('.seat').tooltipster({
            offsetY: -10,
            theme: 'tooltipster-shadow'
        });
},
 alertMessage: function(){
   alert("You have selected seat:" + app.seats.getSelected());
 }
});
