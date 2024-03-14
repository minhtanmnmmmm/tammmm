document.getElementById('bmiForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var userData = {
            weight: parseFloat(document.getElementById('weight').value),
            height: parseFloat(document.getElementById('height').value),
            age: parseInt(document.getElementById('age').value),
            gender: document.getElementById('gender').value
        };

        var bmi;

        if (userData.age >= 18) {
            bmi = userData.weight / (userData.height * userData.height);
        } else {
            bmi = (userData.weight / (userData.height * userData.height)) * 1.4;
        }

        var bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = "Dưới chuẩn";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Bình Thường";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = "Thừa cân";
        } else if (bmi >= 30 && bmi < 34.9) {
            bmiCategory = "Béo phì độ 1";
        }  else if (bmi >= 35 && bmi < 39.9) {
            bmiCategory = "Béo phì độ 2";
        }  else if (bmi >= 40.0) {
            bmiCategory = "Béo phì độ 3";
        }
        var recommendation;
        if (bmi >= 30 && bmi < 34.9) {
            recommendation = "Khám định kỳ.";
        } else if (bmi >= 35 && bmi < 39.9){
            recommendation = "Tập thể dục thường xuyên.";
        } else if (bmi >= 40.0) {
            recommendation = "Hạn chế ăn mỡ động vật.";
        } else {
            recommendation = "Không có khuyến nghị cụ thể.";
        }

        document.getElementById('result').innerHTML = 'Chỉ số BMI của bạn là: ' + bmi.toFixed(2) + '<br>' +
                                                       'Loại béo phì: ' + bmiCategory + '<br>' +
                                                       'Khuyến nghị: ' + recommendation;
    });