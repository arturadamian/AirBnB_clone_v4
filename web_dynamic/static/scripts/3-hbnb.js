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
    $('.amenities h4').text(listAmenity.join(', '));
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
	success: (newData) => {
		console.log('good');
		console.log(newData);
		$('SECTION.places').append('<article></article>');
		newData.forEach((place) => {
			$('SECTION.places article').append(place); //wip, parse json, create tags
		});
	},
	error: () => {console.log('bad');}
});
console.log('testout');
