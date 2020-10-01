import { on } from 'process'
import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'


interface IResizeableBoxProps {
    placeholder: string
    onSubmit: (p0: string) => void
    className?: string
}

interface iFakeEnterEvent {
    key: string
}

function ResizeableBox(props: IResizeableBoxProps): JSX.Element {
    const { placeholder, onSubmit, className } = props

    let textRef: HTMLTextAreaElement | null
    const [hideTextBox, setHideTextBox] = useState(false)

    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement> | iFakeEnterEvent) => {
        if (!textRef) return

        if (e.key == "Enter") {
            //package is a lil broken, so we need to just replace the text box completely
            //so that it resizes
            onSubmit(textRef.value)
            setHideTextBox(true)
            setTimeout(() => {
                setHideTextBox(false)
            }, 0.01)
        }
    }

    return (
        <>
            {hideTextBox ? <div></div> : <TextareaAutosize
                className={className}
                placeholder={placeholder} onKeyPress={onKeyPress} ref={(r) => textRef = r} />}
            <button onClick={() => onKeyPress({
                key: "Enter"
            })} className="search__search_container__search_button">
                Ask
    </button>
        </>)
}

export default ResizeableBox