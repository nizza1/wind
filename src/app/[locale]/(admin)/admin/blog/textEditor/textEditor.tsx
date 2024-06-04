
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
} from "novel";

const TextEditor = () => (
  <EditorRoot>
    <EditorContent>
      <EditorCommand>
        <EditorCommandItem onCommand={() => console.log('Bold')}>
          <button>Bold</button>
        </EditorCommandItem>
        <EditorCommandItem onCommand={() => console.log('Italic')}>
          <button>Italic</button>
        </EditorCommandItem>
        <EditorCommandItem onCommand={() => console.log('Underline')}>
          <button>Underline</button>
        </EditorCommandItem>
      </EditorCommand>
      <EditorBubble>
        <EditorBubbleItem>
          <span>Style</span>
        </EditorBubbleItem>
        <EditorBubbleItem>
          <span>Format</span>
        </EditorBubbleItem>
        <EditorBubbleItem>
          <span>Layout</span>
        </EditorBubbleItem>
      </EditorBubble>
    </EditorContent>
  </EditorRoot>
);

export default TextEditor;