$(document).ready(function(){
    const jsonPosts = JSON.parse(posts);
    const divPosts = $('#posts');
    const theme = $('#theme');
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        auto: true
    });
    
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
});
