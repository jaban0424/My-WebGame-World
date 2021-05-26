mysqli_real_escape_string($conn, $_POST['stNUM']),
    'id'=>mysqli_real_escape_string($conn, $_POST['id']),
    'pw'=>mysqli_real_escape_string($conn, $_POST['pw'])
  );

$sql = "
  INSERT INTO topic
    (stNUM, id, pw, created)
    VALUES(
      '{$filtered['stNUM']}',
      '{$filtered['id']}',
      '{$filtered['pw']}',
        NOW()
    )
";
$result = mysqli_query($conn, $sql);
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다.';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다. 돌아가';
}
?>