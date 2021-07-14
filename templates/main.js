const app = document.getElementById("app");
export function main() {
    const isExist = document.querySelector("main");
    if (isExist) {
        return;
    }

    const newElem = document.createElement("main");
    newElem.innerHTML = ` <div id="root"></div>
            `;

    app.append(newElem);
}
