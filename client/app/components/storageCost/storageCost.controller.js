import * as _ from 'lodash';
class storageCostController {
  constructor(Apiname) {
    'ngInject';
    // this.name = 'about';
      this.apivalue=Apiname;
     this.option = 'avg';
    this.getCostCheck(this.option);

  }
getCostCheck(option)
{

  this.option=option;
this.apivalue.getCostComparision(res=>{
  this.cost=res.data;
},{month:this.option});

}
clearList()
{   this.query = '';
    this.option='avg';
    this.getCostCheck(this.option);
}


}
export default storageCostController;
//{month:"avg"}
