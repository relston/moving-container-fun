const {
    dat: { GUI },
  } = window;

const CONTROLLER = new GUI()
const CONFIG = {
    // 'cuboid-height': 94,
    // 'cuboid-width': 80,
    // 'cuboid-depth': 78,
    x: 0,
    y: 0,
    z: 0,
    'rotate-cuboid-x': 0,
    'rotate-cuboid-y': 0,
    'rotate-cuboid-z': 0,
}
const UPDATE = () => {
    Object.entries(CONFIG).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
    })
}
const CUBOID_FOLDER = CONTROLLER.addFolder('Cuboid')
// CUBOID_FOLDER.add(CONFIG, 'cuboid-height', 1, 20, 0.1)
//     .name('Height (vmin)')
//     .onChange(UPDATE)

// CUBOID_FOLDER.add(CONFIG, 'cuboid-width', 1, 20, 0.1)
//     .name('Width (vmin)')
//     .onChange(UPDATE)
// CUBOID_FOLDER.add(CONFIG, 'cuboid-depth', 1, 20, 0.1)
//     .name('Depth (vmin)')
//     .onChange(UPDATE)
  // You have a choice at this point. Use x||y on the plane
  // Or, use standard transform with vmin.
CUBOID_FOLDER.add(CONFIG, 'x', 0, 40, 0.1)
    .name('X (vmin)')
    .onChange(UPDATE)
CUBOID_FOLDER.add(CONFIG, 'y', 0, 40, 0.1)
    .name('Y (vmin)')
    .onChange(UPDATE)
CUBOID_FOLDER.add(CONFIG, 'z', -25, 25, 0.1)
    .name('Z (vmin)')
    .onChange(UPDATE)
CUBOID_FOLDER.add(CONFIG, 'rotate-cuboid-x', 0, 360, 1)
    .name('Rotate X (deg)')
    .onChange(UPDATE)
CUBOID_FOLDER.add(CONFIG, 'rotate-cuboid-y', 0, 360, 1)
    .name('Rotate Y (deg)')
    .onChange(UPDATE)
CUBOID_FOLDER.add(CONFIG, 'rotate-cuboid-z', 0, 360, 1)
    .name('Rotate Z (deg)')
    .onChange(UPDATE)

UPDATE()