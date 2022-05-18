const noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

document.addEventListener('contextmenu', event => event.preventDefault());
