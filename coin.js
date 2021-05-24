//csv 가져올라면 상위폴더에 있어야할 것 같아서 걍 js폴더에 안 넣음

$.ajax({
    url: '암호화폐 시세.csv',
    dataType: 'text',
  }).done(successFunction);

function successFunction(data) {
    alert("1완료")
    const spawn=require('child_process').spawn;
    /*gulp.task("serve:prod", function () {
        const dotnetPs = ps.exec("dotnet run");
        // redirect standard output of the child process to the console.
        dotnetPs.stdout.on("data", function(data) { console.log(data.toString()); });
        dotnetPs.stderr.on("data", function(data) { console.error(data.toString()); });
    });*/
    alert("1.5완료")
    const process=spawn('python',[coin2.py]);
    alert("2완료")
    
    //var n=0;
    for(var n=0;;n++){
        //process.stdout.on('data',data =>{});
        alert("3완료")
        var allRows = data.split(/\r?\n|\r/);
        alert("4완료")
        var table = '<table>';
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        if (singleRow === 0) {
            table += '<thead>';
            table += '<tr>';
        } else {
            table += '<tr>';
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
            if (singleRow === 0) {
            table += '<th>';
            table += rowCells[rowCell];
            table += '</th>';
            } else {
            table += '<td>';
            table += rowCells[rowCell];
            table += '</td>';
            }
        }
        if (singleRow === 0) {
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
        } else {
            table += '</tr>';
        }
        } 
        table += '</tbody>';
        table += '</table>';
        $('body').append(table);
        //java.lang.Thread.sleep(1000);
        //setTimeout(10000);
        sleep(10000);
        alert("5실행완료");
        //n=n+1;
        document.getElementById("time").innerText=n;
    }
  }

  function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }
 
