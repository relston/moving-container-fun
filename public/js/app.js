const {
    dat: { GUI },
  } = window;

const controller = new GUI()
const config = {
    'target-size': 50,
    'rotate-y': 50,
    'rotate-x': 20,
    'vertical': 30,
}
const update = () => {
    Object.entries(config).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
    })
}
const sceneFolder = controller.addFolder('Scene')
sceneFolder.add(config, 'target-size', 20, 100, 1).name('Size').onChange(update)
sceneFolder.add(config, 'rotate-y', 1, 180, 1).name('Rotate Y').onChange(update)
sceneFolder.add(config, 'rotate-x', 1, 180, 1).name('Rotate X').onChange(update)
sceneFolder.add(config, 'vertical', 1, 100, 1).name('Vertical').onChange(update)

update()

const centerElement = el => {
    xMargin = (100 - el.dataset.width) / 2; 
    yMargin = (100 - el.dataset.depth) / 2; 
    xOffset = xMargin + (el.dataset.width / 2);
    yOffset = yMargin + (el.dataset.depth / 2);
    el.style.setProperty('--x', xOffset);
    el.style.setProperty('--y', yOffset);
}
container = document.querySelector('.container');
// center it on plane
centerElement(container);

items = document.querySelectorAll('.item')
items.forEach(centerElement)
// Now I want to scatter them around the container
