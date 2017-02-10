import * as _ from 'lodash';
class AboutController {
  constructor(Apiname) {
    'ngInject';
    // this.name = 'about';
      this.apivalue=Apiname;
      this.apivalue.getCostComparision(res=>{
        this.cost=res.data;
      },{month:"avg"});
  }
}

export default AboutController;
