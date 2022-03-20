/*
Write functions for Adobe Illustrator using Javascript (ExtendScript). Functions assume that everything happens in the active document.
*/

// Show layers named after Zodiac signs
function showZodiacLayers() {
    var zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    for (var i = 0; i < zodiac.length; i++) {
        var layer = app.activeDocument.layers.getByName(zodiac[i]);
        layer.visible = true;
    }
}

// Example:
//showZodiacLayers();

// Hide all Zodiac signs layers
function hideZodiacLayers() {
    var zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    for (var i = 0; i < zodiac.length; i++) {
        var layer = app.activeDocument.layers.getByName(zodiac[i]);
        layer.visible = false;
    }
}

// Example:
//hideZodiacLayers();

// Ask for my birthday, then make visible my Zodiac sign and hide all others
function showMyZodiac() {
    var zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    var month = prompt("What month were you born?", "January");
    var day = prompt("What day were you born?", "1");
    var myZodiac = zodiac[(month - 1) * 2 + parseInt(day / 31)];
    var layer = app.activeDocument.layers.getByName(myZodiac);
    layer.visible = true;
    for (var i = 0; i < zodiac.length; i++) {
        if (zodiac[i] != myZodiac) {
            var layer = app.activeDocument.layers.getByName(zodiac[i]);
            layer.visible = false;
        }
    }
}

function zodiacSign(date) {
    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = date.getMonth();
    let day = date.getDate();
    if(month == 0 && day <= 20){
       month = 11;
    }else if(day < days[month]){
       month--;
    };
    return signs[month];
 };

sign = zodiacSign(new Date('April 3, 1973'));
a = 1
