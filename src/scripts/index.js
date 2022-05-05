import "../styles/style.scss";
import iam from "../../public/keyboard_icon.png";
const wrapper = document.getElementById('wrapper');
function createImg(url, container) {
    const img = document.createElement('img');
    img.className="img";

    img.src = url;
    container.appendChild(img);
}
createImg(iam, wrapper);