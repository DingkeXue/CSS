/*
* 获取元素的原始高度
* */
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function () {
            let obj = {
                w: image.naturalWidth,
                h: image.naturalHeight
            };
            resolve(obj);
        };
        image.onerror = function () {
            reject(new Error('error'));
        };
        image.src = url;
    })
}
