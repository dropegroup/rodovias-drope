'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var servicesModule = angular.module('myApp.services', []);
servicesModule.value('version', '0.1');

servicesModule.factory('drawMap', function() {
  return function(estado, ano, mes) {
    var data;
    // data = [ { 
    //   'cidade': 'sao paulo',  'estado': 'SP', 'ocorrencias': 10000000, 'latitude': -23.5489433, 'longitude': -46.6388182 }, {
    //   'cidade': 's j campos', 'estado': 'SP', 'ocorrencias':   600000, 'latitude': -23.1790801, 'longitude': -45.88724759999999 }, {
    //   'cidade': 'guarulhos',  'estado': 'SP', 'ocorrencias':  1200000, 'latitude': -23.4633503, 'longitude': -46.5333792 }, {
    //   'cidade': 'taubaté',    'estado': 'SP', 'ocorrencias':   250000, 'latitude': -23.0309385, 'longitude': -45.5483236 }, {
    //   'cidade': 'resende',        'estado': 'RJ', 'ocorrencias':  200000, 'latitude': -22.4626523, 'longitude': -44.4555528 }, {
    //   'cidade': 'rio de janeiro', 'estado': 'RJ', 'ocorrencias': 5000000, 'latitude': -22.9035393, 'longitude': -43.2095869 } ];
    // data = [{"estado":"SP","cidade":"APARECIDA","latitude":-22.8482,"longitude":-45.2273,"ocorrencias":17},{"estado":"SP","cidade":"ARUJA","latitude":-23.3965,"longitude":-46.3214,"ocorrencias":5},{"estado":"SP","cidade":"ATIBAIA","latitude":-23.1161,"longitude":-46.5563,"ocorrencias":31},{"estado":"SP","cidade":"BADY BASSITT","latitude":-20.92,"longitude":-49.447,"ocorrencias":9},{"estado":"SP","cidade":"BARRA DO TURVO","latitude":-24.758,"longitude":-48.5049,"ocorrencias":81},{"estado":"SP","cidade":"BRAGANCA PAULISTA","latitude":-22.9512,"longitude":-46.5406,"ocorrencias":8},{"estado":"SP","cidade":"CACAPAVA","latitude":-23.102,"longitude":-45.7069,"ocorrencias":29},{"estado":"SP","cidade":"CACHOEIRA PAULISTA","latitude":-22.6737,"longitude":-44.9972,"ocorrencias":11},{"estado":"SP","cidade":"CAJATI","latitude":-24.7268,"longitude":-48.1138,"ocorrencias":50},{"estado":"SP","cidade":"CANAS","latitude":-22.7049,"longitude":-45.0545,"ocorrencias":2},{"estado":"SP","cidade":"CRUZEIRO","latitude":-22.5745,"longitude":-44.9626,"ocorrencias":4},{"estado":"SP","cidade":"EMBU","latitude":-23.6492,"longitude":-46.8526,"ocorrencias":19},{"estado":"SP","cidade":"GUAICARA","latitude":-21.6255,"longitude":-49.7981,"ocorrencias":3},{"estado":"SP","cidade":"GUAIMBE","latitude":-21.9108,"longitude":-49.8975,"ocorrencias":1},{"estado":"SP","cidade":"GUARAREMA","latitude":-23.4123,"longitude":-46.0409,"ocorrencias":5},{"estado":"SP","cidade":"GUARATINGUETA","latitude":-22.8159,"longitude":-45.1933,"ocorrencias":11},{"estado":"SP","cidade":"GUARULHOS","latitude":-23.4634,"longitude":-46.5334,"ocorrencias":138},{"estado":"SP","cidade":"ICEM","latitude":-20.3416,"longitude":-49.1983,"ocorrencias":6},{"estado":"SP","cidade":"ITAPECERICA DA SERRA","latitude":-23.7175,"longitude":-46.8495,"ocorrencias":22},{"estado":"SP","cidade":"JACAREI","latitude":-23.3055,"longitude":-45.967,"ocorrencias":29},{"estado":"SP","cidade":"JACI","latitude":-20.8837,"longitude":-49.5707,"ocorrencias":2},{"estado":"SP","cidade":"JACUPIRANGA","latitude":-21.6925,"longitude":-48.0022,"ocorrencias":9},{"estado":"SP","cidade":"JOSE BONIFACIO","latitude":-21.0529,"longitude":-49.6891,"ocorrencias":10},{"estado":"SP","cidade":"JUQUIA","latitude":-24.3214,"longitude":-47.6373,"ocorrencias":8},{"estado":"SP","cidade":"JUQUITIBA","latitude":-23.9313,"longitude":-47.0692,"ocorrencias":25},{"estado":"SP","cidade":"LAVRINHAS","latitude":-22.5634,"longitude":-44.9241,"ocorrencias":4},{"estado":"SP","cidade":"LINS","latitude":-21.6794,"longitude":-49.7433,"ocorrencias":2},{"estado":"SP","cidade":"LORENA","latitude":-22.7272,"longitude":-45.1199,"ocorrencias":14},{"estado":"SP","cidade":"MAIRIPORA","latitude":-23.3184,"longitude":-46.5872,"ocorrencias":36},{"estado":"SP","cidade":"MARILIA","latitude":-22.2203,"longitude":-49.9481,"ocorrencias":10},{"estado":"SP","cidade":"MIRACATU","latitude":-24.2835,"longitude":-47.4589,"ocorrencias":61},{"estado":"SP","cidade":"MIRASSOL","latitude":-20.8118,"longitude":-49.5124,"ocorrencias":3},{"estado":"SP","cidade":"NOVA GRANADA","latitude":-20.5338,"longitude":-49.3137,"ocorrencias":2},{"estado":"SP","cidade":"OCAUCU","latitude":-22.4424,"longitude":-49.9191,"ocorrencias":6},{"estado":"SP","cidade":"ONDA VERDE","latitude":-20.6072,"longitude":-49.2972,"ocorrencias":5},{"estado":"SP","cidade":"OURINHOS","latitude":-22.9831,"longitude":-49.8571,"ocorrencias":1},{"estado":"SP","cidade":"PARIQUERA-ACU","latitude":-24.7102,"longitude":-47.884,"ocorrencias":6},{"estado":"SP","cidade":"PINDAMONHANGABA","latitude":-22.9236,"longitude":-45.4598,"ocorrencias":23},{"estado":"SP","cidade":"PIQUETE","latitude":-22.6141,"longitude":-45.1774,"ocorrencias":6},{"estado":"SP","cidade":"PROMISSAO","latitude":-21.5365,"longitude":-49.8596,"ocorrencias":7},{"estado":"SP","cidade":"QUELUZ","latitude":-22.5375,"longitude":-44.7746,"ocorrencias":10},{"estado":"SP","cidade":"REGISTRO","latitude":-24.4952,"longitude":-47.8456,"ocorrencias":16},{"estado":"SP","cidade":"ROSEIRA","latitude":-22.8985,"longitude":-45.3058,"ocorrencias":5},{"estado":"SP","cidade":"SALTO GRANDE","latitude":-22.8816,"longitude":-49.9622,"ocorrencias":2},{"estado":"SP","cidade":"SANTA ISABEL","latitude":-23.3164,"longitude":-46.2236,"ocorrencias":8},{"estado":"SP","cidade":"SAO JOSE DO RIO PRETO","latitude":-20.8202,"longitude":-49.3797,"ocorrencias":52},{"estado":"SP","cidade":"SAO JOSE DOS CAMPOS","latitude":-23.1791,"longitude":-45.8872,"ocorrencias":90},{"estado":"SP","cidade":"SAO LOURENCO DA SERRA","latitude":-23.8557,"longitude":-46.9406,"ocorrencias":10},{"estado":"SP","cidade":"SAO PAULO","latitude":-23.5489,"longitude":-46.6388,"ocorrencias":73},{"estado":"SP","cidade":"SAO PEDRO DO TURVO","latitude":-22.7395,"longitude":-49.7319,"ocorrencias":2},{"estado":"SP","cidade":"TABOAO DA SERRA","latitude":-23.6078,"longitude":-46.7529,"ocorrencias":25},{"estado":"SP","cidade":"TAUBATE","latitude":-23.0309,"longitude":-45.5483,"ocorrencias":25},{"estado":"SP","cidade":"UBATUBA","latitude":-23.4338,"longitude":-45.0856,"ocorrencias":15},{"estado":"SP","cidade":"VARGEM","latitude":-22.8891,"longitude":-46.4144,"ocorrencias":9}]

    var estado_uri = (estado == undefined || estado == '') ? '' : '/estado/' + estado;
    var ano_uri    = (ano    == undefined || ano == '') ? '' : '/ano/'    + ano;
    var mes_uri    = (mes    == undefined || mes == '') ? '' : '/mes/'    + mes;
    var url = 'http://dprf.herokuapp.com/ocorrencias/ranking/' + estado_uri + ano_uri + mes_uri;
    $.getJSON(url , function(result) { 
      data = result;

      // var geocoder = new google.maps.Geocoder();
      // geocoder.geocode( { 'address': 'Sao Paulo, SP, Brazil' },
      //     function(result, status) { alert(result[0].geometry.location) });

      var latitudes  = data.map(function(x) { return x['latitude'] });
      var longitudes = data.map(function(x) { return x['longitude'] });
      var max_latitude = Math.max.apply(Math, latitudes);
      var min_latitude = Math.min.apply(Math, latitudes);
      var max_longitude = Math.max.apply(Math, longitudes);
      var min_longitude = Math.min.apply(Math, longitudes);
      var mapOptions = {
        // zoom: estado == undefined ? 4 : 7,
        // center: new google.maps.LatLng((max_latitude + min_latitude) / 2, (max_longitude + min_longitude) / 2),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      map.fitBounds(new google.maps.LatLngBounds(
          new google.maps.LatLng(min_latitude, min_longitude),
          new google.maps.LatLng(max_latitude, max_longitude)));

      var ocorrencias = data.map(function(x) { return x['ocorrencias'] });

      var infoWindow = new google.maps.InfoWindow();
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var options = {
          map: map,
          center: new google.maps.LatLng(item['latitude'], item['longitude']),
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: "#FF0000",
          fillOpacity: 0.75,
          radius: 2000 + Math.sqrt(item['ocorrencias'] / 3.141592 * 1000000)
        };
        var circle = new google.maps.Circle(options);

        var content = 'Município: <strong>' + item['cidade'] + ' / ' + item['estado'] + '</strong><br/>' + 'Ocorrências: <strong>' + item['ocorrencias'] + '</strong>';
        google.maps.event.addListener(circle, 'click', (function(content, position) {
          return function() {
            infoWindow.setContent(content);
            infoWindow.setPosition(position);
            infoWindow.open(map);
          }
        })(content, options.center));
      }
    });
  }
});
