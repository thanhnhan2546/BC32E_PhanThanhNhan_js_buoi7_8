var arr = [-9, -10, -1, -5, 0, 1, 2, 3,4,5];

document.getElementById('btnNhapSo').onclick = function () {
    var so = Number(document.getElementById('nhapSo').value);

    arr.push(so);

    document.getElementById('arrNumber').innerHTML = "Mảng: "+ arr;
}

/**
 * Bài 1
 */
document.getElementById('kq_Bai1').onclick = function () {
    var arrDuong = soDuong();
    var count = 0;
    var ketQua = '';
    console.log(arrDuong.length);
    for(var i=0; i< arrDuong.length; i++){
        count += arrDuong[i];
    }

    document.getElementById('KQ1').innerHTML = "Tổng các số dương: "+ count;
}

/**
 * Hàm tìm số dương trong mảng
 * @returns trả về mảng số dương
 */
function soDuong (){
    var arrDuong =[];
    for(var i=0; i< arr.length; i++){
        if(arr[i] > 0)
            arrDuong.push(arr[i]);
    }
    return arrDuong;
}

/**
 * Bài 2:
 */
document.getElementById('kq_Bai2').onclick = function () {
    var dem = soDuong().length;
    
    document.getElementById('KQ2').innerHTML = "Số lượng số dương: " + dem;
}

/**
 * Bài 3
 */
 document.getElementById('kq_Bai3').onclick = function () {
    var gtnn = arr[0];

    for(var i=1; i< arr.length; i++){
        if(arr[i] < gtnn)
            gtnn = arr[i];
    }
    
    document.getElementById('KQ3').innerHTML = "Số nhỏ nhất: " + gtnn;
}

/**
 * Bài 4
 */
 document.getElementById('kq_Bai4').onclick = function () {
    var arrDuong = soDuong();
    var gtnn = arrDuong[0];

    for(var i=1; i< arrDuong.length; i++){
        if(arrDuong[i] < gtnn){
            gtnn = arrDuong[i];
        }
        
    }
    console.log(gtnn);   
    document.getElementById('KQ4').innerHTML = "Số dương nhỏ nhất: " + gtnn;
}

/**
 * Bài 5
 */
document.getElementById('kq_Bai5').onclick = function () {
    var soChan;
    var flag = false;
    for(var i=arr.length-1; i>=0; i--){
        if(arr[i] % 2 == 0){
            soChan = arr[i];
            flag = true;
            break;
        }
    }
    if(flag)
        document.getElementById('KQ5').innerHTML = "Số chẵn cuối cùng: "+ soChan;
    else
        document.getElementById('KQ5').innerHTML = "Không có số chẵn trong mảng";
}

/**
 * Bài 6
 */
document.getElementById('kq_Bai6').onclick = function () {
    var vt1 = Number(document.getElementById('viTri1').value);
    var vt2 = Number(document.getElementById('viTri2').value);
    
    var temp = arr[vt1];
    arr[vt1] = arr[vt2];
    arr[vt2] = temp;

    document.getElementById('KQ6').innerHTML = "Mảng sau khi đổi chỗ: "+ arr;
}

/**
 * Bài 7
 */
document.getElementById('kq_Bai7').onclick = function () {
    
    
    document.getElementById('KQ7').innerHTML = "Mảng được sắp xếp: "+ arr.sort();
}

/**
 * Bài 8
 */

/**
 * Kiểm tra có phải là số nguyên tố hay không
 * @param {*} value giá trị cần kiểm tra
 * @returns Nếu là số nguyên tố sẽ trả về true, nếu không sẽ trả về false
 */
function ktraSoNguyenTo(value){
    var flag= true;
    for(var i=2; i<= Math.sqrt(Math.abs(value)); i++){
        if(value % i == 0){
            flag = false;
            break;
        }
    }
    return flag;
}
document.getElementById('kq_Bai8').onclick = function () {
    var soNguyenTo;
    var flag = false;
    for(var i=0; i< arr.length; i++){
        if(ktraSoNguyenTo(arr[i])){
            soNguyenTo = arr[i];
            flag = true;
            break;
        }
    }
    if(flag)
        document.getElementById('KQ8').innerHTML = "Số nguyên tố đầu tiên: "+ soNguyenTo;
    else
        document.getElementById('KQ8').innerHTML = "Không có số nguyên tố trong mảng";
}

/**
 * Bai 9:
 */
var arrBai9 = [];
document.getElementById('btnNhapSo_bai9').onclick = function () {
    var so = Number(document.getElementById('nhapSo_bai9').value);

    arrBai9.push(so);

    document.getElementById('arrBai9').innerHTML = "Mảng: "+ arrBai9;
}

document.getElementById('kq_Bai9').onclick = function () {
    var count = 0;
    
    for(var i=0; i< arrBai9.length; i++){
        if(Number.isInteger(arrBai9[i])){
            count++;
        }
    }

    document.getElementById('KQ9').innerHTML = "Sô nguyên trong mảng là: "+ count;
}

/**
 * Bài 10
 */
document.getElementById('kq_Bai10').onclick = function () {
    var countAm = 0;
    var countDuong = 0;
    var ketQua ='';

    for(var i=0; i< arr.length; i++){
        if(arr[i] > 0){
            countDuong++;
        }
        else if(arr[i] < 0){
            countAm++;
        }
    }
    if(countAm > countDuong){
        ketQua = 'Số âm > Số dương';
    }
    else if(countAm < countDuong){
        ketQua = 'Số âm < Số dương';
    }
    else{
        ketQua = 'Số âm = Số dương';
    }

    document.getElementById('KQ10').innerHTML = ketQua;
}
