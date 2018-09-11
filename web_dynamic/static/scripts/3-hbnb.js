window.onload = function () {
  $(':checkbox').css('margin-right', '10px');
  let listAmenity = [];

  $('input:checkbox').change(function () {
    if (this.checked) {
      listAmenity.push(this.dataset.name);
      $.each(listAmenity, function (index, element) {
      });
    } else {
      listAmenity.splice(listAmenity.indexOf(this.dataset.name), 1);
    }
    if (!listAmenity.length) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(listAmenity.join(', '));
    }
  });
};
$.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  data: '{}',
  contentType: 'application/json',
  success: (returnedData) => {
    returnedData.forEach((place) => {
      $('SECTION.places').append(
        '<article>' +
          '<div class="title">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night">' + place.price_by_night + '</div>' +
          '</div>' +
          '<div class="information">' +
            '<div class="max_guest">' +
              '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
              '<br />' +
              place.max_guest + (place.max_guest > 1 || place.max_guest === 0 ? ' Guests' : ' Guest') +
            '</div>' +
            '<div class="number_rooms">' +
              '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>' +
              '<br />' +
              place.number_rooms + (place.number_rooms > 1 || place.number_rooms === 0 ? ' Bedrooms' : ' Bedroom') +
            '</div>' +
            '<div class="number_bathrooms">' +
              '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
              '<br />' +
              place.number_bathrooms + (place.number_bathrooms > 1 || place.number_bathrooms === 0 ? ' Bathrooms' : ' Bathroom') +
            '</div>' +
          '</div>' +
          '<div class="description">' +
            place.description +
          '</div>' +
        '</article>'
      );
    });
  }
});
