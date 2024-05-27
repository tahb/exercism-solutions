export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = DnDCharacter.generateAbilityScore();
  
  constructor() {
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10;
  }
  
  public static generateAbilityScore(): number {
    var rolls: number[] = [];
    
    for (let index = 0; index < 4; index++) {
      const diceRoll = Math.floor(Math.random() * 6) + 1
      rolls.push(diceRoll)
    }
    
    return rolls
      .sort()
      .slice(1, 4)
      .reduce((a,b) => a+b)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
