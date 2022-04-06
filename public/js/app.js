const {
    dat: { GUI },
  } = window;

const controller = new GUI()
const config = {
    'target-size': 30,
    'rotate-x': 20,
    'rotate-y': 20,
}
const update = () => {
    Object.entries(config).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
    })
}
const sceneFolder = controller.addFolder('Scene')
sceneFolder.add(config, 'target-size', 20, 100, 1).name('Size').onChange(update)
sceneFolder.add(config, 'rotate-x', 1, 180, 1).name('Rotate X').onChange(update)
sceneFolder.add(config, 'rotate-y', 1, 180, 1).name('Rotate Y').onChange(update)

// const cuboid_folder = controller.addFolder('Cuboid')
// cuboid_folder.add(config, 'cuboid-height', 1, 20, 0.1)

// cuboid_folder.add(config, 'cuboid-width', 1, 20, 0.1)
//     .name('Width (vmin)')
//     .onChange(update)
// cuboid_folder.add(config, 'cuboid-depth', 1, 20, 0.1)
//     .name('Depth (vmin)')
//     .onChange(update)
  // You have a choice at this point. Use x||y on the plane
  // Or, use standard transform with vmin.
// cuboid_folder.add(config, 'x', 0, 40, 0.1)
//     .name('X (vmin)')
//     .onChange(update)
// cuboid_folder.add(config, 'y', 0, 40, 0.1)
//     .name('Y (vmin)')
//     .onChange(update)
// cuboid_folder.add(config, 'z', -25, 25, 0.1)
//     .name('Z (vmin)')
//     .onChange(update)
// cuboid_folder.add(config, 'rotate-cuboid-x', 0, 360, 1)
//     .name('Rotate X (deg)')
//     .onChange(update)
// cuboid_folder.add(config, 'rotate-cuboid-y', 0, 360, 1)
//     .name('Rotate Y (deg)')
//     .onChange(update)
// cuboid_folder.add(config, 'rotate-cuboid-z', 0, 360, 1)
//     .name('Rotate Z (deg)')
//     .onChange(update)

update()