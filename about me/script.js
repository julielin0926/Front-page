let cloudLeft = document.getElementById('cloud-left');
let cloudRight = document.getElementById('cloud-right');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let groundLeft = document.getElementById('ground-left');
let groundRight = document.getElementById('ground-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    cloudLeft.style.left = value * -4 + 'px';
    cloudRight.style.left = value * 4 + 'px';
    groundLeft.style.left = value * -0.5 + 'px';
    groundRight.style.left = value * 0.5 + 'px';
})