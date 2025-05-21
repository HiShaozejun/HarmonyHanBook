import { JSON, util } from "@kit.ArkTS"

export class BundleDataUtil {

  // 获取资源目录rawfile的数据
  static async getBundleDataFromPath(path: string): Promise<Object> {

    return new Promise(async (resolve,reject)=>{
      let context = AppStorage.get<Context>('context')
      if (context==null) {
        reject('本地数据解析异常');
      }
      let fileData = await context?.resourceManager.getRawFileContent(path)
      let textDecoder = util.TextDecoder.create('utf-8')
      let decodeString = textDecoder.decodeToString(fileData)
      let decodeObject = JSON.parse(decodeString) as Object
      resolve(decodeObject)
    });
  }
}