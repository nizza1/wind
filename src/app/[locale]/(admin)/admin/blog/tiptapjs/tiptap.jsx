import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

//icons 
import { IoIosList } from "react-icons/io";
import { BsTextParagraph } from "react-icons/bs";
import { RxFontBold } from "react-icons/rx";
import { FiItalic } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { GoBookmarkSlash } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { PiCodeBlock } from "react-icons/pi";
import { BsQuote } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import { LuUndo } from "react-icons/lu";
import { MdOutlineRedo } from "react-icons/md";
import { BsFileEarmarkBreak } from "react-icons/bs";

//ui
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'

//styles 
import './styles.module.css'
import styles from './styles.module.css'


const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    
    <div className={`flex px-2 py-2 overflow-scroll gap-2 text-[1.4rem] border-b-[1px] no-scrollbar sticky top-0 ${styles.flex}`}>
      <button
        
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'bg-[var(--bg-transp)]' : '' }
      >
        <RxFontBold/>
      </button>
      
        <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'bg-[var(--bg-transp)]' : ''}
        >
        <FiItalic/>
        </button>
    
      
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <AiOutlineStrikethrough/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <FaCode/>
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <GoBookmarkSlash/>
      </button>
     {/*  <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <BsTextParagraph/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'bg-[var(--bg-transp)]' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <IoIosList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <MdFormatListNumbered/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <PiCodeBlock/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-[var(--bg-transp)]' : ''}
      >
        <BsQuote/>
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
         <GoHorizontalRule/>
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <BsFileEarmarkBreak/>
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <LuUndo/>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <MdOutlineRedo/>
      </button>
 {/*      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
      >
        purple
      </button> */}

      </div>
    
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = `

<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>


`

const  Tiptap = () => {
  return (
    <EditorProvider 
    slotBefore={<MenuBar />} 
    extensions={extensions} 
    content={content}>
    </EditorProvider>
  )
}

export default Tiptap