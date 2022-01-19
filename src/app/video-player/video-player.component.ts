import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('target', { static: true }) target: ElementRef;
  options: any;
  // @Input() options: {
  //   fluid: boolean;
  //   aspectRatio: string;
  //   autoplay: boolean;
  //   sources: {
  //     src: string;
  //     type: string;
  //   }[];
  // };
  player: videojs.Player;

  constructor(private elementRef: ElementRef) {
    this.options = {
      aspectRatio: "16:9",
      autoplay: false,
      controls: true,
      
      sources: [
        {
          src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4',
          type: 'video/mp4',
        },
      ],
    };
  }

  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(
      this.target.nativeElement,
      this.options,
      function onPlayerReady() {
        console.log('onPlayerReady', this);
      }
    );
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
