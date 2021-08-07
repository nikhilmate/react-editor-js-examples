import React from 'react'
import './App.css'

import editorJsHtml from 'editorjs-html'

import EditorJs from 'react-editor-js'
import { sampleData } from './editorConstants'

const htmlParser = editorJsHtml()

const App = () => {
    const instanceRef = React.useRef(null)

    async function handleSave() {
        const savedData = await instanceRef.current.save()

        console.log("savedData", savedData)
    }
	
    async function handleToHtml() {
        const savedData = await instanceRef.current.save()

        if(savedData) { 
			const parsedHtml = htmlParser.parse(savedData)
			console.log("to html", parsedHtml)
		}
	}

    return (
        <div className="App">
			<button onClick={handleSave}>Save!</button>
			<button onClick={handleToHtml}>TO HTML!</button>
			<div className="custom-block">
				<EditorJs 
					{ ...sampleData }
					instanceRef={instance => (instanceRef.current = instance)}
				/>
			</div>
        </div>
    )
}

export default App
