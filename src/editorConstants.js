import Paragraph from '@editorjs/paragraph'
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import List from "@editorjs/list"
import Code from "@editorjs/code"
import LinkTool from "@editorjs/link"
import Header from "@editorjs/header"
import Marker from "@editorjs/marker"
import InlineCode from "@editorjs/inline-code"
import CheckList from "@editorjs/checklist"
import Raw from '@editorjs/raw'

const genComponent = (__class) => {
    return {
        class: __class,
        inlineToolbar : true
    }
}

const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    code: Code,
    linkTool: LinkTool,
    header: genComponent(Header),
    checklist: CheckList,
    inlineCode: InlineCode,
    paragraph: genComponent(Paragraph),
    raw: Raw
}

export const sampleData = {
    data:{
        time: new Date().getTime(),
        blocks: [],
        version: "2.22.2"
    },
    tools: EDITOR_JS_TOOLS, 
    placeholder:'Add description here...'
};