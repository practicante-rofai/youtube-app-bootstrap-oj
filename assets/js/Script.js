$( document ).ready(function() {
    var resultado = $('#reproductor');

obtenerVideos(25, '')

function obtenerVideos(mostrar, buscar) {
    let conetenedorv = $('#Content-Videos');

    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + mostrar + '&order=viewCount&q=' + buscar + '&type=video&videoDefinition=any&key=AIzaSyD8KtrA3UwaI4wDZ6nxe4WOzqNfWxxjts4',
        success: function (res) {
            let cadena = ''
            for (const item of res.items) {
                cadena += `
                <div class="card col-sm-4 col-md-2 d-sm-block d-none m-2 mt-3">
                <div class="card-header pt-3 p-0">
                    <img class="card-img-top" src="` + item.snippet.thumbnails.default.url + `" alt="Card image cap" id="imagen-video">
                </div>
                <div class="card-body ">
                    <h6 class="card-title">` + item.snippet.title + `</h6>
                </div>
                <div class="card-footer">
                    <div class="text-center float-bottom"><a href="#" class="btn btn-danger" onclick="reproducirVideo('` + item.id.videoId + `')">Play</a></div>
                </div>
                </div>
                
                <div class="card col-sm-4 col-md-2 d-sm-none d-block m-2 mt-3">
                <div class="card-body row col-12 p-0 pt-3">
                    <img class="card-img-top col-7" src="` + item.snippet.thumbnails.default.url + `" alt="Card image cap" id="imagen-video">
                    <h6 class="card-title col-5 p-0">` + item.snippet.title + `</h6>
                </div>
                <div class="card-footer">
                    <div class="text-center float-bottom"><a href="#" class="btn btn-danger" onclick="reproducirVideo('` + item.id.videoId + `')">Play</a></div>
                </div>
                </div>
                
                `;
            }

            conetenedorv.html(cadena);
        }
    });
}

function buscarVideo(e, verificar) {
    let buscar = $('#Caja-Busqueda').val();
    if (verificar == true) {
        if (e.keyCode == 13) {
            obtenerVideos(25, buscar)
            window.location = getElementById('#Content-Videos');
        }
    } else {
        obtenerVideos(25, buscar)
    }
}

function reproducirVideo(videoId) {
    let videoPlay = $('#video-play');
    videoPlay.attr('src', 'https://www.youtube.com/embed/' + videoId)
    console.log(videoId)
    resultado.css(display = 'block');
    resultado.slideToggle('slow');
}

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('#cabecera').addClass('change');

            console.log($('#cabecera'));
        } else if ($(window).scrollTop() < 300) {
            $('#cabecera').removeClass('change');
        }
    });
});
});

