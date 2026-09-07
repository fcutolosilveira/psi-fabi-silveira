const toggle = document.getElementById("notes-toggle");
const stored = localStorage.getItem("fabi-notes");

if (stored === "off") {
  toggle.checked = false;
  document.body.dataset.notes = "off";
}

toggle.addEventListener("change", () => {
  const mode = toggle.checked ? "on" : "off";
  document.body.dataset.notes = mode;
  localStorage.setItem("fabi-notes", mode);
});
