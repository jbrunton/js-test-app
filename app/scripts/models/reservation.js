(function () {
  var api = 'http://js-test-api.herokuapp.com/';
  
  Reservation = function(data) {
    this.deserialize(data);
  }

  Reservation.prototype.deserialize = function(data) {
    this.location = data.location;
  }

  Reservation.fetch = function(id) {
    $.getJSON(
      api + 'reservation/' + id + '.json',
      function(data) {
        reservation = new Reservation(data);
        success(reservation);
      }
    );
  }

  Reservation.fetch_all = function(success) {
    $.getJSON(
      api + 'reservations.json',
      function(data) {
        reservations = _(data).
          map(function(data) {
            return new Reservation(data);
          });
        success(reservations);
      }
    );
  }

  // refresh with data from server
  Reservation.prototype.refresh = function() {
    var self = this;
    $.getJSON(
      api + 'reservation/' + id + '.json',
      function(data) {
        self.deserialize(data);
      }
    );
  }
})();
