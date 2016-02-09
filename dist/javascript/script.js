var GBIF = GBIF || {};
GBIF.supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

if (GBIF.supportsTouch) {
    $('body').toggleClass('isTouch'); //used for styling to make target large enough for touching
}

GBIF.getURLParameter = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||['',''])[1].replace(/\+/g, '%20'))||null;
}
/*
Accessibility on skip link
Not all browsers move focus when using anchors. 
This means that tabbing again will take you back to the initial skip link and not move on from your new position in the DOM
See: https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/
*/
// bind a click event to 'skip' links
$("a.skip").click(function (event) {

    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo = "#" + this.href.split('#')[1];

    // Setting 'tabindex' to -1 takes an element out of normal
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
        // when focus leaves this element,
        // remove the tabindex attribute
        $(this).removeAttr('tabindex');
    }).focus(); // focus on the content container
});
/*\
 |*|
 |*|  :: cookies.js ::
 |*|
 |*|  A complete cookies reader/writer framework with full unicode support.
 |*|
 |*|  Revision #1 - September 4, 2014
 |*|
 |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 |*|  https://developer.mozilla.org/User:fusionchess
 |*|
 |*|  This framework is released under the GNU Public License, version 3 or later.
 |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
 |*|
 |*|  Syntaxes:
 |*|
 |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
 |*|  * docCookies.getItem(name)
 |*|  * docCookies.removeItem(name[, path[, domain]])
 |*|  * docCookies.hasItem(name)
 |*|  * docCookies.keys()
 |*|
 \*/

