<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Funniest Game : Home</title>
    <link rel="stylesheet" href="css/stylesheet.css">
    <script src="js/login.js"></script>
    <?php
    if(isset($_POST['id'])&&isset($_POST['pw'])) {
        $userid = $_POST['id'];
        $userpw = $_POST['pw'];
        $conn = mysqli_connect("localhost",'root','09rh8433','ciss');
        $sql = "SELECT * FROM web where id='$userid'&&pw='$userpw'";
        if($result=mysqli_fetch_array(mysqli_query($conn,$sql))) {
            echo "사용자 이름=$userid";
            echo '로그인 성공';
        }
        else {
            echo '로그인 실패';
        }
    } 
    ?>
</head>
<body>
    <form action="">
        <h1 class="rainbowEffect" id="fontSizing" style="font-family: 'Jua', sans-serif;">세상에서 가장 재미있는 게임</h1>
        <div id="logIn">
            <form id="oneModeum">
                <input type="button" value="night" style="width: 50px;" onclick="
                if(value === 'night') {
                    document.querySelector('body').style.backgroundColor = '#222';
                    document.querySelector('body').style.color = 'white';
                    value = 'day'
                }
                else {
                    document.querySelector('body').style.backgroundColor = '#ccc';
                    document.querySelector('body').style.color = '#222';
                    value = 'night'
                }
                ">
            </form>
            <legend id="textAlign" style="font-family: 'Jua', sans-serif;">회원가입</legend>
            <ul>
                
                <li>
                    <form method="post">
                        <input type="text" name="nickname" id="nickname" required placeholder="닉네임(변경 불가)">
                        <input type="text" name="id" id="id"  autofocus required placeholder="ID">
                        <input type="password" name="pw" id="pw" required placeholder="PassWord">
                    </form>
                </li>
                <li>
                    비밀번호 재확인
                    <form method="post">
                        <input type="password" id="r_pw" required placeholder="PassWord">
                        <input type="button" value="회원가입" onclick="create_id();">
                    </form>
                </li>
            </ul>
            
        </div>
    </form>
</body>
</html>
