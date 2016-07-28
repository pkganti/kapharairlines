var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: "#planeInfo",

  render: function(){
    console.log("I m here");
  },

  selectSeat: function(){
        $(document).ready(function () {

            var seats = $('#seats').flexiSeats({
                rows: 4,
                columns: 10,
                multiple: false,
                booked: ['1-6', '4-9']
            });

            getBlocks();

            $('#btnDraw').click(function () {
                var _rows = parseInt($('#txtRows').val());
                var _cols = parseInt($('#txtCols').val());
            });

            $('#btnAddBlock').click(function () {
                var _label = $('#txtBlockLabel').val();
                var _price = $('#txtBlockPrice').val();
                var _color = $('#txtBlockColor').val();

                seats.addBlock(_label, _price, _color);
                getBlocks();
            });

            function getBlocks() {
                $('#lstBlocks').empty();
                $.each(seats.getBlocks(), function (i, v) {
                    var _block = $('<option value="' + this.label + '">' + this.label + ' (' + this.price + ' Rs.)</option>');
                    $('#lstBlocks').append(_block);
                });
            }

            $('.flexiSeatsMode').click(function () {
                seats.setMultiple($(this).val());
            });

            $('#btnDefineGold').click(function () {
                var _label = $('#lstBlocks').val();
                seats.defineBlock(_label, seats.getSelected());
            });

            $('.seat').tooltipster({
                offsetY: -10,
                theme: 'tooltipster-shadow'
            });
        });

  }
});
