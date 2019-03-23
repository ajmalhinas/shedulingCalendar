
var getSrchItems = (function () {


    return function () {
        var srchItems = {fcr: '', spc: '', fcy: '', loc: '', fm_date: '', to_date: ''};
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.srchItems !== undefined && sessionStorage.srchItems !== "undefined" && sessionStorage.srchItems !== "{}") {
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

    return function ( spc_menu, fcy_menu, loc_menu, fm_date, to_date) {

        var srchItems = { spc: spc_menu, fcy: fcy_menu, loc: loc_menu, fm_date: fm_date, to_date: to_date};
        if (typeof (Storage) !== "undefined") {

            sessionStorage.srchItems = JSON.stringify(srchItems);

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return srchItems;
    }
})();

var setEvents = (function () {

    return function (events) {

        if (typeof (Storage) !== "undefined") {

            sessionStorage.SelEvents = JSON.stringify(events);

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return events;
    }
})();
var getSelEvents = (function () {
    return function () {
        var events = {};
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.SelEvents !== undefined && sessionStorage.SelEvents !== "undefined" && sessionStorage.SelEvents !== "{}") {
                events = JSON.parse(sessionStorage.SelEvents);

            }
            sessionStorage.SelEvents = JSON.stringify(events);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return events;
    }
})();

var setUserDetails = (function () {

    return function (userdetails) {

        if (typeof (Storage) !== "undefined") {

            sessionStorage.UserDetails = JSON.stringify(userdetails);

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return userdetails;
    }
})();

var getUserDetails = (function () {
    return function () {
        var userdetails = {};
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.UserDetails !== undefined && sessionStorage.UserDetails !== "undefined" && sessionStorage.UserDetails !== "{}") {
                userdetails = JSON.parse(sessionStorage.UserDetails);

            }
            sessionStorage.UserDetails = JSON.stringify(userdetails);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return userdetails;
    }
})();


var setPayDetails = (function () {

    return function (paydetails) {

        if (typeof (Storage) !== "undefined") {

            sessionStorage.PayDetails = JSON.stringify(paydetails);

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return paydetails;
    }
})();

var getPayDetails = (function () {
    return function () {
        var paydetails = {};
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.PayDetails !== undefined && sessionStorage.PayDetails !== "undefined" && sessionStorage.PayDetails !== "{}") {
                paydetails = JSON.parse(sessionStorage.PayDetails);

            }
            sessionStorage.PayDetails = JSON.stringify(paydetails);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        return paydetails;
    }
})();

var destroySession = (function () {

    return function () {

        if (typeof (Storage) !== "undefined") {
            sessionStorage.srchItems = undefined;
            sessionStorage.SelEvents = undefined;
            sessionStorage.UserDetails = undefined;
            sessionStorage.PayDetails = undefined;

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }

    }
})();