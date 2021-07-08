const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
    e.preventDefault(); 

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on"); 
}

$("#gnb>li").on("mouseenter", function(){
    $(this).find(".sub").show();
});

$("#gnb>li").on("mouseleave", function(){
    $(this).find(".sub").hide();
});

$("#gnb>li").each(function(index){
    //1depth 1에서 첫번쨰 a요소에 focusin 이벤트 연결
    $("#gnb>li").eq(index).find("a").first().on("focusin", function(){
        $("#gnb>li").eq(index).find(".sub").show();
    })
    //1depth li에서 마지막 a요소에 focusout 이벤트 연결
    $("#gnb>li").eq(index).find("a").last().on("focusout", function(){
        $("#gnb>li").eq(index).find(".sub").hide();
    })
})