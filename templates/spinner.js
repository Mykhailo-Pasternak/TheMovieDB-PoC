const app = document.getElementById("app");
export function spinner() {
    const newEl = document.createElement("div");
    newEl.classList.add("spinner");

    newEl.innerHTML = "<div class=\"lds-default\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> ";

    app.append(newEl);
}
;
