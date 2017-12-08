// const path = require('path')
// const getColors = require('get-image-colors')
// const namer = require('color-namer')
// const rgbHex = require('rgb-hex');

// var Fresh = ['Inch Worm','Asparagus','Granny Smith Apple','Electric Lime','Screamin Green','Fern','Forest Green','Sea Green','Green','Mountain Meadow','Shamrock','Jungle Green','Caribbean Green','Tropical Rain Forest','Robin Egg Blue','']
// var Medium = ['Banana Mania','Sunglow','Goldenrod','Dandelion','Yellow','Green Yellow','Spring Green','Olive Green','Laser Lemon','Unmellow Yellow','Canary','Yellow Green']
// var Dry = ['Mahogany','Fuzzy Wuzzy Brown','Chestnut','Red Orange','Bittersweet','Melon','Outrageous Orange','Vivid Tangerine','Burnt Sienna','Brown','Sepia','Orange','Burnt Orange','Copper','Mango Tango','Atomic Tangerine','Beaver','Antique Brass','Desert Sand','Raw Sienna','Tumbleweed','Tan','Peach','Macaroni and Cheese','Apricot','Neon Carrot','Almond','Yellow Orange','Gold','Shadow','Gray','']

// module.exports.predict = function(pictureName, cb) {
//     getColors(path.join(__dirname, pictureName)).then(colors => {
//         for(let i = 0; i < colors.length; i++){
//             let color = colors[i]._rgb
//             let hex = "#" + rgbHex(color[0],color[1],color[2])
//             console.log(hex)
//             let names = namer(hex).pantone
//             for(let j = 0; j < 1; j++){
//                 console.log(names[j].name)
//                 if (Fresh.indexOf(names[j].name) >= 0){
//                     cb("Fresh")
//                     return
//                 } else if (Medium.indexOf(names[j].name) >= 0){
//                     cb("Medium")
//                     return
//                 } else if (Dry.indexOf(names[j].name) >= 0){
//                     cb("Dry")
//                     return
//                 }
//             }
//         }
//     })
// }

const path = require('path')
const color = require('dominant-color')
const namer = require('color-namer')

var Fresh = ['Inch Worm','Asparagus','Granny Smith Apple','Electric Lime','Screamin Green','Fern','Forest Green','Sea Green','Green','Mountain Meadow','Shamrock','Jungle Green','Caribbean Green','Tropical Rain Forest','Robin Egg Blue','']
var Medium = ['Banana Mania','Sunglow','Goldenrod','Dandelion','Yellow','Green Yellow','Spring Green','Olive Green','Laser Lemon','Unmellow Yellow','Canary','Yellow Green']
var Dry = ['Mahogany','Fuzzy Wuzzy Brown','Chestnut','Red Orange','Bittersweet','Melon','Outrageous Orange','Vivid Tangerine','Burnt Sienna','Brown','Sepia','Orange','Burnt Orange','Copper','Mango Tango','Atomic Tangerine','Beaver','Antique Brass','Desert Sand','Raw Sienna','Tumbleweed','Tan','Peach','Macaroni and Cheese','Apricot','Neon Carrot','Almond','Yellow Orange','Gold','Shadow','Gray','']

module.exports.predict = function(pictureName, cb) {
    color(pictureName, function(err, colorv) {
            let hex = "#" + colorv
            console.log(hex)
            let names = namer(hex).pantone
            console.log(len(names))
            for(let j = 0; j < 1; j++){
                console.log(names[j].name)
                if (Fresh.indexOf(names[j].name) >= 0){
                    cb("Fresh")
                    return
                } else if (Medium.indexOf(names[j].name) >= 0){
                    cb("Medium")
                    return
                } else if (Dry.indexOf(names[j].name) >= 0){
                    cb("Dry")
                    return
                }
            }
    })
}