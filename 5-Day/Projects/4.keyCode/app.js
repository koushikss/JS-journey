const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
        <div class="key">
        ${event.key}
        </div>

    `;
});
