// Google Maps

function initMap() {
    // var elements = document.querySelectorAll('.js-map');
    // Array.prototype.forEach.call(elements, function(el) {
    //   var lat = +el.dataset.latitude,
    //       lng = +el.dataset.longitude,
    //       zoom = +el.dataset.zoom;
    //   if ((lat !== '') && (lng !== '') && (zoom > 0)) {
    //     var map = new google.maps.Map(el, {
    //       zoom: zoom,
    //       center: { lat: lat, lng: lng },
    //       disableDefaultUI: true
    //     });
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       animation: google.maps.Animation.DROP,
    //       position: { lat: lat, lng: lng }
    //     });
    //   }
    // });
}

// Change view

// (function() {
//   var container = document.getElementById('products');
//
//   if(container) {
//     var grid = container.querySelector('.js-products-grid'),
//         viewClass = 'tm-products-',
//         optionSwitch = Array.prototype.slice.call(container.querySelectorAll('.js-change-view a'));
//
//     function init() {
//       optionSwitch.forEach(function(el, i) {
//         el.addEventListener('click', function(ev) {
//           ev.preventDefault();
//           _switch(this);
//         }, false );
//       });
//     }
//
//     function _switch(opt) {
//       optionSwitch.forEach(function(el) {
//         grid.classList.remove(viewClass + el.getAttribute('data-view'));
//       });
//       grid.classList.add(viewClass + opt.getAttribute('data-view'));
//     }
//
//     init();
//   }
// })();

// Increment

function increment(incrementor, target) {
    var value = parseInt(document.getElementById(target).value, 10);
    value = isNaN(value) ? 0 : value;
    if (incrementor < 0) {
        if (value > 1) {
            value += incrementor;
        }
    } else {
        value += incrementor;
    }
    document.getElementById(target).value = value;
}

// Scroll to description

(function () {
    UIkit.scroll('.js-scroll-to-description', {
        duration: 300,
        offset: 58
    });
})();

// Update sticky tabs

// (function () {
//     UIkit.util.on('.js-product-switcher', 'show', function () {
//         UIkit.update();
//     });
// })();

// Add to cart

// (function() {
//   var addToCartButtons = document.querySelectorAll('.js-add-to-cart');
//
//   Array.prototype.forEach.call(addToCartButtons, function(el) {
//     el.onclick = function() {
//       UIkit.offcanvas('#cart-offcanvas').show();
//     };
//   });
// })();

// Action buttons

// (function() {
//   var addToButtons = document.querySelectorAll('.js-add-to');
//
//   Array.prototype.forEach.call(addToButtons, function(el) {
//     var link;
//     var message = '<span class="uk-margin-small-right" uk-icon=\'check\'></span>Added to '  ;
//     var links = {
//       favorites: '<a href="/favorites">favorites</a>',
//       compare: '<a href="/compare">compare</a>',
//     };
//     if(el.classList.contains('js-add-to-favorites')) {
//       link = links.favorites;
//     };
//     if(el.classList.contains('js-add-to-compare')) {
//       link = links.compare;
//     }
//     el.onclick = function() {
//       if(!this.classList.contains('js-added-to')) {
//         UIkit.notification({
//           message: message + link,
//           pos: 'bottom-right'
//         });
//       }
//       this.classList.toggle('tm-action-button-active');
//       this.classList.toggle('js-added-to');
//     };
//   });
// })();

(function () {
    let UKSliderActiveThumbItem;

    function galleryThumbsActivationUpdate() {
        const items = document.querySelectorAll('#thumbs-slider li');
        Array.from(items).forEach(function (item) {
            item.classList.remove('uk-active');
        });
        if (UKSliderActiveThumbItem) {
            UKSliderActiveThumbItem.classList.add('uk-active');
        }
    }

    setTimeout(function () {
        UKSliderActiveThumbItem = document.querySelector('#thumbs-slider .uk-active');
        galleryThumbsActivationUpdate();
    }, 100);

    UIkit.util.on('#thumbs-slider', 'beforeitemshow', function (e) {
        UKSliderActiveThumbItem = document.querySelector('#thumbs-slider .uk-active');
    });

    UIkit.util.on('#thumbs-slider', 'itemshown', function (e) {
        setTimeout(galleryThumbsActivationUpdate, 10);
    });
})();

