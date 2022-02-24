// import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
// import { javascript } from '@codemirror/lang-javascript';
// import { yaml } from '@codemirror/legacy-modes/mode/yaml';
// import { StreamLanguage } from '@codemirror/stream-parser';

// // mode/yaml

// let view = new EditorView({
//   state: EditorState.create({
//     extensions: [basicSetup, StreamLanguage.define(yaml)],
//   }),
//   parent: document.body,
// });

ace.require('ace/ext/language_tools');

var editor = ace.edit('editor');
// editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/yaml');
editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});

editor.session.on('change', function (delta) {
  // delta.start, delta.end, delta.lines, delta.action
  const doc = editor.getValue();
});
