var arr = [];

document.getElementById("btnNhapSo").onclick = function () {
  var so = Number(document.getElementById("nhapSo").value);

  arr.push(so);

  document.getElementById("arrNumber").innerHTML = "Mảng: " + arr;
};

/**
 Bài 1
Đầu vào:
- Một mảng số 

Xử lý:
- Tạo biến count = 0 
- Duyệt mảng từ vị trí 0 đến hết mảng
- Nếu phần tử trong mảng lớn hơn 0 thì cộng thêm vào biến count

Đầu ra:
- Tổng các số dương trong mảng
 */
document.getElementById("kq_Bai1").onclick = function () {
  var arrDuong = soDuong();
  var count = 0;
  var ketQua = "";
  for (var i = 0; i < arrDuong.length; i++) {
    count += arrDuong[i];
  }

  document.getElementById("KQ1").innerHTML = "Tổng các số dương: " + count;
};

/**
 * Hàm tìm số dương trong mảng
 * @returns trả về mảng số dương
 */
function soDuong() {
  var arrDuong = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arrDuong.push(arr[i]);
  }
  return arrDuong;
}

/**
 Bài 2:

 Đầu vào:
 - Một mảng số

 Xử lý:
 - Tạo biến dem để đếm số dương
 - Duyệt mảng từ vị trí 0 đến hết mảng
 - Nếu phần tử trong mảng lớn hơn 0, biến đếm sẽ cộng thêm 1

 Đầu ra:
 - Số lượng số dương trong mảng
 */
document.getElementById("kq_Bai2").onclick = function () {
  var dem = soDuong().length;

  document.getElementById("KQ2").innerHTML = "Số lượng số dương: " + dem;
};

/**
 Bài 3

 Đầu vào:
 - Một mảng số;

 Xử lý:
 - Tạo biến gtnn và ban đầu gán phần tử thứ 0 trong mảng là gtnn
 - Duyệt mảng lần lượt từ vị trí 1 đến hết mảng
 - Nếu có giá trị nhỏ hơn gtnn thì gtnn sẽ được gán là giá trị đó

 Đầu ra:
 - Giá trị nhỏ nhất trong mảng
 */
document.getElementById("kq_Bai3").onclick = function () {
  var gtnn = GiaTriNhoNhat(arr);

  document.getElementById("KQ3").innerHTML = "Số nhỏ nhất: " + gtnn;
};

/**
 * Tìm giá trị nhỏ nhất trong mảng
 * @param {*} arrNumber Mảng cần tìm giá trị nhỏ nhất
 * @returns Giá trị nhỏ nhất trong mảng
 */
function GiaTriNhoNhat(arrNumber) {
  var gtnn = arrNumber[0];
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < gtnn) {
      gtnn = arr[i];
    }
  }

  return gtnn;
}
/**
 Bài 4
  
 Đầu vào:
 - Một mảng số;

 Xử lý:
 - Tạo mảng arrDuong để lấy những số dương trong mảng
 - Tạo biến gtnn và ban đầu gán phần tử thứ 0 trong arrDuong là gtnn
 - Duyệt mảng arrDuong lần lượt từ vị trí 1 đến hết mảng
 - Nếu có giá trị nhỏ hơn gtnn thì gtnn sẽ được gán là giá trị đó

 Đầu ra:
 - Giá trị dương nhỏ nhất trong mảng
 */
document.getElementById("kq_Bai4").onclick = function () {
  var arrDuong = soDuong();
  var gtnn = GiaTriNhoNhat(arrDuong);

  document.getElementById("KQ4").innerHTML = "Số dương nhỏ nhất: " + gtnn;
};

/**
 Bài 5

 Đầu vào:
 - Một mảng số

 Xử lý:
 - Tạo biến soChan để gán số chẵn cuối cùng trong mảng
 - Duyệt mảng từ vị trí cuối cùng đến vị trí thứ 0 
 - Nếu gặp giá trị chẵn thì sẽ gán vào soChan và ngừng duyệt mảng

 Đầu ra:
 - Số chẵn cuối cùng trong mảng
 */
document.getElementById("kq_Bai5").onclick = function () {
  var soChan = 0;
  var flag = false;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      soChan = arr[i];
      flag = true;
      break;
    }
  }
  if (flag)
    document.getElementById("KQ5").innerHTML = "Số chẵn cuối cùng: " + soChan;
  else document.getElementById("KQ5").innerHTML = "Không có số chẵn trong mảng";
};

/**
Bài 6

Đầu vào:
- Một mảng số
- Vị trí thứ nhất cần đổi
- Vị trí thứ hai cần đổi

Xử lý:
- Tạo biến vt1 và vt2 để nhận Vị trí thứ nhất và Vị trí thứ hai
- Tiến hành đổi chỗ phần tử ở 2 vị trí đó:
    + Tạo biến temp và gán giá trị ở vị trí thứ nhất
    + Vị trí thứ nhất sẽ được gán thành vị trí thứ hai
    + Vị trí thứ hai sẽ được gán thành biến temp

Đầu ra:
- Mảng đã được đổi chổ
 */
