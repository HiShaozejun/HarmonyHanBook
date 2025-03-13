import { router } from '@kit.ArkUI';
import { fullScreen } from '../commons/utils/FullScreen';

@Entry
@Component
export struct SplashPage {
  // 视频控制器
  private controller: VideoController = new VideoController();

  build() {
    Column() {
      Video({ src: $rawfile('app_splash.mp4'), controller: this.controller })
        .muted(false)
        .controls(false)
        .autoPlay(true)
        .objectFit(ImageFit.Cover)
        .onUpdate((event) => {
          console.log(event.time.toString())
        })
        .onPrepared((event) => {
          console.info("Video prepared." + event.duration.toString());
        })
        .onStart(() => {
          console.info("Video onStart.");
        })
        .onError(() => {
          console.info("Video onError.");
        })
        .onFinish(async () =>  {
          router.replaceUrl({ url: 'pages/TabIndexPage' });
        })
    }.height('100%')
    .width('100%')
  }
}

