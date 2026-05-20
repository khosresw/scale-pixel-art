Pixel Sprite Project

A simple pixel-art sprite renderer using HTML, CSS, and JavaScript.

This project recreates a MakeCode Arcade sprite using an HTML5 <canvas> and draws each pixel manually with JavaScript.

📁 Project Structure
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
🚀 Features
Pixel-perfect rendering
Canvas-based drawing
Retro pixel-art styling
Scaled sprite rendering
Pure vanilla JavaScript
No libraries required
🖼️ Preview

The sprite is rendered from a text-based pixel map similar to MakeCode Arcade sprites.

Example:

..eeeec6688.878.
.e2542ec8...678.
e2422222c...678.

Each character represents a color value.

🎨 Color Mapping
Character	Color
2	Skin tone
4	Brown
5	Pink
6	Light blue
7	Blue
8	White
c	Dark brown
e	Green
.	Transparent
▶️ How To Run
Download all files.
Place them inside the same folder.
Open index.html in your browser.

That’s it.

🛠️ Technologies Used
HTML5
CSS3
JavaScript
HTML Canvas API
📚 How It Works

The sprite is stored as an array of strings:

const sprite = [
"...........66666",
".........6677778"
];

JavaScript loops through every character and paints a colored square on the canvas.

🔍 Scaling

The sprite is enlarged using:

const scale = 2.8;

This mimics:

scaling.scale_by_percent(mySprite, 280)

from MakeCode Arcade.

✨ Future Improvements

Possible upgrades:

Sprite animation
Keyboard movement
Sprite editor
Multiple characters
Tile maps
Collision system
Game engine integration
📄 License

Free to use and modify.
