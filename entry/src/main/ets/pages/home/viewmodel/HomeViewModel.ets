import { HomeModel } from '../model/HomeModel';
import util from '@ohos.util';
import { DialogHelper } from '@pura/harmony-dialog';

@ObservedV2
export class HomeViewModel{
  @Trace
  isLoading: boolean = true;
  @Trace
  hasError: boolean = false;

  async getHomeData(): Promise<HomeModel>{
   let id: string = DialogHelper.showLoadingDialog()
   return new Promise(async (resolve,reject)=> {
     try {
       let resourceManager = getContext().resourceManager
       let res = await resourceManager.getRawFileContent('home_mockdata.json')
       let textDecoder = util.TextDecoder.create('utf-8');
       let jsonData = textDecoder.decodeToString(res,{stream:false})
       let homeData = JSON.parse(jsonData) as HomeModel
       resolve(homeData);
       this.isLoading = false
       this.hasError = false;
     } catch (e) {
       reject('获取json文件异常');
       this.isLoading = false
       this.hasError = true;
     } finally {
       setTimeout(()=>{
         DialogHelper.closeDialog(id)
       },500)
     }
   });
  }
}