import React, { useEffect, useState } from 'react'
import { InputType } from '../../../constants/enums'
import callWitApi from '../../../services/wit/api_call'
import parseWitCall from '../../../services/wit/parse'

enum DisplayTruthyness {
    no,
    correct,
    wrong
}

interface IQueryProps {
    query: string
}

const test = async (): Promise<{ correct?: boolean | undefined; inputType: InputType; value: string; }> => {
    console.log("TEST CALLED")
    return new Promise(resolve => setTimeout(() => resolve({
        correct: true,
        inputType: 1,
        value: "State"
    }), 100))
}

function Query(props: IQueryProps): JSX.Element {
    const { query } = props

    const [errorMessage, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")
    const [truthiness, setTruthiness] = useState(DisplayTruthyness.no)

    const resetForNewQuery = async () => {
        setError("")
        setLoading(true)
        setResult("")
        setTruthiness(DisplayTruthyness.no)
        try {
            displayResult(parseWitCall(await callWitApi(query)))
        } catch (e) {
            displayError(e.message)
        }
    }

    const displayError = (error: string) => {
        setError(error)
        setLoading(false)
        setResult("")
    }

    const displayResult = ({ correct, inputType, value }:
        { correct?: boolean, inputType: InputType, value: string }) => {
        setLoading(false)
        setResult(value)
        if (inputType === InputType.question) {
            console.log(inputType)
            const correctBool = correct as boolean
            correctBool ? setTruthiness(DisplayTruthyness.correct) : setTruthiness(DisplayTruthyness.wrong)
        }
    }

    //if input is detected and we have a new query
    useEffect(() => { query && resetForNewQuery() }, [query])


    return (
        <div className="query">
            {query && <h1 className="query__query">{query}</h1>}
            {errorMessage && <div className="query__error">
                Error: {errorMessage}
            </div>}
            <div className="query__loader">
                {loading && <div className="query__loader__loader">
                    <div className="dot-typing" />
                </div>}
            </div>
            {!!truthiness && ((truthiness === DisplayTruthyness.correct) ?
                <p className="correct">CORRECT:</p> :
                <p className="incorrect">INCORRECT:</p>)}
            {result && <p>{result}</p>}
        </div>
    )
}

export default Query