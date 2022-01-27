import { IUnit, IField } from '../interface/IGame';
import { SkillTemp } from '../interface/ISystem';

export const damage: SkillTemp = function (p) {
  return function (f, t, field) {
    // TODO: 这里后期还要考虑护甲
    // TODO: 这里后期还要考虑死亡情况
    t.health -= p.level;

    return {
      harm: p.level,
    };
  };
};

export const recover: SkillTemp = function (p) {
  return function (f, t, field) {
    // TODO: 这里后期还要考虑血量上限
    t.health += p.level;

    return {
      harm: p.level,
    };
  };
};
