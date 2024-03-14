  function giaiPhuongTrinh() 
        {
            let a = parseFloat(document.getElementById('a').value);
            let b = parseFloat(document.getElementById('b').value);

            if (a === 0) {
                document.getElementById('result').innerText = 'Phương trình không hợp lệ (a phải khác 0)';
            } else {
                let x = -b / a;
                document.getElementById('result').innerText = 'Nghiệm của phương trình là x = ' + x;
            }
        }