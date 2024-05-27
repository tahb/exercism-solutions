export class Robot {
  private _name: string;
  static usedNames = new Set<string>();
  
  constructor(_name: string) {
    this._name = this.makeNewName()
    Robot.usedNames.add(this._name);  
  }

  private makeNewName(): string {    
    let randomName: string
    do {
      randomName = this.randomName()
    } while (Robot.usedNames.has(randomName))
      return randomName
  }

  private randomName(): string {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
    
    const firstLetterIndex = Math.floor(Math.random() * 26)
    const secondLetterIndex = Math.floor(Math.random() * 26)
  
    const randomNumbers = Math.random().toString().substr(3, 3)
    const randomName = `${alphabet[firstLetterIndex]}${alphabet[secondLetterIndex]}${randomNumbers}`
    
    return randomName 
  }
  
  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.makeNewName()
    Robot.usedNames.add(this._name);  
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }
}
