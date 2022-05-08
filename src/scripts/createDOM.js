import { engKeys, keysCode } from './keys.js'

export function createNodeElement(element, ...className) {
    const node = document.createElement(element);
    node.classList.add(...className);
    return node;
}

const title = 'Виртуальная клавиатура';
const switchLanguage = 'Change language: Shift + Alt';
const windows = 'Keyboard for Windows';

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

export function createKeysOfKeydoard() {
    const keyboardKeys = createNodeElement('div', 'keyboard-keys')
    keyboard.append(keyboardKeys);
    for (let i = 0; i < engKeys.length; i++) {
        let resultRow = [];
        let row = createNodeElement('div', 'row')
        keyboardKeys.append(row);
        for (let j = 0; j < engKeys[i].length; j++) {
            let key = createNodeElement('div', 'key')
            key.setAttribute('data-code', keysCode[i][j]);
            
            // console.log('22= ',String(keysCode[i][j]).includes('Key') );
            if (String(keysCode[i][j]).includes('Key')) {
                key.setAttribute('data-lower-case', engKeys[i][j].toLowerCase());
                key.classList.add('letter');
            }
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
            key.append(engKeys[i][j]);
            resultRow.push(key);
            row.append(key);
        }
    }
    return keyboardKeys;
}

