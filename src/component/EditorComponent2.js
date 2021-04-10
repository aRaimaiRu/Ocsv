import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, convertFromRaw } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
const c = `<h1>test</h1>`;
const EditorComponent2 = (props) => {
  console.log(props.mycontent);
  const [editorState, setEditorState] = useState(() =>
    //EditorState.createEmpty()
    EditorState.createWithContent(convertFromHTML(props.mycontent.content))
  );
  // const importHTML = () => {
  //   setEditorState(EditorState.push(editorState, convertFromHTML(c)));
  // };

  const onChange = () => {
    props.handleTextChange({
      ...props.mycontent,
      content: convertToHTML(editorState.getCurrentContent()),
    });
  };

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        onChange={onChange}
      />
      {/* <button onClick={(c) => importHTML(c)}>test </button> */}
    </div>
  );
};
export default EditorComponent2;
