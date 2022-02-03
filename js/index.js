$(document).ready(function(){
    const jsonPosts = JSON.parse(posts);
    const divPosts = $('#posts');
    const theme = $('#theme');
    
    if (window.location.href.indexOf('about') > -1){
        $('#accordion').accordion();
    }
    
    if (window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200, 
            auto: true
        });
    }
    
    $('.color-theme').click( (e)=>{
        switch (e.target.id){
            case 'to-green':
                theme.attr('href','css/green.css');
                break;
            case 'to-blue':
                theme.attr('href','css/blue.css');
                break;
            case 'to-red':
                theme.attr('href','css/red.css');
        }
    });
    
    jsonPosts.forEach((item, index) => {
        item.date = moment().format('MMMM dddd YYYY');
        let post = `<article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer mas</a>
                    </article>`
        divPosts.append(post);
    });
    
    $('.subir').click(function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        
        return false;
    });
    
    $('#login form').submit(function(){
        let form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });
    
    let form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != 'undefined'){
        let about_parrafo = $('#about p');
        about_parrafo.html('<br><strong>Bienvenido, ' + form_name + '</strong>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();
        
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    
    
});
