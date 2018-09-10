window.onload = function () {
  $(':checkbox').css('margin-right', '10px');
  let listAmenity = [];
  $('input:checkbox').change(function () {
    if (this.checked) {
      listAmenity.push($(this).attr('data-name'));
    } else {
      listAmenity.pop($(this).attr('data-name'));
    }
    $('.amenities h4').text(listAmenity.join(', '));
  });
};
