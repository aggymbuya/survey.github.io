var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyaI34cBqPoG5crcibLrh92g9eZsLSbLabRISpPcy2Ti5m1g8W5/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
