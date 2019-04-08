var num = [12, 435, 453, 67, 234, 86, 234, 354, 4, 56, 2, 67, 4, 3245, 32];
        getNums(num);
        console.log(num.toString());//冒泡排序
        var avg = getAvg(num);
        console.log(avg);//平均值
        console.log(max(1, 2, 3, 4, 5));//最大值,用arguments来获取参数，假如传这里的num的话，得不到里面的值
        var arr = new Array('乔丹', '科比', '加内特');
        var str = myJoin('|', arr);
        console.log(str); //在名字中间插入 |
        var arr2 = new Array('3', 'a', '8', 'haha');
        myReverse(arr2);
        console.log(arr2);
        function myReverse(arry) {
            var temp = '';
            for (var i = 0; i < arry.length / 2; i++) {
                //swap(arry[i], arry[arry.length - 1 - i]) 通过这样传参数过去是不能交换的，因为数组是引用类型
                temp = arry[i];                
                arry[i] = arry[arry.length - 1 - i];
                arry[arry.length - 1 - i] = temp;
            }
        }
        function swap(x, y) {
            var temp = '';
            temp = x;
            x = y;
            y = temp;
        }
        function myJoin(temp, arry) {
            var result = '';
            for (var i = 0; i < arry.length - 1; i++) {
                result += arry[i] + temp;
            }
            result += arry[arry.length - 1];
            return result;
        }
        function max() {
            var maxNum = 0;
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] > maxNum) {
                    maxNum = arguments[i];
                }
            }
            return maxNum;
        };
        function getNums(nums) {
            for (var i = nums.length - 1; i > 0; i--) {
                for (var j = 0; j < i; j++) {
                    if (nums[j] > nums[j + 1]) {
                        var temp = nums[j];
                        nums[j] = nums[j + 1];
                        nums[j + 1] = temp;
                    }
                }
            }
        }
        function getAvg(nums) {
            var sum = 0;
            for (var i = 0; i < nums.length; i++) {
                sum += nums[i];
            }
            return sum / nums.length;
        }