document.getElementById("kq_Bai6").onclick = function () {
  var vt1 = Number(document.getElementById("viTri1").value);
  var vt2 = Number(document.getElementById("viTri2").value);

  if (vt1 > arr.length || vt1 < 0 || vt2 > arr.length || vt2 < 0) {
    document.getElementById("KQ6").innerHTML = "Nhập sai vị trí trong mảng";
  } else {
    var arrSwap = swapArray(arr, vt1, vt2);
    document.getElementById("KQ6").innerHTML =
      "Mảng sau khi đổi chỗ: " + arrSwap;
  }
};
/**
 * Đổi chỗ 2 phần tử trong mảng
 * @param {*} arrNumber mảng cần đổi chỗ
 * @param {*} vt1 vị trí thứ nhất trong mảng
 * @param {*} vt2 vị trí thứ hai trong mảng
 * @returns trả về mảng đã đổi chỗ vt1 và vt2
 */
function swapArray(arrNumber, vt1, vt2) {
  var temp = arrNumber[vt1];
  arrNumber[vt1] = arrNumber[vt2];
  arrNumber[vt2] = temp;

  return arrNumber;
}
/**
Bài 7

Đầu vào:
- Một mảng số

Xử lý:
- Tạo arrSort và gán thành mảng đã được sắp xếp bằng hàm sort() trong javascript

Đầu ra:
- Mảng đã được sắp xếp
 */
document.getElementById("kq_Bai7").onclick = function () {
  var arrSort = arr.sort(function (pt2, pt1) {
    return pt2 - pt1;
  });

  document.getElementById("KQ7").innerHTML = "Mảng được sắp xếp: " + arrSort;
};

/**
Bài 8

Đầu vào:
- Một mảng số

Xử lý:
- Tạo biến soNguyenTo
- Duyệt mẩng từ vị trí 0 đến hết mảng
- Kiểm tra từng giá trị trong mảng xem có phải số nguyên tố hay không bằng cách:
    + Tạo vòng lặp i = 2 đến căn bậc 2 của giá trị cần kiểm tra
    + Nếu giá trị chia hết cho i thì dừng vòng lặp và trả về cờ hiệu = false (Không là số nguyên tố)
    + Nếu chạy hết vòng lặp mà vẫn không chia hết cho bất kỳ số nào thì trả về cờ hiệu = true (Là số nguyên tố)
- Nếu giá trị kiểm tra là số nguyên tố thì dừng vòng lặp và gán soNguyenTo là giá trị đó
- Nếu duyệt hết mảng vẫn không có số nguyên tố thì xuất thông báo "Không có số nguyên tố trong mảng"

Đầu ra:
- Số nguyên tố đầu tiên trong mảng hoặc thông báo "Không có số nguyên tố trong mảng"
 */

/**
 * Kiểm tra có phải là số nguyên tố hay không
 * @param {*} value giá trị cần kiểm tra
 * @returns Nếu là số nguyên tố sẽ trả về true, nếu không sẽ trả về false
 */
function ktraSoNguyenTo(value) {
  var flag = true;
  for (var i = 2; i <= Math.sqrt(Math.abs(value)); i++) {
    if (value % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
document.getElementById("kq_Bai8").onclick = function () {
  var soNguyenTo;
  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (ktraSoNguyenTo(arr[i])) {
      soNguyenTo = arr[i];
      flag = true;
      break;
    }
  }
  if (flag)
    document.getElementById("KQ8").innerHTML =
      "Số nguyên tố đầu tiên: " + soNguyenTo;
  else
    document.getElementById("KQ8").innerHTML =
      "Không có số nguyên tố trong mảng";
};

/**
Bài 9:

Đầu vào:
- Một mảng số mới

Xử lý:
- Tạo biến count = 0
- Duyệt mảng mới từ vị trí 0 đến hết mảng
- Kiểm tra giá trị có phải là số nguyên hay không bằng Number.isInteger() trong javascript
- Nếu là số nguyên thì count tăng lên 1 

Đầu ra:
- Số lượng số nguyên trong mảng
 */
var arrBai9 = [];
document.getElementById("btnNhapSo_bai9").onclick = function () {
  var so = Number(document.getElementById("nhapSo_bai9").value);

  arrBai9.push(so);

  document.getElementById("arrBai9").innerHTML = "Mảng: " + arrBai9;
};

document.getElementById("kq_Bai9").onclick = function () {
  var count = 0;

  for (var i = 0; i < arrBai9.length; i++) {
    if (Number.isInteger(arrBai9[i])) {
      count++;
    }
  }

  document.getElementById("KQ9").innerHTML =
    "Số nguyên trong mảng là: " + count;
};

/**
Bài 10

Đầu vào:
- Một mảng số

Xử lý:
- Tạo biến countAm = 0, countDuong = 0, ketQua = ''
- Duyệt mảng từ vị trí 0 đến hết mảng
    + Nếu giá trị lớn hơn 0 thì countDuong tăng 1
    + Nếu giá trị nhỏ hơn 1 thì countAm tăng 1
- So sánh 2 biến countAm và countDuong:
    + Nếu countAm lớn hơn thì  ketQua = "Số âm > Số dương"
    + Nếu countDuong lớn hơn thì ketQua = "Số âm < Số dương"
    + Nếu countAm = countDuong thì ketQua = "Số âm = Số dương"

Đầu ra:
- Kết quả so sánh giữa số lượng số âm và số lượng số dương trong mảng (biến ketQua)
 */
document.getElementById("kq_Bai10").onclick = function () {
  var countAm = 0;
  var countDuong = 0;
  var ketQua = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countDuong++;
    } else if (arr[i] < 0) {
      countAm++;
    }
  }
  if (countAm > countDuong) {
    ketQua = "Số âm > Số dương";
  } else if (countAm < countDuong) {
    ketQua = "Số âm < Số dương";
  } else {
    ketQua = "Số âm = Số dương";
  }

  document.getElementById("KQ10").innerHTML = ketQua;
};
