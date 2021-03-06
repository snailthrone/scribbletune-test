const scribble = require('scribbletune');

let pianoPattern = scribble.clip({
  notes: ['c3', 'd3', 'e3', 'f3'],
  pattern: 'x'.repeat(16)
});

let kickDrum = scribble.clip({
  notes: ['c2'],
  pattern: 'x---'.repeat(4)
});

scribble.midi(kickDrum, './midi/kick_drum.mid');
scribble.midi(pianoPattern, './midi/piano_pattern.mid');
