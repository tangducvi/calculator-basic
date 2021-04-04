// hàm lấy gúa trị cũ
function LayGiaTriCu() {
	return document.querySelector(".history-value").innerText;
}

// hàm in ra giá trị cũ

function InGiaTriCu(so) {
	document.querySelector(".history-value").innerText = so;
}

// hàm in gia trị mới

function InGiaTriMoi(so) {
	if(so=="") {
		document.querySelector(".output-value").innerText = so;
	} else {
		document.querySelector(".output-value").innerText = DinhDangSo(so);
	}
}

function DinhDangSo(so) {
	if(so=='-'){
		return '';
	}
	var n = Number(so); // chuyển dạng chuỗi sang số
	var value = n.toLocaleString("en"); // định dạng số 
	return value;
}
function XoaDinhDangSo(so) {
	return Number(so.replace(/,/g, ''))
}
// hàm lấy giá trị mới

function LayGiaTriMoi() {
	return document.querySelector(".output-value").innerText;
}

var phepTinh = document.getElementsByClassName("operator");
for(var i=0; i < phepTinh.length; i++) {
	phepTinh[i].addEventListener('click', function() {
		if(this.id == 'clear') {
			InGiaTriMoi("");
			InGiaTriCu("");
		}
		else if(this.id == 'backspace') {
			var ketQua = XoaDinhDangSo(LayGiaTriMoi()).toString();
			if(ketQua) {
				ketQua = ketQua.substr(0, ketQua.length - 1);
				InGiaTriCu(ketQua);
			}
		}
		else {
			var ketQua = LayGiaTriMoi();
			var giaTriCu = LayGiaTriCu();

			if(ketQua == "" && giaTriCu =="") {
				InGiaTriMoi("0")
			}

			if(ketQua== "" && giaTriCu != "") {
				if(isNaN(giaTriCu[giaTriCu.length -1])) {
					giaTriCu = giaTriCu.substr(0, giaTriCu.length-1)
				}
			}
			if(ketQua != "" || giaTriCu != "") {
				
				giaTriCu += ketQua;
				if(this.id == "=") {
					var result = eval(giaTriCu);
					InGiaTriMoi(result);
					InGiaTriCu("")
				} else {
					giaTriCu += this.id;
					InGiaTriCu(giaTriCu);
					InGiaTriMoi("");
				}
			}
		}
	})
}

var giaTriSo = document.getElementsByClassName("number");
for(var i=0; i<giaTriSo.length; i++) {
	giaTriSo[i].addEventListener('click', function() {
		var ketQua = XoaDinhDangSo(LayGiaTriMoi());
		if(ketQua != NaN) {
			ketQua += this.id;
			InGiaTriMoi(ketQua)
		}
	})
}