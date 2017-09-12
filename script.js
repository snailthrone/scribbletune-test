const scribble = require('scribbletune');

let clip = scribble.clip({
  notes: ['c3', 'd3', 'e3', 'f3', 'g3', 'g3', 'g3', 'g3', 'f3', 'e3', 'd3', 'c3', 'c3', 'c3'],
  pattern: 'x__-x__-x__-x__-x__-x__-x____--'.repeat(2)
  noteLength: '1/4'
});

scribble.midi(clip, 'satu_meni_saunaan');