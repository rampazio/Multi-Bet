let theme = 'light';

function setDarkTheme() {
  theme = 'dark';
  document.body.classList.add('dark-theme');
  document.querySelector('.lampada__ligada').classList.add('lampada__desligada');
}

function setLightTheme() {
  theme = 'light';
  document.body.classList.remove('dark-theme');
  document.querySelector('.lampada__ligada').classList.remove('lampada__desligada');
}

function toggleTheme() {
  if (theme === 'light') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}





