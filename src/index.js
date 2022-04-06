import './index.scss';

document.addEventListener('click', e => {
    if(e.target.closest('.cookie__reject') || e.target.closest('.cookie__accept')){
        document.querySelector('.cookie').classList.remove('show')
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(async () => {document.querySelector('.cookie').classList.add('show')}, 2000);
});

document.addEventListener('click', e => {
    if(e.target.closest('.intro__right-agreement_label')){
        document.querySelector('.intro__right-button').classList.toggle('active')
    }
});

document.addEventListener('click', e => {
    if(e.target.closest('.intro__right-button')){
        e.preventDefault();
        if(e.target.closest('.intro__right-button.active')){
            let regexp = /^[\d\w\.\-]+@[\w\.\-]+\.\w{2,3}$/;
            if(regexp.test(document.querySelector('.intro__right-mail').value)){
                alert('You agree with Privacy Policy!');
                document.querySelector('.intro__right-mail').classList.remove('_err');
                document.querySelector('.intro__right-mail').value = '';
                document.querySelector('.intro__right-agreement_input').checked = false;
            } else{
                document.querySelector('.intro__right-mail').classList.add('_err');
            }
        }
    }
});