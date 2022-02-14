import { ISkillInfo } from '../interface/IInfo';
import { ISkillParam, ISkillTag } from '../interface/ISystem';
import * as skills from './skills';

interface SkillTagMap {
  // 技能的标签
  [tag: string]: new (_info: ISkillInfo, _param: ISkillParam) => ISkillTag;
}

class SkillFactory {
  constructor(private tags: SkillTagMap) {}

  build(info: ISkillInfo) {}
}

export default new SkillFactory(skills);
