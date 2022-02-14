import { IField, IUnit } from '../interface/IGame';
import { ISkillInfo } from '../interface/IInfo';
import { IAnimationParam, ISkillParam, ISkillTag } from '../interface/ISystem';

// TODO: 这里还是改成单例类吧！

// 技能都是由一个个tag组件拼装起来的
abstract class SkillTagBase implements ISkillTag {
  constructor(protected _info: ISkillInfo, protected _param: ISkillParam) {}

  abstract active(from: IUnit, to: IUnit, field: IField): IAnimationParam[];
}

// 伤害
export class Damage extends SkillTagBase {
  active(from: IUnit, to: IUnit, field: IField): IAnimationParam[] {
    // TODO: 这里后期还要考虑护甲
    // TODO: 这里后期还要考虑死亡情况
    to.health -= this._param.level;

    const animations = [
      {
        type: 'harm',
        data: this._param.level,
      },
    ];

    return [
      {
        host: to,
        animations,
      },
    ];
  }
}

// 恢复
export class Recover extends SkillTagBase {
  active(from: IUnit, to: IUnit, field: IField): IAnimationParam[] {
    // TODO: 这里后期还要考虑血量上限
    to.health += this._param.level;

    const animations = [
      {
        type: 'recover',
        data: this._param.level,
      },
    ];

    return [
      {
        host: to,
        animations,
      },
    ];
  }
}
