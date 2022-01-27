import { ISkillInfo } from '../interface/IInfo';
import { SkillTemp } from '../interface/ISystem';
import * as skills from './skills';

interface SkillTempMap {
  // 技能的标签
  [tag: string]: SkillTemp;
}

class SkillFactory {
  private tags: SkillTempMap;

  constructor(_t: SkillTempMap) {
    this.tags = _t;
  }

  build(info: ISkillInfo) {}
}

export default new SkillFactory(skills);
