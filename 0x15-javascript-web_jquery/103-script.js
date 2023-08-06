$(document).ready(function () {
  $('#btn_translate').click(() => ola());
  $('#language_code').keypress(function (e) {
    if (e.which === 13) {
      ola();
    }
  });
});

function ola () {
  $.get(
    'https://fourtonfish.com/hellosalut/?lang=${$("language_code").val()}',
    function (hello) {
      $('#hello').text(hello.hello);
    }
  );
}
