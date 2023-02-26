import _invert from "lodash/invert";
import {Form} from "../../schema";
import {FieldsMap} from "../../extras/@types/common";
import {remap} from "../utils";
import {parseDateTime} from "../../utils";

const fieldsMap: FieldsMap<Omit<Form, "questions" | "responses">> = {
  "id": "id",
  "name": "name",
  "thumbnail": "thumbnail",
  "description": "description",
  "createdAt": "date_created",
  "lastModifiedAt": "date_last_modified",
}

export function jsonDataToForm(jsonData: any): Form {
  const obj: any = {
    __typename: "Form",
    ...remap(jsonData, _invert(fieldsMap)),
  };

  obj.createdAt = obj.createdAt ? parseDateTime(obj.createdAt) : null;
  obj.lastModifiedAt = obj.lastModifiedAt ? parseDateTime(obj.lastModifiedAt) : null;

  return obj as Form
}
