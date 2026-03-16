
// Simple sound effects using Web Audio API
class SoundManager {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    return this.ctx;
  }

  playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {}
  }

  correct() {
    this.playTone(523, 0.15);
    setTimeout(() => this.playTone(659, 0.15), 100);
    setTimeout(() => this.playTone(784, 0.3), 200);
  }

  wrong() {
    this.playTone(200, 0.3, 'sawtooth');
  }

  click() {
    this.playTone(800, 0.05);
  }

  tick() {
    this.playTone(1000, 0.02);
  }

  win() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) => setTimeout(() => this.playTone(f, 0.3), i * 200));
  }

  timeout() {
    this.playTone(400, 0.2, 'square');
    setTimeout(() => this.playTone(300, 0.4, 'square'), 200);
  }
}

export const sounds = new SoundManager();
