$(document).ready(function () {
  $(".lebet").click(function () {
    let id = $(this).prop("id");
    let split = id.split("_");
    let lebet_na = split[1];

    $(".lebet").removeClass("aktif");
    $("#lebet_" + lebet_na).addClass("aktif");
    $(".home").slideUp();
    $("#lebetna_1").slideUp();
    $("#lebetna_2").slideUp();
    $("#lebetna_3").slideUp();
    $("#lebetna_" + lebet_na).slideToggle();
  });
});
