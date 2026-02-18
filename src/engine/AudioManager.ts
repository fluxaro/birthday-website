import { Howl } from 'howler';

class AudioManager {
  private ambientSound: Howl | null = null;
  private clickSound: Howl | null = null;
  private chessSound: Howl | null = null;
  private initialized = false;

  initialize() {
    if (this.initialized) return;

    this.ambientSound = new Howl({
      src: ['/cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3'],
      loop: true,
      volume: 0,
      html5: true,
    });

    this.clickSound = new Howl({
      src: ['/cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3'],
      volume: 0.05,
      html5: true,
    });

    this.chessSound = new Howl({
      src: ['/cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3'],
      volume: 0.08,
      html5: true,
    });

    this.initialized = true;
  }

  startAmbient() {
    if (!this.ambientSound) return;
    
    this.ambientSound.play();
    this.ambientSound.fade(0, 0.15, 2000);
  }

  stopAmbient() {
    if (!this.ambientSound) return;
    this.ambientSound.fade(0.15, 0, 1000);
    setTimeout(() => this.ambientSound?.stop(), 1000);
  }

  playClick() {
    if (!this.clickSound) return;
    this.clickSound.play();
  }

  playChess() {
    if (!this.chessSound) return;
    this.chessSound.play();
  }

  cleanup() {
    this.ambientSound?.unload();
    this.clickSound?.unload();
    this.chessSound?.unload();
  }
}

export const audioManager = new AudioManager();
