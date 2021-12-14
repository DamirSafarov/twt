
$('.left-bar__open').on('click', function () {
    $('.left-bar').toggleClass('left-bar_hidden');
    $('.video-player').toggleClass('active1');
    $('.info').toggleClass('active1')
    $('.left-block').toggleClass('left-block_none')
})



$('.right-bar__open').on('click', function () {
    $('.chat-bar').toggleClass('right-bar_hidden');
    $('.video-player').toggleClass('active2')
    $('.info').toggleClass('active2')
    $('.right-block').toggleClass('right-block_none')

})



