import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, convertFromRaw } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
const EditorComponent2 = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const importHTML = () => {
    const c = `<h1>test</h1>`;
    console.log(convertFromHTML(c));
    setEditorState(EditorState.push(editorState, convertFromHTML(c)));
  };
  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      <button onClick={() => importHTML()}>test </button>
    </div>
  );
};
export default EditorComponent2;
