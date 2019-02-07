
var getSrchItems = (function () {


    return function () {
        var srchItems = {fcr: '', spc: '', fcy: '', loc: '', fm_date: '', to_date: ''};
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.srchItems !== "{}") {
                srchItems = JSON.parse(sessionStorage.srchItems);

            }
            sessionStorage.srchItems = JSON.stringify(srchItems);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return srchItems;
    }
})();

var setSrchItems = (function () {

    return function (fcr_menu, spc_menu, fcy_menu, loc_menu, fm_date, to_date) {

        var srchItems = {fcr: fcr_menu, spc: spc_menu, fcy: fcy_menu, loc: loc_menu, fm_date: fm_date, to_date: to_date};
        if (typeof (Storage) !== "undefined") {

            sessionStorage.srchItems = JSON.stringify(srchItems);

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return srchItems;
    }
})();