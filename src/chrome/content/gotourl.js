window.addEventListener("load", function(event) {
    var menu = document.getElementById("contentAreaContextMenu");
    menu.addEventListener("popupshowing", setupMenuItems, false);
}, false);

function setupMenuItems(event) {
    var menuItems = ['current', 'window', 'tab'];
    for (var i=0; i < menuItems.length; i++) {
        var item = document.getElementById('gotourl-' +  menuItems[i]);
        item.hidden = !gContextMenu.isTextSelected;
    }
}

function gotoURL(where) {
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