import React, {  useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, convertFromRaw } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import "./EditorComponent2.css";
const c = `<h1>test</h1>`;
const EditorComponent2 = (props) => {
  // console.log(props.mycontent.content);

  const [editorState, setEditorState] = useState(() =>
    // EditorState.createEmpty()

    EditorState.createWithContent(convertFromHTML(props.mycontent.content))
  );

  // useEffect(() => {
  //   EditorState.createWithContent(convertFromHTML(props.mycontent.content));
  // });
  const exportHTML = () => {
    props.handleTextChange({
      ...props.mycontent,
      content: convertToHTML(editorState.getCurrentContent()),
    });
  };

  const onChange = () => {
    props.handleTextChange({
      ...props.mycontent,
      content: convertToHTML(editorState.getCurrentContent()),
    });
  };

  return (
    <div className="App">
      
      <Editor
        onChange={onChange}
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
      {/* <button onClick={(c) => exportHTML(c)}>Save </button> */}
    </div>
  );
};
export default EditorComponent2;
