const calculating = () => {
    $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
}
$(".bt-0").click(function() {
    if ($(".quantity0").val() > 0) {
        let temp = $(".quantity0").val();
        $(".quantity0").val(Number(temp) - 1);
        calculating();
    }
})
$(".bt0_").click(function() {
    let temp = $(".quantity0").val();
    $(".quantity0").val(Number(temp) + 1);
    $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
})
$(".bt-1").click(function() {
    if ($(".quantity1").val() > 0) {
        let temp = $(".quantity1").val();
        $(".quantity1").val(Number(temp) - 1);
        $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
    }
})
$(".bt1_").click(function() {
    let temp = $(".quantity1").val();
    $(".quantity1").val(Number(temp) + 1);
    $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
})
$(".bt-2").click(function() {
    if ($(".quantity2").val() > 0) {
        let temp = $(".quantity2").val();
        $(".quantity2").val(Number(temp) - 1);
        $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
    }
})
$(".bt2_").click(function() {
    let temp = $(".quantity2").val();
    $(".quantity2").val(Number(temp) + 1);
    $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
})
$(".bt-3").click(function() {
    if ($(".quantity3").val() > 0) {
        let temp = $(".quantity3").val();
        $(".quantity3").val(Number(temp) - 1);
        $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
    }
})
$(".bt3_").click(function() {
    let temp = $(".quantity3").val();
    $(".quantity3").val(Number(temp) + 1);
    $(".total-cost").html(String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000) + "đ")
})
let temp = String(Number($(".quantity0").val()) * 599000 + Number($(".quantity1").val()) * 599000 + Number($(".quantity2").val()) * 599000 + Number($(".quantity3").val()) * 599000)
$(".total-cost").html(temp + "đ")

$("#del0").click(function() {
    $("#pr0").css("display", "none");
    $(".quantity0").val(0);
    calculating()
})
$("#del1").click(function() {
    $("#pr1").css("display", "none");
    $(".quantity1").val(0);
    calculating();
})
$("#del2").click(function() {
    $("#pr2").css("display", "none");
    $(".quantity2").val(0);
    calculating()
})
$("#del3").click(function() {
    $("#pr3").css("display", "none");
    $(".quantity3").val(0);
    calculating();
})