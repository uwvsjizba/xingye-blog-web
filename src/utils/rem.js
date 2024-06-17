const BASE_SIZE = 16;
const BASE_WIDTH = 1536;

const setRem = function() {
    // 获取当前屏幕宽度 计算出缩放比例
    let scale =  window.screen.width / BASE_WIDTH;
    
    // 按比例设定 html 的 font-size
    document.documentElement.style.fontSize = BASE_SIZE * Math.min(scale, 2) + "px";
}

setRem();

window.addEventListener('resize', setRem);