var GBIF = GBIF || {};
GBIF.cookies = {
    getItem: function (sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

/**
 * Created by bko on 09/11/15.
 */
$(".rssFeed").each(function (index) {
    var rssFeed = $(this);
    var jSONURL = $(this).attr("data-feed");
    $.getJSON(jSONURL, function (result) {
        var allItems = '';

        $.each(result, function (i, news) {
            var article = document.createElement('article');
            var content = '<a href="http://www.gbif.org/' + news.path + '"><h3>' + news.title + '</h3><p>' + news.body + '</p><span>' + news.created + '</span></a>';
            $(article).html(content).appendTo(rssFeed);
        });
    });
});


/*


(function() {
    var rawContentId,
        jsonUrl,
        template = '<section class="block"><div class="block-content"><h1>{{title}}</h1></div></section><section class="block"><div class="block-content"><span>{{created}}</span><p>{{body}}</p>{{img}}</div></section>',
        urlTemplate = '/raw/article2.json'; //http://drupaledit.gbif.org/raw-content/82531/json

    var rawContentId = GBIF.getURLParameter('id');
    if (rawContentId == null) {
        return;
    }
    var jsonUrl = urlTemplate.replace('{id}', rawContentId);

    var parent = $('#main>section>.content');
    var article = document.createElement('article');
    $.getJSON(jsonUrl, function (result) {

        if (typeof result[0] !== 'object') {
            console.log('error');
            return;
        }
        result = result[0];
        var img = result.field_uni_images;
        var content = template
            .replace('{{title}}', result.title)
            .replace('{{body}}', result.body)
            .replace('{{created}}', result.created)
            .replace('{{img}}', '<img src="' + img.src + '" alt="' + img.alt + '"/>');
        parent.empty();
        $(article).html(content).appendTo(parent);
    });
})();
*/
//just for testing css for now
var GBIF = GBIF || {};
GBIF.navigation = {};
$('.navigation-main>ul>li>ul>li>a').click(function () {
    $(this).parent().toggleClass('isActive');
    if ($(this).attr('href')=='#') {
        return false;
    }
});

GBIF.navigation.showMenu = function(event){
    $('.site-navigation').addClass('toggle');
    $(this).addClass('isActive');
    $('#main').addClass('toggle');
    $('body').addClass('hasOverlay');
    return false;
};
$('.toggle.toggle-nav').on('click touchend', GBIF.navigation.showMenu);


GBIF.navigation.showContent = function(event){
    $('.site-navigation').removeClass('toggle');
    $('.toggle.toggle-nav').removeClass('isActive');
    $('#main').removeClass('toggle');
    $('body').removeClass('hasOverlay');
    $('.Site__drawer').removeClass('isActive');
    $('#search .search-input').blur();
};
$('.overlay').on("click touchend", GBIF.navigation.showContent);

$('.languageSelector>a').click(function (event) {
    $(this).parent().toggleClass('isExpanded');
    return false;
});



(function(){
    "use strict";
    var secTimeout = 60*60*24*30; // 30 days timeout

    if (GBIF.getURLParameter('clearcookies')) {
        GBIF.cookies.removeItem('hasSeenPopup', '/');
    }

    $('#popup .popup-close').click(function(){
        $(this).parent().removeClass('isVisible');
        return false
    });

    if (GBIF.cookies.hasItem('hasSeenPopup') && GBIF.cookies.getItem('hasSeenPopup')) {
        return;
    } else {
        GBIF.cookies.setItem('hasSeenPopup', true, secTimeout, '/');
        $('#popup').addClass('isVisible');
    }
})();

var searchToggleSelector = '.site__searchToggle',
    navToggleSelector = '.site__menuToggle';
var toggleMenu = function (event) {
    $('#SiteHeader').toggleClass('isActive');
    $('#siteCanvas').toggleClass('hasActiveMenu');
    $('.overlayMobileMenu').toggleClass('isActive');
    hideToc();
    closeSearch();
    if (event){
        event.preventDefault();
    }
};
function closeSearch() {
    $(searchToggleSelector).removeClass('isActive');
    $('#site_search').removeClass('isActive');
}
$(navToggleSelector).on('click touchend', toggleMenu);

function getAncestors(el, stopEl) {
    var ancestors = [];
    while ((el = el.parentElement) && el != stopEl) ancestors.push(el);
    return ancestors;
}

//collapse and expand menu items
var siteNav = document.getElementById('nav');
var SiteNavCategoryItems = siteNav.querySelectorAll('.isCategory');
$('.isCategory>a').on('click', function (event) {
    var ancestors = getAncestors(this, siteNav),
        child, i;

    //collpase all items that are not parents
    for (i = 0; i < SiteNavCategoryItems.length; i++) {
        child = SiteNavCategoryItems[i];
        if (ancestors.indexOf(child) == -1) {
            $(child).removeClass('isExpanded');
        }
    }

    if (!$(siteNav).hasClass('isExpanded')) {
        //for horizontal layout. When changing from laptop to mobile this means that the first menu click is ignored
        $(this.parentNode).addClass('isExpanded');
    }
    else {
        $(this.parentNode).toggleClass('isExpanded');
    }
    $(siteNav).addClass('isExpanded');//use for horizontal layout
    event.preventDefault();
});

//collapse expand service menu
$('.ServiceMenu__teaser>a').on('click', function (event) {
    $(this.parentNode.parentNode).toggleClass('isExpanded');
});


//Search toggling
function toggleSearch(event) {
    $(searchToggleSelector).toggleClass('isActive');
    var searchAreaEl = document.getElementById('site_search');
    $(searchAreaEl).toggleClass('isActive');
    searchAreaEl.querySelector('input').focus();
    closeMenus();
    hideToc();
    event.preventDefault(); //do not scroll to top
}
$(searchToggleSelector).on('click', toggleSearch);


//close menu when clicking outside
function closeMenus() {
    $(siteNav).removeClass('isExpanded');
    if ($('#siteCanvas').hasClass('hasActiveMenu')) {
        toggleMenu();
    }
}

function hideNavigation() {
    "use strict";
    hideToc();
    closeMenus();
}

$(document).keydown(function(e){
    if (e.keyCode==27) {
        closeMenus();
        closeSearch();
        hideToc();
    }
});

toggleToc = function(){
    $('.Site__drawer').toggleClass('isActive');
    $(this).toggleClass('isActive');
    $('.overlayFilter').toggleClass('isActive');
    return false;
};
$('.toggleDrawer').on('click touchend', toggleToc);

function hideToc() {
    $('.Site__drawer').removeClass('isActive');
    $('.toggleDrawer').removeClass('isActive');
    $('.overlayFilter').removeClass('isActive');

}

//overlay
$('.overlay').on('click touchend', hideNavigation);

function closeMenusOnClickOutside(event) {
    var clickOnContent = $(event.target).is('#main *') || $(event.target).is('#site_search *');
    if (clickOnContent) {
        closeMenus();
    }
}
document.addEventListener('click', closeMenusOnClickOutside);
document.addEventListener('touchend', closeMenusOnClickOutside);


/*
 Perform and display search
 TODO
 Needs rewriting. Just for testing as is.
 Possibly both as a module with config param
 */
$(document).ready(function () {
    'use strict';
    // Set up search
    var index, store, input, resultHTML, historyTimer,
        searchElement = document.getElementById('search'),
        searchResults = searchElement.querySelector('.Search__results'),
        searchResultTemlpate = document.getElementById('searchResultTemlpate').innerHTML,
        search__feedback = document.getElementById('Search__feedback');

    var showSearchResults = function(results) {
        if (typeof results === 'undefined' || results.length == 0) {
            $(search__feedback).removeClass('Search--showResults');
            // searchResults.innerHTML = 'Enter search to see results';
            return;
        }

        $(search__feedback).addClass('Search--showResults');
        var resultUrls = results.map(function(e){
            return e.ref;
        });
        resultHTML = '';
        $.each(resultUrls, function(i, e){
            var res = store[e];
            resultHTML += searchResultTemlpate
                .replace('{{title}}', res.title)
                .replace('{{category}}', res.category)
                .replace('{{href}}', e)
                .replace('{{desc}}', res.desc);
        });
        searchResults.innerHTML = resultHTML;
    };

    $.getJSON('/lunr/lunr_' + GBIF.siteLanguage + '.json', function (response) {
        // Create index
        index = lunr.Index.load(response.index);
        // Create store
        store = response.results;

        if (!searchElement) {
            return;
        }
        input = searchElement.querySelector('input.search-input');

        // Handle search
        $(input).on('keyup', function (e) {
            var query = $(this).val(), // Get query
                result = index.search(query); // Search for it
            if (query == '') {
                showSearchResults(undefined);
            } else {
                showSearchResults(result);
            }
        });
        searchElement.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault();} );
        getState();
        //perform search
        $(input).trigger('keyup');
    });

    //router
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || ['', ''])[1].replace(/\+/g, '%20')) || null;
    }
    function getState() {
        var query = getURLParameter('q');
        if (query) {
            //display search
            gb.toggleSearch();
            //enter query in input
            var input = searchElement.querySelector('input.search-input');
            input.value = query;
        }
    }

});



// You can write custom js here and it will be injected into the bundle in the end
(function() {
    $('#optinform_btnSubscribe').on('click', function (event) {
        $('#subscribe-bid input.submit').click();
        return false;
    });
})();
