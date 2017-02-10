import * as _ from 'lodash';

class tariffNegotiatorController {
  constructor(Apiname,Upload) {
      'ngInject';
    // this.name = 'home';
    this.yards=[];
    this.Upload=Upload;
    this.apivalue=Apiname;
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
    var color = ['ADC8FA','FF4646','D7A069','85B687'];
    var index = this.yards.indexOf(yard)+1;
  var  b=(index*1000);

var c=(parseInt(color[index%4],16)+b).toString(16);
var newcolor='#'.concat(c);
//  console.log(newcolor);

return {'background-color':newcolor};
}

// getRandomColor(yard) {
//     // var letters = '0123456789ABCDEF';
//     var color = 'ADC8FA';
//   var  b=(this.yards.indexOf(yard)*1000);
//
// var c=(parseInt(color,16)+b).toString(16);
// var newcolor='#'.concat(c);
// //  console.log(newcolor);
//
// return {'background-color':newcolor};
// }
// upload on file select or drop
upload() {
  debugger;
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
export default tariffNegotiatorController;
