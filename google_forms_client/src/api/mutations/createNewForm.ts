import {Form} from "../../schema"
import {fetchApi} from "../http"
import {jsonDataToForm} from "../typeMappers/Form"

export default function createNewForm(): Promise<Form> {
  return fetchApi("POST", "/forms/new/")
    .then(resp => resp.json())
    .then(jsonDataToForm)
}
