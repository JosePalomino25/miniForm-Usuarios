


export class User {
  constructor(
    public name: string,
    public age:number,
    public email:string,
    public password: string,
    public heroe:Heroes
  ) {}
}
export enum Heroes {
  batman='batman',
  superman='superman',
  ironman='ironman',
  spiderman='spiderman',
  hulkman='hulkman',
  wolwerinen='wolwerinen',

}
