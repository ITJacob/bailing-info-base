import { ISkillInfo } from '../interface/IInfo';
import { SkillTemp } from '../interface/ISystem';
import * as skills from './skills';

interface SkillTempMap {
  [type: string]: SkillTemp;
}

class SkillFactory {
  private types: SkillTempMap;

  constructor(_t: SkillTempMap) {
    this.types = _t;
  }

  build(info: ISkillInfo) {}
}

export default new SkillFactory(skills);
