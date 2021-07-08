
//사용자 아이디를 통해서 데이터 호출
$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.people.getPhotos",
    dataType: "json",
    data: {
        api_key: "f518feda6c446ce47732487a5543d6de",
        per_page: 50,
        format: "json",
        nojsoncallback: 1,
        user_id: "126113035@N03" //호출하고 싶은 유저 아이디 입력
    }
})
//데이터 호출이 성공하면 HTML구조 생성
.success(function(data){   
    //변수에 배열형태의 자룔를 뽑아서 저장
    var imgs = data.photos.photo; 

    //배열의 갯수만큼 반복을 돌면서 
    $(imgs).each(function(index, data){
        //각 이미지의 제목저장
        var tit = data.title;
        //각 이미지의 썸네일 주소 저장
        var imgSrc =  `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        //각 큰 이미지의 주소 저장
        var imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        //반복하며 생성할 태그를 템플릿 문자열 형태로 미리 지정
        var tags = `
            <article>
                <div class="inner">
                    <div class="pic" data-src=${imgSrcBig}>
                        <img src="${imgSrc}">
                    </div>
                    <h2>${tit}</h2>
                </div>
            </article>
        `;

        //갤러리 프레임 안쪽에 반복을 돌면서 위쪽의 태그구조를 동적으로 추가
        $("#gallery").append(tags);
    })
})
.error(function(err){
    console.log(err);
});


$("body").on("click", "#gallery article .pic",function(){
    var imgSrc = $(this).attr("data-src");

    var tags = `
        <aside id="imgPop">
            <div class="pic">
                <img src="${imgSrc}">
            </div>
            <span>CLOSE</span>
        </aside>
    `;

    $("body").append(tags);    
});

$("body").on("click", "#imgPop span", function(){
    $(this).parent("#imgPop").remove();
})