export default interface IWitResponse {
    text: string,
    intents: {
        id: string
        name: string
        confidence: number
    }[],
    entities: {
        "Team:Team"?: {
            id: string,
            name: string,
            role: string,
            start: number,
            end: number,
            body: string,
            confidence: number,
            entities: [],
            value: string,
            type: string
        }[],
        "wit$datetime:datetime": {
            id: string,
            name: string,
            role: string,
            start: number,
            end: number,
            body: string,
            confidence: number,
            entities: [],
            type: string,
            grain: string,
            value: string,
        }[],
        "wit$number:number": {
            id: string,
            name: string,
            role: string,
            start: number,
            end: number,
            body: string,
            confidence: number,
            entities: [],
            type: string,
            value: number
        }[]

    },
    traits: {
        Sentence_Type:
        {
            id: string,
            value: string,
            confidence: number
        }[]
    }
}