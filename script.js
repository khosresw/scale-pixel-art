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
    "5": "#ff7777",
    "6": "#66ccff",
    "7": "#2288ff",
    "8": "#ffffff",
    "c": "#884400",
    "e": "#00aa00"
};

let scale = 1.8;

function resizeCanvas(){

    canvas.width = sprite[0].length * pixelSize * scale;
    canvas.height = sprite.length * pixelSize * scale;
}

function drawSprite(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let y = 0; y < sprite.length; y++){

        for(let x = 0; x < sprite[y].length; x++){

            const pixel = sprite[y][x];
            const color = colors[pixel];

            if(color){

                ctx.fillStyle = color;

                ctx.fillRect(
                    x * pixelSize * scale,
                    y * pixelSize * scale,
                    pixelSize * scale,
                    pixelSize * scale
                );
            }
        }
    }

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
