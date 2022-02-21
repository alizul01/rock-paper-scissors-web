function getChoosedFromPc() {
    const comp_choose = Math.round(Math.random() * 10);
    if (comp_choose <= 3) return 'rock';
    if (comp_choose > 3 && comp_choose <= 6) return 'paper';
    return 'scissors';
}

function getHasil(comp, player) {
    if (player == comp) return 'draw';
    if (player == 'rock') return (comp == 'paper') ? 'Lose' : 'Win';
    if (player == 'paper') return (comp == 'scissors') ? 'Lose' : 'Win';
    return (comp == 'rock') ? 'Lose' : 'Win';
}

const btn_rock = document.getElementById('rock');
const btn_paper = document.getElementById('paper');
const btn_scissors = document.getElementById('scissors');

btn_rock.addEventListener('click', () => {
    const comp_chooser = getChoosedFromPc();
    const hasil = getHasil(comp_chooser, 'rock');

    const img_comp = document.getElementsByClassName('img-komputer')[0];

    img_comp.setAttribute('src', `img/${comp_chooser}.png`);

    const info = document.getElementsByClassName('info')[0];
    
    info.innerHTML = hasil;
})

btn_paper.addEventListener('click', () => {
    const comp_chooser = getChoosedFromPc();
    const hasil = getHasil(comp_chooser, 'paper');
    const img_comp = document.getElementsByClassName('img-komputer')[0];

    img_comp.setAttribute('src', `img/${comp_chooser}.png`);

    const info = document.getElementsByClassName('info')[0];
    
    info.innerHTML = hasil;
})

btn_scissors.addEventListener('click', () => {
    const comp_chooser = getChoosedFromPc();
    const hasil = getHasil(comp_chooser, 'scissors');
    const img_comp = document.getElementsByClassName('img-komputer')[0];

    img_comp.setAttribute('src', `img/${comp_chooser}.png`);
    
        const info = document.getElementsByClassName('info')[0];
    
        info.innerHTML = hasil;
})
