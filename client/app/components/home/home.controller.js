import * as _ from 'lodash';

class HomeController {
  constructor(Apiname,Upload) {
      'ngInject';
    // this.name = 'home';
    this.yards=[];
    this.Upload=Upload;
    this.apivalue=Apiname;
    this.tab = 'tariff';
    this.apivalue.getTariffNegotiation(res=>{
      console.log(JSON.parse(res.data[0].data));
      this.current= JSON.parse(res.data[0].data);
      _.filter(this.current,(res=>{
        var index=this.yards.indexOf(res.YARD);
        if(index==-1)
        {
          this.yards.push(res.YARD);

          }
        })
      );
    });

}

getRandomColor(yard) {
  debugger;
    // var letters = '0123456789ABCDEF';
    var color = '40373F';
  var  b=(this.yards.indexOf(yard)*1000);

var c=(parseInt(color,16)+b).toString(16);
var newcolor='#'.concat(c);
//  console.log(newcolor);

return {'background-color':newcolor};
}
// upload on file select or drop
upload() {
    this.Upload.upload({
        url: 'https://toolset.herokuapp.com/api/file-upload/',
        data: {tariff_file: this.file}
    }).then(function (resp) {
      console.log('result', resp);
        // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    },
    //  function (evt) {
    //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    // }
  );

}
}
export default HomeController;
