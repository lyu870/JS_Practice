/* 버튼i 탭 눌렀을때 동작**/
for (let i = 0; i < 3; i++) {
    $('.tab-button').eq(i).on('click', function() {
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}
// for반복문은 코드를 반복실행하는 용도. Tab기능 만들때 조와요


// /* 버튼1 탭 눌렀을때 동작**/
// $('.tab-button').eq(1).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// /* 버튼2 탭 눌렀을때 동작**/
// $('.tab-button').eq(2).on('click', function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });