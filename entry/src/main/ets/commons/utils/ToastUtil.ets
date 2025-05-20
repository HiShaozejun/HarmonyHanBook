import { DialogHelper } from '@pura/harmony-dialog'

export class ToastUtil {
  static showToast(message: string){
    DialogHelper.showToast(message)
  }
}
