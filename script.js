const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const pixelSize = 10;

const sprite = [
"...........66666",
".........6677778",
"......8887788688",
"..eeeec6688.878.",
".e2542ec8...678.",
"e2422222c...678.",
"e2222222c...868.",
"e2ee2222eeeec68.",
"c2ee2222e2542c8.",
".c2eee2e242222c.",
"..c222ee2222222e",
"...eccec2222222e",
".......c2ee22e2c",
".......ceeeeee2c",
"........ce2222c.",
".........ccccc.."
];

const colors = {
    ".": null,
    "2": "#ffccaa",
    "4": "#aa6644",
    "5": "#ff0000",
    "6": "#66ccff",
    "7": "#2288ff",
    "8": "#ffffff",
    "c": "#884400",
    "e": "#00aa00"
};

let scale = 1.8;

//
// CHECK IF PIXEL IS OUTER PIXEL
//
function isOuterPixel(spriteData, x, y){

    const current = spriteData[y][x];

    if(current === ".") return false;

    const directions = [
        [0,-1], // top
        [0,1],  // bottom
        [-1,0], // left
        [1,0]   // right
    ];

    for(let dir of directions){

        const nx = x + dir[0];
        const ny = y + dir[1];

        // outside sprite bounds
        if(
            ny < 0 ||
            ny >= spriteData.length ||
            nx < 0 ||
            nx >= spriteData[y].length
        ){
            return true;
        }

        // touching transparent space
        if(spriteData[ny][nx] === "."){
            return true;
        }
    }

    return false;
}

//
// PIXELIZE FUNCTION
//
function pixelize(spriteData, pixelSize, scale){

    const pixels = [];

    for(let y = 0; y < spriteData.length; y++){

        for(let x = 0; x < spriteData[y].length; x++){

            const symbol = spriteData[y][x];
            const color = colors[symbol];

            if(color){

                pixels.push({
                    x: x * pixelSize * scale,
                    y: y * pixelSize * scale,
                    size: pixelSize * scale,
                    color: color,
                    outer: isOuterPixel(spriteData, x, y)
                });
            }
        }
    }

    return pixels;
}

function resizeCanvas(){

    canvas.width = sprite[0].length * pixelSize * scale;
    canvas.height = sprite.length * pixelSize * scale;
}

function drawSprite(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const pixels = pixelize(sprite, pixelSize, scale);

    pixels.forEach(pixel => {

        //
        // OUTER PIXEL SHADOW
        //
        if(pixel.outer){

            ctx.shadowColor = "rgba(0,0,0,0.7)";
            ctx.shadowBlur = 8 * scale;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

        } else {

            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
        }

        ctx.fillStyle = pixel.color;

        ctx.fillRect(
            pixel.x,
            pixel.y,
            pixel.size,
            pixel.size
        );
    });

    // Reset shadows
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;

    // Scale text
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Scale: " + scale.toFixed(1), 10, 25);
}

function updateSprite(){

    resizeCanvas();
    drawSprite();
}

document.addEventListener("keydown", (e)=>{

    if(e.key === "ArrowRight"){

        scale += 0.2;
        updateSprite();
    }

    if(e.key === "ArrowLeft"){

        scale -= 0.2;

        if(scale < 0.2){
            scale = 0.2;
        }

        updateSprite();
    }
});

updateSprite();
