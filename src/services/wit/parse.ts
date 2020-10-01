import { request } from "http"
import { get } from "https"
import { InputType } from "../../constants/enums"
import Errors from "../../constants/errors"
import newEnglandRevolutionGames from "../../constants/football_api_responses/new_england_revolution_games"
import newEnglandRevolutionPlayers from "../../constants/football_api_responses/new_england_revolution_players"
import IWitResponse from "./i_wit_response"

interface IParsedWitResponse {
    inputType: InputType,
    correct?: boolean,
    value: string
}

function parseWitCall(response: IWitResponse): IParsedWitResponse {
    if (response.intents.length < 1) {
        throw Error(Errors.badRequestError)
    }


    const requestType = determineRequestType(response)
    let guess: string | undefined
    let actual: string

    if (response.intents[0].name === "Player_Count") {
        if (requestType === InputType.statement) {
            guess = getPlayerCountGuess(response)?.toString()
        }
        actual = getPlayerCount(getYear(response)).toString()
    } else {
        actual = getStartDate(getYear(response)).toString()
    }

    return {
        inputType: guess ? InputType.question : InputType.statement,
        correct: guess !== undefined && guess === actual,
        value: actual
    }
}

function getStartDate(year: number): Date {
    let earliestGame: Date = new Date(newEnglandRevolutionGames.fixtures[0].event_timestamp)
    newEnglandRevolutionGames.fixtures.every((game) => {
        const currDate = new Date(game.event_timestamp)

        if (currDate.getFullYear() < year) {
            return false
        }

        earliestGame = currDate
        return true
    })

    return earliestGame
}

function getPlayerCountGuess(response: IWitResponse): number | undefined {
    return response.entities['wit$number:number'][0]?.value
}

function getYear(response: IWitResponse): number {
    if (!response.entities["wit$datetime:datetime"]) {
        return 2018
    }

    const entity = response.entities["wit$datetime:datetime"][0].value
    const year = (new Date(Date.parse(entity))).getFullYear()
    if (year > 2018) throw Error(Errors.outOfDataRange)
    return year
}

function getPlayerCount(year: number): number {
    const playerNameSet: Set<string> = new Set()
    const yearStr = year.toString()
    newEnglandRevolutionPlayers.players.forEach(player => {
        if (player.season.includes(yearStr)) playerNameSet.add(player.player_name)
    })
    return playerNameSet.size
}

function determineRequestType(response: IWitResponse): InputType {
    switch (response.traits.Sentence_Type[0].value) {
        case "question":
            return InputType.question
        case "statement":
            return InputType.statement
        default:
            return InputType.question
    }
}

export default parseWitCall