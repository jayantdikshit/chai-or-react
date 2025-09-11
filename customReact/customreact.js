function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Add children (text or elements)
    domElement.innerHTML = reactElement.children;

    // Add props (like href, target, id, etc.)
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);