// 游戏运行中的模型抽象

// 游戏中的角色单元，可以是英雄、召唤物等
export interface IUnit {
  health: number;
  buffs: IBuff[];
}

// 游戏角色身上的状态，
export interface IBuff {
  host: IUnit; // 宿主
  type: string; // 类型
  last: number; // 剩余持续回合数
}

// 游戏战场的实例
export interface IField {
  mine: IUnit[]; // 我方
  enemy: IUnit[]; // 敌方
  env: Env; // 环境类型
  energy: { type: Element; amount: number }[]; // 环境中存在的能量
}

export enum Env {
  city = 'city',
  islands = 'islands',
  volcano = 'volcano',
}

export enum Element {
  fire = 'fire',
  writer = 'writer',
  thunder = 'thunder',
  wind = 'wind',
  death = 'death',
}
