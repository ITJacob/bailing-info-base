import { SkillTemp } from '../interface/ISystem';

// TODO: 这里还是改成单例类吧！

export const damage: SkillTemp = function (p, info) {
  return function (f, t, field) {
    // TODO: 这里后期还要考虑护甲
    // TODO: 这里后期还要考虑死亡情况
    t.health -= p.level;

    const animations = [
      {
        type: 'harm',
        data: p.level,
      },
    ];

    return [
      {
        host: t,
        animations,
      },
    ];
  };
};

export const recover: SkillTemp = function (p, info) {
  return function (f, t, field) {
    // TODO: 这里后期还要考虑血量上限
    t.health += p.level;

    const animations = [
      {
        type: 'recover',
        data: p.level,
      },
    ];

    return [
      {
        host: t,
        animations,
      },
    ];
  };
};
