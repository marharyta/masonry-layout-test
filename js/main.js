// $('.grid').masonry({
//     // set itemSelector so .grid-sizer is not used in layout
//     itemSelector: '.grid__item',
//     // use element for option
//     // columnWidth: '.grid-sizer',
//     percentPosition: true
// })

console.log('it is here')
var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: false,
    fitWidth: true,
    gutter: 50,
});

imagesLoaded(grid, function (instance) {
    console.log('all images are loaded', instance);
    msnry.layout();
}).on('progress', function (instance, image) {
    console.log('image iss for ' + image.img.src);
}).on('done', function (instance) {
    console.log('DONE  - all images have been successfully loaded', instance);
});



