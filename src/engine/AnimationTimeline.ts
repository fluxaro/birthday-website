import gsap from 'gsap';

export class AnimationTimeline {
  private timeline: gsap.core.Timeline;

  constructor() {
    this.timeline = gsap.timeline({ paused: true });
  }

  createSceneTransition(
    currentScene: HTMLElement | null,
    nextScene: HTMLElement | null,
    onComplete?: () => void
  ) {
    this.timeline.clear();

    if (currentScene) {
      this.timeline
        .to(currentScene, {
          opacity: 0,
          filter: 'blur(2px)',
          duration: 0.8,
          ease: 'power2.out',
        })
        .set(currentScene, { display: 'none' });
    }

    if (nextScene) {
      this.timeline
        .set(nextScene, { display: 'flex', opacity: 0, filter: 'blur(2px)' })
        .to(nextScene, {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          onComplete,
        });
    }

    return this.timeline;
  }

  createTextStagger(elements: HTMLElement[], delay = 0) {
    return gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        stagger: 0.3,
        delay,
      }
    );
  }

  play() {
    this.timeline.play();
  }

  pause() {
    this.timeline.pause();
  }

  kill() {
    this.timeline.kill();
  }
}
