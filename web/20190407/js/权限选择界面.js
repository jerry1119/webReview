window.onload = function(){
            var s1obj = document.getElementById('s1');
            var s2obj = document.getElementById('s2');
            document.getElementById('btnAllRight').onclick = function(){
                changeAll(s1obj,s2obj);
            };
            document.getElementById('btnSelectRight').onclick = function(){
                changeSelect(s1obj,s2obj);
            };
            document.getElementById('btnSelectLeft').onclick = function(){
                changeSelect(s2obj,s1obj);
            };
            document.getElementById('btnAllLeft').onclick = function(){
                changeAll(s2obj,s1obj);
            };
        };
        //将所有的option项从一个select换到另一个select
        function changeAll(current,target){
            //得到当期的所有option
            var optionobjs = current.getElementsByTagName('option'); 
            //将所有的option循环添加到目标select
            //注意这里的循环不能从小到大，不然自己这边不够了，循环就跳出了，所以用从大到小
            //从大到小的话，到另一边顺序就反了，所以要用 appendchild的另一个方法inserBefore，在指定index插入
            for (let index = optionobjs.length-1; index >=0 ; index--) {
                const element = optionobjs[index];
                target.insertBefore(element,target.firstChild);
            }          
        };
        //将所选择的项从一个select换到另一个select
        function changeSelect(current,target){
            //得到所有的option
            let optionobjs = current.getElementsByTagName('option'); 
            for (let index = optionobjs.length-1; index >=0 ; index--) {
                const element = optionobjs[index];
                if (element.selected) {
                    // target.insertBefore(element, target.firstChild);
                    target.appendChild(element);
                }
            }  
        };