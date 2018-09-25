javascript: (function(func, scr) {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(function($) {
    "use strict";
    
    const nextUInt = function() {
        let x = Math.floor(Math.random() * 1000000000);
        let y = Math.floor(Math.random() * 1000000000);
        let z = Math.floor(Math.random() * 1000000000);
        let w = Math.floor(Math.random() * 100000000);
        const t = x ^ x << 11;
        x = y;
        y = z;
        z = w;
        w = (w ^ w >>> 19) ^ (t ^ t >>> 8);
        
        const result = w >>> 0;
        return result / 4294967296;
    };
    
    Math.randomInt = function(max) {
        return Math.floor(max * nextUInt());
    };
    
    const degree = {};
    degree.total = 97;
    
    const dd = new Date();
    degree.year = dd.getFullYear();
    degree.oldYear = year - 1;
    
    const r = Math.randomInt(degree.total);
    degree.list = [];
    
    $('#text').text(degree.list[r]);
    localStorage.setItem("shogo", degree.list[r]);    
});