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
