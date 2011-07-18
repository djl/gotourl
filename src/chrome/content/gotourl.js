window.addEventListener("load", function(event) {
    var menu = document.getElementById("contentAreaContextMenu");
    if (menu) {
        menu.addEventListener("popupshowing", gotoURL.init, false);
    }
}, false);

var gotoURL = {
    init: function() {
        var menuItems = ['current', 'window', 'tab', 'link-window', 'link-tab'];
        for (var i=0; i < menuItems.length; i++) {
            var item = document.getElementById('gotourl-' +  menuItems[i]);
            if (menuItems[i].indexOf("link") == 0) {
                item.hidden = !gContextMenu.onLink;
            } else {
                item.hidden = !(gContextMenu.isTextSelected && !gContextMenu.onLink);
            }
        }
    },

    go: function(where) {
        var focusedWindow = document.commandDispatcher.focusedWindow;
        var url = gContextMenu.onLink ? gContextMenu.target.href : focusedWindow.getSelection();

        switch(where) {
        case "current":
            gBrowser.loadURI(url);
            break;
        case "window":
            window.open(url);
            break;
        default:
            window.getBrowser().addTab(url);
        }
    }
}
