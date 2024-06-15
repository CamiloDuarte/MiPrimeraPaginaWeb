let toggle = document.getElementById("toggle")
let label_icon = document.getElementById("label-icon")

toggle.addEventListener('change', (event) => {
  let checked = event.target.checked

  document.body.classList.toggle("dark-mode");
  if (checked == true) {

    label_icon.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {
    label_icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
})
