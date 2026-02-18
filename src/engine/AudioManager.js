import { Howl } from 'howler';

class AudioManager {
  constructor() {
    this.ambientSound = null;
    this.clickSound = null;
    this.chessSound = null;
    this.initialized = false;
  }

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
    if (!this.clickSound || !this.initialized) return;
    this.clickSound.play();
  }

  playChess() {
    // Removed - no sound for chess moves
  }

  cleanup() {
    this.ambientSound?.unload();
    this.clickSound?.unload();
    this.chessSound?.unload();
  }
}

export const audioManager = new AudioManager();
