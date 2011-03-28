window.addEventListener("load", function(event) {
    var menu = document.getElementById("contentAreaContextMenu");
    if (menu) {
        menu.addEventListener("popupshowing", gotoURL.init, false);
    }
}, false);

var gotoURL = {
    init: function() {
        var menuItems = ['current', 'window', 'tab'];
        for (var i=0; i < menuItems.length; i++) {
            var item = document.getElementById('gotourl-' +  menuItems[i]);
            item.hidden = !gContextMenu.isTextSelected;
        }
    },

    go: function(where) {
        var focusedWindow = document.commandDispatcher.focusedWindow;
        var url = focusedWindow.getSelection();

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
