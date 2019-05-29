let dpr, rem, scale;
let docEl = document.documentElement;
let clientWidth = docEl.clientWidth;
let fontEl = document.createElement("style");
let metaEl = document.querySelector('meta[name="viewport"]');
dpr = window.devicePixelRatio || 1;
rem = clientWidth * dpr / 10;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute("content", "width=" + clientWidth + ",initial-scale=" + scale + ",maximum-scale=" + scale + ", minimum-scale=" + scale + ",user-scalable=no");
// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute("data-dpr", dpr);
// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";
window.rem2px = function(v)
{
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v)
{
    v = parseFloat(v);
    return v / rem;
};
window.dpr = dpr;
window.rem = rem;
export default px2rem;
