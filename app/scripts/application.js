app = Davis(function () {
  this.configure(function () {
    this.generateRequestOnPageLoad = true
  });
  
  this.get('/', function() {
    var html = "\
      <h1>Js Test App</h1>\
      <p><a href='/reservations'>reservations</a></p>";
    $(".container").html($(html));
  });
  
  this.get('/reservations', function() {
    var html = "<h1>Reservations</h1>";
    Reservation.fetch_all(function(reservations) {
      _(reservations).
        each(function(reservation) {
          html += "<p>" + reservation.location + "</p>";
        });
      $(".container").html($(html));
    });
  });
  
  this.get('/reservation/:id', function(id) {
    $(".container").html($("<h1>reservation</h1>"));
  })
});
