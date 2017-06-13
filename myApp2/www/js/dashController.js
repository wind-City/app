angular.module('Dash',[])
  .controller('DashCtrl', function($scope) {

    document.addEventListener("deviceready", function () {
      console.log("设备准备好了");
      // alert("kaishi");
      $scope.db = window.sqlitePlugin.openDatabase({name:"my.db"});

      setTimeout(function () {
        console.log("进入定时器");
        $scope.db.transaction(function (tx) {
          tx.executeSql("create table test_table (name text , age integer)" , function (tx , res) {
            console.log("成功");
            // alert("chenggong");
          } , function (tx , error) {

            console.log("错误");
            console.log(error);
          });
        } , 3000);
      });

    }, false);

    $scope.insertFn = function () {
      $scope.db.transaction(function (tx) {
        tx.executeSql("INSERT INTO test_table (name, age) VALUES (?,?)", ["张三", 100], function(tx, res) {
          console.log(res);
        } , function (tx , error) {
          console.log("insert error:" + error);
        });
      });
    }


    $scope.selectFn = function () {
      $scope.db.transaction(function (tx) {
        tx.executeSql("select * from test_table;", [], function(tx, res) {
          console.log(res);
          console.log(res.rows.item(0));
        } , function (tx , error) {
          console.log("查询错误:" + error);
        });
      });
    }
  })
