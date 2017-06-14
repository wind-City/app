angular.module('Dash',[])
  .controller('DashCtrl', function($scope,$http,$sce) {


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
    $scope.items='';
    $scope.tabNav=[

      {title:"推荐",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-101"},
      {title:"视频",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-103"},
      {title:'段友秀'},
      {title:'直播'},
      {title:'图片',url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-103"},
      {title:"段子",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-102"},
      {title:"订阅",url:"http://lf.snssdk.com/neihan/in_app/mybar_list/"},
      {title:"同城",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-201"}
      ];
    $scope.getData =function (index) {
      $http({
       method:'get',
        url:"http://47.93.192.69:3000/wy?myUrl="+$scope.tabNav[index].url
      }).then(function (res) {
        console.log(res.data.data.data);
        $scope.items=res.data.data.data;
      },function (err) {
        console.log(err);
      });
    };
    $scope.videoProcessing =function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

