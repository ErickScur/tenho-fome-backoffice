export abstract class Validation {
  abstract validate: (data: any) => Promise<string[] | null | Error>
}
