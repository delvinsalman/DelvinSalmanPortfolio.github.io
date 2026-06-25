/** Devicon class names — https://devicon.dev */
export const skillDeviconClasses: Record<string, string> = {
  Javascript: "devicon-javascript-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  React: "devicon-react-original colored",
  TensorFlow: "devicon-tensorflow-original colored",
  PyTorch: "devicon-pytorch-original colored",
  SQL: "devicon-postgresql-plain colored",
  Bootstrap: "devicon-bootstrap-plain colored",
  Godot: "devicon-godot-plain colored",
  "VS Code": "devicon-vscode-plain colored",
  Git: "devicon-git-plain colored",
  "p5.js": "devicon-p5js-original colored",
  Maya: "devicon-maya-plain colored",
  Blender: "devicon-blender-original colored",
};

/** Mono devicons with theme-aware color (white in dark mode) */
export const skillThemedDevicons: Record<string, string> = {
  GitHub: "devicon-github-original text-neutral-900 dark:text-white",
  Flask: "devicon-flask-original text-neutral-900 dark:text-white",
  "Unreal Engine":
    "devicon-unrealengine-original text-neutral-900 dark:text-white",
};

/** Custom logo URLs when devicon has no match */
export const skillCustomIcons: Record<string, string> = {
  Python:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png",
  Java: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  "C#": "https://www.christianfindlay.com/assets/images/blog/csharp/logo.svg",
  "C++":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png",
  Unity:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png",
  "Blueprint Scripting":
    "https://files.koenig.kodeco.com/uploads/2023/11/unreal_engine_5_blueprints_featured_banner@1.5x.png",
  GameMaker: "https://www.svgrepo.com/show/373617/gamemaker.svg",
  "Roblox Studio":
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/ROBLOX_Studio_icon.png",
  Eclipse:
    "https://www.techspot.com/images2/downloads/topdownload/2019/01/2019-01-16-ts3_thumbs-bc3.png",
  "MS Office":
    "https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png",
  TouchDesigner:
    "https://patchstorage.com/wp-content/uploads/2021/02/TouchDesigner_logo.png",
  "Lens Studio":
    "https://developers.snap.com/refresh/lens-studio/lens-studio-logo.png",
  Figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  Canva:
    "https://521324.fs1.hubspotusercontent-na1.net/hubfs/521324/__hs-marketplace__/APP%20ICON%20-%20GRADIENT_LARGE-1.png",
  "Adobe Suite":
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg",
  Processing:
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg",
  Sublime: "https://www.sublimehq.com/images/sublime_text.png",
  Max: "https://us-east-1.graphassets.com/AYPey75xpR2CpIG3owsnAz/2ojHQlGQLWEzZbA5uKCT",
  "DaVinci Resolve":
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png",
};

export function getSkillThemedDevicon(name: string): string | undefined {
  return skillThemedDevicons[name];
}

export function getSkillCustomIcon(name: string): string | undefined {
  return skillCustomIcons[name];
}

export function getSkillDeviconClass(name: string): string | undefined {
  return skillDeviconClasses[name];
}
