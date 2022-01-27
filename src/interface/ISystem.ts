// 游戏系统内的参数传递

import { IField, IUnit } from './IGame';
import { ISkillInfo } from './IInfo';

// 透穿给动画的参数
// 动画是放在不同精灵载体上的，一个技能的释放，可能会影响多个载体单元进行动画演示,
// 每个载体还可能演示多个动画，
// 故而SkillTemp的输出结果需要 { 载体, 动画[] }[] 的数据结构
export interface IAnimationParam {
  animations: { type: string; data: any }[];
  host: IUnit; // 动画的宿主主体
}

// 技能模版入参
export interface ISkillParam {
  level: number; // 技能数值等级
}

// 技能模版函数
export type SkillTemp = (
  param: ISkillParam,
  info: ISkillInfo
) => (from: IUnit, to: IUnit, field: IField) => IAnimationParam[];
