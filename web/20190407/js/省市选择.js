var datas = { "山东": ["青岛", "济南", "烟台"], "山西": ["大同", "太原", "运城"] };
window.onload = function () {
    //窗体加载后将省份信息添加上去
    var proSelectobj = document.getElementById('provinces');
    for (const key in datas) {
        if (datas.hasOwnProperty(key)) {
            const element = datas[key];
            var optionobj = document.createElement('option');
            optionobj.innerHTML = key;
            optionobj.value = key;
            proSelectobj.appendChild(optionobj);

            
        }
    }
    //当省份改变事件触发时：
    proSelectobj.onchange = function () {
        var citiesobj = datas[this.value];
        var citiesSelectogj = document.getElementById('cities');
        //先将原先的option清除
        while (citiesSelectogj.firstChild) {
            citiesSelectogj.removeChild(citiesSelectogj.firstChild);
        }
        //将城市添加到select中
        for (let index = 0; index < citiesobj.length; index++) {
            const element = citiesobj[index];
            var citiesOptionobj = document.createElement('option');
            citiesOptionobj.innerHTML = element;
            citiesOptionobj.value = element;
            citiesSelectogj.appendChild(citiesOptionobj);
        }

    };
    //手动触发一次事件
    proSelectobj.onchange();
};