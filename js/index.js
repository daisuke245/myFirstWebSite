$(document).ready(function(){
    const jsonPosts = JSON.parse(posts);
    const divPosts = $('#posts');
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        auto: true
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
});
