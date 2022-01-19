import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { OneByOneResponseComponent } from './one-by-one-response/one-by-one-response.component';
const routes: Routes = [
  {
    path: 'video-player',
    component: VideoPlayerComponent,
  },
  {
    path: 'page-component',
    component: PageComponentComponent,
  },
  {
    path: 'one-by-one-response',
    component: OneByOneResponseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [VideoPlayerComponent, PageComponentComponent, OneByOneResponseComponent];
