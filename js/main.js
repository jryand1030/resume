var nameanimation = bodymovin.loadAnimation({
    container: document.getElementById('name'),
    render: 'svg',
    loop:false,
    autoplay: true,
    path: 'data.json'
    ,
});

$(document).ready(function(){
    $(".btn").append('<span></span><span></span>');
});
