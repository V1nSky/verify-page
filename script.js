function hideAll() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('faq').style.display = 'none';
}

function showMain() { hideAll(); document.getElementById('main').style.display = 'block'; }
function showInstruction() { hideAll(); document.getElementById('instruction').style.display = 'block'; }
function showFAQ() { hideAll(); document.getElementById('faq').style.display = 'block'; }

function toggleTheme() { document.body.classList.toggle('light'); }

showMain();
