export type FieldName<T extends object> = keyof Omit<T, "__typename">

export type FieldsMap<T extends object> = {
  [P in FieldName<T>]: string
}
