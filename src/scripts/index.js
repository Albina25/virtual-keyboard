import "../styles/style.scss";
import { engKeys, keysCode } from "./keys";
import { createNodeElement, createKeysOfKeydoard } from "./createDOM.js"

// let a = [];
// document.onkeydown = function (event) { 
//     a.push(event);
//     console.log(a);
// }

window.onload = function() {
    createKeysOfKeydoard();

    let keys = document.querySelectorAll('.key');
    let textField = document.querySelector('.text-field');
    let capsLockKey = document.querySelector('.key_capsLock');
    let cpaseKey = document.querySelector('.key_space');
    // let cursor = textField.selectionStart;

    function keyMouseDown(code) {
        for (let i = 0; i < keys.length; i++) {
            let keyCode =  keys[i].dataset.code;
            if (code == keyCode && code != 'CapsLock') {
                keys[i].classList.add('active');
                
            }
            if (code == 'CapsLock') {
                capsLockKey.classList.toggle('active');
            }
            if (code == 'Space') {
                cpaseKey.classList.add('active');
            }
            if (code == keyCode && keys[i].dataset.groupKeys != 'srecial_key') {
                if (capsLockKey.classList.contains('active') && String(keyCode).includes('Key')) {
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
        }     
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
}


// keys.forEach(key => 
//     key.onclick = function(event) {
//         keys.forEach(key => 
//             key.classList.remove('active'));
//         // let code = key.getAttribute('data');
//         event.target.classList.add('active'); 
//         textField.append(key.textContent);
//         // textField.textContent = textField.textContent + key.textContent;
    
// });
