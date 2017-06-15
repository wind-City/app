angular.module('Dash',[])
  .controller('DashCtrl', function($scope,$http,$sce,$state) {

  var url="http://47.93.192.69:3000/wy?myUrl=";
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
    $scope.tabNav="";
    $scope.index = 0;
    $http.get(
      url+"http://iu.snssdk.com/neihan/service/tabs/?iid=10926236007&os_version=10.3.1&os_api=18&app_name=joke_essay&channel=App%20Store&device_platform=iphone&idfa=8823CD00-B175-4C98-8DC2-F5E3401D0FE9&live_sdk_version=174&vid=8DAF5E0E-E8E8-4E9A-979D-F5DF9B663E90&openudid=2c0216f887499c8f1990470668517a7cf650c5c2&device_type=iPhone%206&version_code=6.3.1&ac=WIFI&screen_width=750&device_id=5828069304&aid=7&essence=1"
    ).then(function (res) {
      console.log(res.data.data);
       $scope.tabNav=res.data.data;
      $scope.getData($scope.index);
    },function (err) {
        console.log(err);
    });
    // if($scope.tabNav.length>6){
    //   $http.get(url+$scope.tabNav[$scope.index].url)
    //     .then(function (res) {
    //       $scope.items=res.data.data.data;
    //     },function (err) {
    //       console.log(err);
    //     });
    // }
    // $scope.tabNav=[
    //
    //   {title:"推荐",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-101"},
    //   {title:"视频",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-104"},
    //   {title:'段友秀',url:'http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=201'},
    //   {title:'直播',url:'https://hotsoon.snssdk.com/hotsoon/feed/'},
    //   {title:'图片',url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-103"},
    //   {title:"段子",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-102"},
    //   {title:"订阅",url:"http://lf.snssdk.com/neihan/in_app/mybar_list/"},
    //   {title:"同城",url:"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-201"}
    //   ];

    // $http.get(url+"http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-101")
    //   .then(function (res) {
    //     $scope.items=res.data.data.data;
    //     $scope.site=res.config.url;
    //   },function (err) {
    //
    //   });

    $scope.getData =function (index) {
      $scope.index = index;
      //console.log($scope.tabNav[index].url);
      $http({
        method:'get',
        url:url+$scope.tabNav[index].url
      })
        .then(function (res) {
        console.log(res);
          $scope.site=res.config.url;

          // console.log(res);
          $scope.items=res.data.data.data;

      },function (err) {

        });

    };
    // $scope.morePmg =function (imgs) {
    //   if(imgs.length>9){
    //     return 30%;
    //   }
    // };
    //刷新
    $scope.doRefresh =function () {
      $http.get("http://47.93.192.69:3000/wy?myUrl="+$scope.tabNav[$scope.index].url)
        .success(function (res) {
          console.log(res.data.data);
          $scope.items=res.data.data;
        })
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
    //加载

    $scope.loadMore=function () {
      $http.get("http://47.93.192.69:3000/wy?myUrl="+$scope.tabNav[$scope.index].url)
        .then(function (res) {
          console.log(res);
          for(var i=0;i<res.data.data.data.length-1;i++){
            $scope.items.push(res.data.data.data[i]);
          }
          $scope.$broadcast('scroll.infiniteScrollComplete');
        },function (err) {
          console.log(err);
        });
    };
    // $scope.$on('$stateChangeSuccess', function() {
    //   $scope.loadMore();
    // });


    $scope.videoProcessing =function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

