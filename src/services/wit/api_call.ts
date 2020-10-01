import Axios from "axios"
import { WIT_CLIENT_API_KEY } from "../../constants/api_keys"
import Errors from "../../constants/errors"
import IWitResponse from "./i_wit_response"


async function callWitApi(text: string): Promise<IWitResponse> {
    try {
        const response = await Axios.get('https://api.wit.ai/message', {
            params: {
                q: text
            },
            headers: {
                Authorization: `Bearer ${WIT_CLIENT_API_KEY}`
            }
        })
        console.log(response)
        return response.data
    } catch (e) {
        console.error(e)
        throw Error(Errors.apiError)
    }
}

export default callWitApi