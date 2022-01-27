// 游戏系统内的参数传递

import { IField, IUnit } from './IGame';

export interface IAnimationParam {
  harm?: number; // 造成伤害
}

export interface ISkillParam {
  level: number; // 数值等级
}

export type SkillTemp = (
  param: ISkillParam
) => (from: IUnit, to: IUnit, field: IField) => IAnimationParam;
