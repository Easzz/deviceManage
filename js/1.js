 // <script>
        // const f = document.getElementById('reg');
        // const r = document.getElementById('returnbtn');
        // const change = document.getElementById('change');

        // f.onclick = function() {
            // change.style.transform = "rotateY(180deg)";
        // }

        // r.onclick = function() {
            // change.style.transform = "rotateY(0)";
        // }

        function on() {
            var arr = ['zwzn0812', 'zwzn0811', 'zwzn0803', 'zwzn0952', 'zwzn1574', 'zwzn1494', 'zwzn0819', 'zwzn0964', 'zwzn0741', 'zwzn0749', 'zwzn1555', 'zwzn1575', 'zwzn0818', 'zwzn0900', 'zwzn0735', 'zwzn0756', 'zwzn0954', 'zwzn0757R', 'zwzn0861',
                'zwzn1683', 'zwzn1652', 'zwzn0751', 'zwzn1501', 'zwzn0775', 'zwzn0849', 'zwzn1690', 'zwzn1691', 'zwzn0945', 'zwzn0953', 'zwzn1538', 'zwzn1557', 'zwzn1521', 'zwzn1570', 'zwzn0977', 'zwzn1614', 'zwzn1029', 'zwzn1304', 'zwzn1270R', 'zwzn1412', 'zwzn1441',
                'zwzn1572', 'zwzn0737', 'zwzn0902', 'zwzn1477', 'zwzn1054', 'zwzn1688', 'zwzn1239R'
            ];??
            var n = arr.indexOf(document.getElementById('gh').value.toLowerCase());
            // var ns = n.indexOf('zwzn');
            var ns = document.getElementById('gh').value.indexOf('zwzn');
            if (ns == -1) {
                alert('请输入正确格式,例如 zwznxxxx');
                document.getElementById('gh').value = '';
            } else if (n > -1) {
                console.log('welcome' + ' ' + arr[n] + '');
            } else {

                alert('仅对测试内部员工开放，如需借用，请找管理员单独借用！');
                document.getElementById('gh').value = '';
            }
        }
   // </script>