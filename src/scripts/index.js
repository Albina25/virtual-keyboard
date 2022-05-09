import "../styles/style.scss";
import { keysCode, keysOfKeyboard } from "./keys";
import { createNodeElement } from "./fn.js"

const title = 'Виртуальная клавиатура';
const switchLanguage = 'Change language: Shift + Alt';
const windows = 'Keyboard for Windows';
let lang = sessionStorage.getItem('lang');

const container = createNodeElement('div', 'container');
document.body.append(container);

const titleKeyboard = createNodeElement('h1', 'title-keyboard');
titleKeyboard.append(title);
container.append(titleKeyboard);

const information = createNodeElement('div', 'information');
container.append(information);
const switchLang = createNodeElement('p');
const forWind = createNodeElement('p');
switchLang.append(switchLanguage);
forWind.append(windows);
information.append(switchLang);
information.append(forWind);

const screen = createNodeElement('textarea', 'text-field');
screen.setAttribute('rows', '10');
container.append(screen);

const keyboard = createNodeElement('div', 'keyboard');
keyboard.id = 'keyboard';
container.append(keyboard);

let keyboardKeys = createNodeElement('div', 'keyboard-keys')

function createKeysOfKeydoard() {
    keyboardKeys.remove();
    keyboardKeys = createNodeElement('div', 'keyboard-keys')
    keyboard.append(keyboardKeys);
    let langKeys = [];
    if (lang == 'eng') {
        langKeys = keysOfKeyboard.eng;
    } else {
        langKeys = keysOfKeyboard.ru;
    }
    for (let i = 0; i < langKeys.length; i++) {
        let resultRow = [];
        let row = createNodeElement('div', 'row')
        keyboardKeys.append(row);
        for (let j = 0; j < langKeys[i].length; j++) {
            let key = createNodeElement('div', 'key')
            key.setAttribute('data-code', keysCode[i][j]);
            
            if (keysCode[i][j] === 'Backspace') {
                key.classList.add('key_backspace');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'Tab') {
                key.classList.add('key_tab');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'ShiftLeft') {
                key.classList.add('key_shift-left');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'ShiftRight') {
                key.classList.add('key_shift-right');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'Enter') {
                key.classList.add('key_enter');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'Delete') {
                key.classList.add('key_del');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'CapsLock') {
                key.classList.add('key_capsLock');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'Space') {
                key.classList.add('key_space');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'ControlLeft' || keysCode[i][j] === 'ControlRight') {
                key.classList.add('key_ctrl');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'AltLeft' || keysCode[i][j] === 'AltRight') {
                key.classList.add('key_alt');
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (keysCode[i][j] === 'MetaLeft') {
                key.setAttribute('data-group-keys', 'srecial_key');
            }
            if (langKeys[i][j].match(/[А-Яа-яA-Za-z]/gi)) {
                key.setAttribute('data-lower-case', langKeys[i][j].toLowerCase());
            }
            key.append(langKeys[i][j]);
            resultRow.push(key);
            row.append(key);
        }
    }
    return keyboardKeys;
}

    createKeysOfKeydoard();
    
    const language = 'en';
    let keys = document.querySelectorAll('.key');
    let textField = document.querySelector('.text-field');
    let capsLockKey = document.querySelector('.key_capsLock');
    let cpaseKey = document.querySelector('.key_space');
    let ShiftRightKey = document.querySelector('.key_shift-right');
    let ShiftLeftKey = document.querySelector('.key_shift-left');
    // let cursor = textField.selectionStart;

    function keyMouseDown(code) {
        for (let i = 0; i < keys.length; i++) {
            let keyCode =  keys[i].dataset.code;
            if (code == keyCode && code != 'CapsLock') {
                keys[i].classList.add('active');
            }
            if (code == 'CapsLock') {
                capsLockKey.classList.toggle('active');
                if (keys[i].hasAttribute('data-lower-case') && keys[i].dataset.groupKeys != 'srecial_key') {
                    keys[i].classList.toggle('letter-lower-case');
                }
            }
            if (code === 'Space') {
                cpaseKey.classList.add('active');
            }
            if (code == keyCode && keys[i].dataset.groupKeys != 'srecial_key') {
                if (capsLockKey.classList.contains('active') && keys[i].hasAttribute('data-lower-case')) {
                    textField.append(keys[i].dataset.lowerCase);
                } else {
                    textField.append(keys[i].innerHTML);
                }
            }
            if (code == keyCode && code == 'Tab') {
                textField.append('    ');
            }
            if (code == keyCode && code == '') {
                textField.append('    ');
            }
            if (code == keyCode && code == 'Enter') {
                textField.append('\n');
            }
            if (code == keyCode && code == 'Space') {
                textField.append(' ');
            }
            if (code == keyCode && code == 'Backspace') {
                if (textField.innerHTML) {
                    let text = String(textField.innerHTML);
                    let newText = text.slice(0, text.length - 1);
                    textField.innerHTML = newText;
                }
            }
        }     
    }

    function changeLanguage(code) {
        if (lang == 'rus') { 
            lang = 'eng'
        } else if (lang == 'eng') { 
            lang = 'rus'
        }
        sessionStorage.setItem('lang', lang);
        createKeysOfKeydoard();
    }

    function keyMouseUp(code) {
        for (let i = 0; i < keys.length; i++) {
            let keyCode =  keys[i].dataset.code;
            if (code == keyCode && code != 'CapsLock') {
                keys[i].classList.remove('active');
                keys[i].classList.add('remove');

                setTimeout(() => {
                    keys[i].classList.remove('remove');
                }, 200)
            }
        }
    }

    document.addEventListener('keydown', function(event) {
        keyMouseDown(event.code);   
        if (
        (event.code == 'ShiftLeft' && event.altKey)
        || (event.code == 'ShiftRight' && event.altKey)
        || (event.code == 'AltRight' && event.shiftKey)
        || (event.code == 'AltLeft' && event.shiftKey)) {
            changeLanguage();
          }
    });

    document.addEventListener('keyup', function(event) {
        keyMouseUp(event.code);
    })
  
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('mousedown', function(event) {

            let keyCode = keys[i].dataset.code;
            keyMouseDown(keyCode);   
        })
    }

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('mouseup', function(event) {
            let keyCode = keys[i].dataset.code;
            keyMouseUp(keyCode);
        })
    }
