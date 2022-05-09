export function createNodeElement(element, ...className) {
    const node = document.createElement(element);
    node.classList.add(...className);
    return node;
}

