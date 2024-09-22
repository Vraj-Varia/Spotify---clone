const settings_btn = document.getElementById('fourth');
const home_btn = document.getElementById('second');

let home_page = document.getElementById('song_list');


settings_btn.addEventListener('click', (e) => {
  e.preventDefault();

  home_page.style.display = "none";
  let settings = document.getElementById('settings').style.display = "flex";

})

home_btn.addEventListener('click', (e) => {
  e.preventDefault();

  home_page.style.display = "block";
  let settings = document.getElementById('settings').style.display = "none";

})