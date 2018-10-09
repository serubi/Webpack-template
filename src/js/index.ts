// 1

// function calcRectangleVolume(dimensions: any) {
//     let width = dimensions.width;
//     let length = dimensions.length;

//     alert(width * length);
// }

// calcRectangleVolume({
//     width: 8,
//     length: 7.5
// });


// 2

// interface RectangleOptions {
//     width: number;
//     length: number;
// }

// function calcRectangleVolume(dimensions: RectangleOptions) {
//     let width = dimensions.width;
//     let length = dimensions.length;

//     alert(width * length);
// }

// calcRectangleVolume({
    
// });


// 3

interface RectangleOptions {
    width: number;
    length: number;
    height?: number;
}

function calcRectangleVolume(dimensions: RectangleOptions) {
    let width = dimensions.width;
    let length = dimensions.length;

    if (dimensions.height) {
        let height = dimensions.height;
        alert(height * width * length);
    } else {
        alert(width * length);
    }
}

calcRectangleVolume({
    width: 8,
    length: 10,
    height: 4
});