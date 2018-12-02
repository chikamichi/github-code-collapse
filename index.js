var toggleDisplay = {
  block: 'none',
  none: 'block'
};

var tease = document.querySelector('.repository-content .commit-tease');
var files = document.querySelector('.repository-content .files');

if (tease && files) {
  tease.style.cursor = 'pointer';
  files.style.display = 'none';
  tease.addEventListener('click', function() {
    files.style.display = toggleDisplay[files.style.display];
  });
}