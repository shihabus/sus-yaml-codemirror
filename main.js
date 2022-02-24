import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { StreamLanguage } from '@codemirror/stream-parser';

// mode/yaml

let view = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, StreamLanguage.define(yaml)],
  }),
  parent: document.body,
});
