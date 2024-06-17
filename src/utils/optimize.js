
/**
 * 返回一个节流函数
 * @param {Function} fn 要节流的函数
 * @param {number} delay 节流时间间隔
 * @returns 
 */

function throttle(fn, delay=500) {
    let timer = null;
    let that = this;

    return (...args)=>{
        if(timer === null) {
            fn.apply(that, args);
            timer = setTimeout(()=>{
                timer = null;
            }, delay);
        }
    }
}

/**
 * 返回一个防抖函数
 * @param {Function} fn 要防抖的函数
 * @param {number} delay 防抖时间间隔
 * @returns 
 */

function debounce(fn, delay=500) {
    let timer = null;
    let that = this;

    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(that, args);
        }, delay);
    }
}

export {
    debounce,
    throttle
}