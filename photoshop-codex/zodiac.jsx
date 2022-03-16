/*
Write functions for Adobe Illustrator 
using Javascript (ExtendScript). 
Functions assume that everything 
happens in the active document.
*/

// Toggle a layer named after a Zodiac sign passed as an argument
function toggleZodiac(zodiac) {
    var layer = activeDocument.layers.getByName(zodiac);
    layer.visible = !layer.visible;
}

//toggleZodiac('Aries');

// Find all layers named after Zodiac signs and toggle them
function toggleAllZodiacs() {
    var zodiacs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    for (var i = 0; i < zodiacs.length; i++) {
        toggleZodiac(zodiacs[i]);
    }
}

//toggleAllZodiacs();

// Show a layer named after a Zodiac sign, passed as an argument
function showZodiac(zodiac) {
    var layer = activeDocument.layers.getByName(zodiac);
    layer.visible = true;
}


// Return a Zodiac sign according to month and day
function zodiacSign(day, month){
    var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
}

// Ask for my birthday and show 
// my Zodiac sign
function showMyZodiac() {
    var day = prompt("What is my day of birth?", "1");
    var month = prompt("What is my month of birth?", "1");
    showZodiac(zodiacSign(day, month));
}

toggleAllZodiacs();
//showMyZodiac();

