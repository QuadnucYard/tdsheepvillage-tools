Stankle 对羊村的研究笔记

# 游戏循环

游戏中 swf 涉及两个不同的 fps：24 和 25，但是 `TDSheepMain`  使用 25 Fps，这个类负责控制游戏的时间调度，对应一个 `REFRESH_RATE` 为 40，表示 1 秒处理 40 次。

迎战后，创建帧事件，按帧进行事件循环。战斗计时部分，有一个 `actionRate`，即倍率，开加速时其值为 2。有一个计数器 `count`，从 0 开始，每帧其值增加 `actionRate`，然后调度地图战斗事件。`MapTimer` 类调度。在 `action` 中，按以下顺序处理：生成狼，处理所有狼的运动（`stepMove`，如果 `count % 5 == 0` 则进行一次状态衰减（`statusDecay`），如果 `count % 5 == 3` 则进行一次技能施放检查），处理塔的攻击（`checkFire`，如果 `count % 5 == 0` 则状态衰减），然后依次处理陷阱、地图障碍（如火山）、弹簧、木箱、子弹，最后调度主事件（`mainEvent`，未了解）。

可见状态衰减是每秒进行 5 次，每次间隔 0.2s。

## 塔 Tower

### `checkFire`

如果没准备好、不在战斗、等级≤0或没有子弹则退出。

首先处理事件 `castEvent`（待研究）。

然后计算冷却减少值：如果被地图上的道具加速或减速，则多乘一个倍率，让 `cooldownNum` 减去这个 `rate` 值。如果没冷却好，即 `cooldownNum > 0`，则退出。这个 `rate` 计算方法为，基础攻速乘上改变攻速的状态效果乘上墙给的加速效果，向上取整。让 `cooldownNum` 归零后，处理攻击。

定义 `reCheck` 值为 `true` 当且仅当当前瞄准目标不存在、死亡、脱离瞄准、不在范围内或打不到（在传送、被屋顶遮挡或隐身）。

执行下面判断：

1. 如果会多重攻击（散弹塔）：如果没有瞄准目标，且周围没别的目标，则退出，否则将目标设为最近的狼，对其和另外的狼进行攻击。

2. 如果是光镶嵌塔（ `fieldAttack`），对范围内的所有狼攻击（`fire`）。

3. （不满足以上情况）如果满足 `reCheck`，则重新选择目标：如果范围为负（波动塔），找横纵最近的狼，否则找一般距离最近的狼作为目标。对目标进行攻击。如果能连击（黑哨塔），且满足概率判定，则把连击加入事件队列。如果能分散攻击（黑散弹），额外攻击该目标。

   TODO 目标的获取

   注：获取的目标按距离升序排列，意味着优先攻击近的。

   连击调用 `castComboAttack`，每次都会对目标 `fire` 一次。散弹一发子弹算攻击一次。

### `fire`

以上的攻击处理为 `fire`，参数有：`target, isFieldAttack, deflexion`。

攻击一次即让塔的份额（`offer`）加 1。

按下面条件进行判断：

1.  是光塔。抗光或弱光，则把这个伤害比例作为 `nextEffectRate` 进行直接 Aoe 攻击。
2.  是电塔（紫哨、散、镶）。如果发现目标是绝缘（没被筛掉），那么目标设空。立即让子弹（没错，闪电也算子弹）检查攻击。
3. 是波动塔。仅仅初始化了子弹。
4. 其他情况。初始化子弹，并计算子弹的运动学参数。

最后将 `cooldownNum` 设为 `2500`，并播放声音和动画。这里可以看到，攻速为 180 的哨塔，理论上是 0.556s 攻击一次（当然受帧率影响）。

顺便找到了塔分经验的机制。攻击一次份额+1，打死狼份额+20，满级塔不参与分经验。

### 神奇的 `BurnColdSkill`

冰减速和火燃烧是统一的，这个能量值为正表示燃烧，为负表示减速。显示的是 `burn` 和 `cold` 值。

涉及到一个 `data.getLevelParam(level,0)`，经查，燃烧对应的值为 1，冰冻对应的值为 -1。

$\mathrm{burnColdValue}=\pm(\mathrm{tower.buffEffect}\times\mathrm{level})^2$，符号取决于是冰还是火。其中 `level` 未知。如果来源不是塔， `buffEffect` 为 1。

$\mathrm{burn}=\sqrt{\mathrm{burnColdValue}}$

$\mathrm{cold}=\mathrm{burnColdValue}^{0.25}\times0.03$

对应的 `BurnColdStatus`，`burn` 和 `cold` 计算方法一样，在 `statusValue` 介于 $[-4, 4]$ 时状态无效。

冰火叠加的是 $\mathrm{burnColdValue}$ 而不是燃烧伤害。

#### 灼冻值的来源

有个 `SkillsPackage`，里面存了多个 `Skill` 的引用。

考虑 `buffEffect`。在初始值上，除了波动塔和镶嵌塔为 0.1，其他塔都是 0。实际值计算如下：`towerData.buffEffect * level + 1`。这样解释了哨塔、散弹塔、镶嵌塔的火伤害不随等级变化。红镶嵌塔的 BE 1 级为 1.1，50 为 6。实际数据，1 级红碎片镶燃烧伤害为 22，50 级的为120（对应 BCV 分别为是 440 和 14400）。宝石产生 1~5 的倍率。这样说明前面 `burnColdValue` 计算公式中的 `level` 就是宝石等级乘 20。但其他三塔的这个 `level` 还得看数据。

对于镶嵌塔，用 $L_t$ 表示塔等级，$L_g$ 表示宝石等级，则燃烧伤害 $B$ 和减速率 $C$ 可分别表示为：

$$B=20L_g(L_t/10+1)$$

$$C=\sqrt{20L_g(L_t/10+1)}\times 0.03$$

根据公式，50 级蓝强化镶嵌提供的减速率为 $73.5\%$。

## 子弹 Bullet

### `stepMove`

如果落地了，调用 `checkAoe`（如果是范围攻击，则对所有范围内目标造成伤害，存在一个效果比例）。如果不是 AOE 或没有命中目标，则 miss。

如果会追踪，则获取一个加速度，并改变方向瞄准目标（有一个复杂的角位移计算）。

最后检查是否命中目标。（前面有很多物理运算和特效，略）

### `checkHit`

考虑 3 种情况：来自陷阱，是波动塔，其他。这个影响到碰撞范围和攻击类型的判定。找到最近的能命中的目标。

如果命中狼，则调用 `hitMonster` 并 `checkAoe`。如果是波动塔并攻击数量达到上限，退出。如果是弹射攻击且没达上限，找下一个目标（有电和非电的区别）并瞄准。

### `hitMonster`

如果目标存在且不在攻击列表中，则攻击敌人，并产生特效。并把它加入攻击列表中。

## 狼 Monster

### `hit`

参数：`bullet, nextEffectRate, isAoe`

按照下面的顺序进行运算，`nextEffectRate` 简称 NER。

1. 如果连 AOE 都打不中，则退出。
2. 如果有伤害倍率修正，则 NER 根据狼的陆/空乘上对地、对空加成。
3. 在倍率修正的基础上计算伤害。`damage = bullet.damage * nextEffectRate / defense`。这里考虑了防御系数。
4. 如果有暴击属性（`Crit`），考虑暴击抗性，计算暴击率（概率乘抗性修正，不受 NER 影响，对空不增加暴击率）和暴击伤害。如果暴击，还会让 NER 得到一个增幅。
5. 计算抗性减免伤害（`Resistance`）。减少的伤害会被限定在 $[1, \mathrm{maxHP}]$ 范围内，后者为一个参数，暂不知作用。将减去的伤直接归入伤害。
6. 处理灵魂治愈（`Link`），扣除自身所受伤害。
7. 调用 `injured` 结算伤害。
8. 如果打死狼，攻击的塔经验份额 +20。
9. 减速效果（来自元宵）（`Slow`）。乘上 NER，获得减速效果 `STATUS_SLOW`，与抗性相抵后，计算移动速度：`_value = lastSpeed * (1 - slowRate * (1 - rsValue))`，其中 `rsValue` 为减速抗性，但这里实际减速又和 NER 无关就很迷。
10. 减防效果（`ReducedDefense`）。获得一个 $\mathrm{reducedDefenseRate}\times \mathrm{NER}$ 的减防效果。
11. 毒效果（`Poison`）。获得一个 $\mathrm{poisonRate}\times\mathrm{damage}\times\mathrm{NER}$ 的毒效果。这里 `damage` 是子弹原始伤害，不受防御、抗性、暴击等影响。但是状态反馈的伤害需要在后续结算。
12. 冰火/灼冷效果（`BurnCold`）。获得一个值为 $\mathrm{burnColdValue}\times\mathrm{NER}$ 的效果（`BurnColdStatus`）。如果是冰减速，计算新速度：`_value = lastSpeed * (1 - bcs.cold * (1 - _rsValue))`。同样速度不会为负。注意，被冰击中会导致速度直接乘上一个倍率。
13. 击退效果（`BeatBack`）。抗性与概率、距离相抵。NER 影响概率，不影响距离。计算击退到的位置，并产生一个平移事件。
14. 沉默效果（`Silence`）。抗性与概率、持续时间相抵。NER 影响概率，不影响持续时间。获得一个沉默状态。
15. 晕眩效果（`Vertigo`）。抗性与概率、持续时间相抵。NER 影响概率，不影响持续时间。获得一个晕眩状态。
16. 效果（`Intimidate`）。抗性与概率、持续时间相抵。NER 影响概率，不影响持续时间。获得一个 Intimidate 状态。
17. 诅咒效果（`Intimidate`）。因为没有概率和抗性，这个效果就很简单。直接挂上一个对应持续时间、诅咒能量的诅咒效果。
18. 诅咒状态（`STATUS_CUSS`）。唯一一个在这里结算的。如果当前被诅咒，那么要累加一个数值，暂不了解其来源。

### `stepMove`

狼行为的核心函数。按以下顺序执行逻辑：

1. 如果血量小于等于 0，退出。
2. 移动步数 `aliveStep` 自增 1。
3. 如果 `aliveStep == 25` 且没有分身，且自己是 boss 或随机 boss，则显示红色感叹号。
4. 如果 `aliveStep == 50` 且没有分身，则说话，内容为 Enter 状态。
5. 如果 `aliveStep % 500 == 200` 且没有分身且为绿、黄血，则说话，内容为 Idle 状态。
6. 如果有到羊村的路径，且距离为 3，且不在说话，则说话，内容为 Invade 状态。
7. 如果是分身且分身到期，则死亡，执行 `dead()`，结束。
8. 如果当前施法 `castEvent` 存在，则检查是否前摇完成，如果准备完成则施法，如果血量非正则结束。
9. 如果有空降技能 `AirborneSkill`，且高度大于 0，处理一帧降落。如果此时高度小于等于 0，则开始移动，然后依次执行 `jostle()` 和 `startMove()`。否则继续下降，设置摇晃角为 `sin(aliveStep / 10) * 10`。
10. 如果垂直地面方向速度 `heightSpeed` 不为 0（因弹簧作用而在空中），匀速运动。如果超过弹射高度上限 8000，移动到上方同高度处，坐标在一个半径为 400 的正方形区域内随机取，下降速度设为 500。否则如果高度小于等于 0，表明已经落地，开始移动，依次执行 `jostle()` 和 `startMove()`，并且如果不是重型，获得一个 1s 的晕眩效果。其他情况，获得一个向下的 $20\mathrm{u}/\mathrm{tick}$ 加速度。退出函数。
11. 如果有 `SLOWF` 技能，调用 `startSlowf()`，并获得一个 `STATUS_COLD_SLOWF_M` 状态。（暂不了解效果）
12. 调用 `checkShift()` 检查并处理平移，如果发生平移则退出函数。
13. 如果正在施法，方向数自增 1。
14. 如果状态 `STATUS_MOVE` 值为 0，则退出。
15. 如果当前地图 `isReturn`（不明含义），则调用 `returnMove()`，结束。
16. 如果有空降技能且高度大于 0，表明处理完成，退出函数。
17. 如果有晕眩状态 `STATUS_VERTIGO`，退出。
18. 如果有状态 `STATUS_INTIMIDATE`，调用 `returnMove(false)`，退出（含义不明）。
19. 路径步数自增 1。如果大于等于阈值 2500（相当于走了 100s），则重新寻路。
20. 如果没有路径，则调用 `stopMove()` 停止移动，退出。
21. 如果根据路径已经到了出口，调用 `invasion()` 进村，结束。
22. 计算当前位置到下一个路径点、终点的坐标差。如果到终点距离小于 200，则调用 `invasion()` 进村，结束。
23. 调用 `checkTeleport(_distance,_stepLength)` 检查并执行传送。如果发生传送，则退出。
24. 处理坐标移动 `checkMove(_currentPoint,_aimPoint,_distance,_stepLength)`。
25. 如果不会飞，且在传送带上，调用 `startConveyer` 受到传送带速度影响。

#### `startMove`

调用 `stopMove()`，向走过的路径加入当前位置，调用 `findPath()` 寻路，并把 `STATUS_MOVE` 的状态值设为 1。

#### `stopMove`

清除路径，并把 `STATUS_MOVE` 的状态值设为 0。

### 寻路

#### `findPath`

1. 如果未指定移动方式 `moveMode`，则根据自身是否飞行来设定。
2. 记录临时坐标点 `_tempPoint`：如果已有路径，则其值为下一个路径点，否则为当前坐标点。
3. 调用 `clearPath()` 清除路径。
4. 遍历所有出口（村门口），以 `_tempPoint` 为源点，村口坐标为目标点，执行 `OptimizeAStar` 算法获取一条路径。把各路径中开销最小的作为自己的路径。
5. 如果 `_tempPoint` 不是当前坐标，则将其插入到路径列表的开头。
6. 调用 `setPath(_path,_moveMode)` 设置移动路径。

#### `setPath`

1. 调用 `clearPath()` 清除路径。
2. 如果未指定路径，退出。
3. 如果 `moveMode` 不是 `MAP_CHECK`（检查模式），则遍历指定路径的每个点，将 `costMap` （地图寻路开销）在这些点的值减去自己的 `charm` 值。
4. 将自身路径设为指定的路径，并将 `pathStep` 置为 0。

#### `clearPath`

1. 如果自身没有路径，退出。
2. 遍历当前路径的每个点，将 `costMap` 在这些点的值加上自己的 `charm` 值，即复位。
3. 删除路径 `this.path <- null`，同时速度置零 `this.lastSpeed <- 0` 。 

#### `OptimizeAStar` 寻路算法

##### 常量定义

直线段和传送的 cost 都是 100，对角线的 cost 是 141。

最大寻路尝试 `m_maxTry` 为 15000。

##### `initMap` 初始化地图信息

从关卡地图中获取 `floorMap, airMap, costMap, teleportLib`。这几个相关函数有多次调用。前两个就是二维 `bool` 数组，记录每个位置是否能经过。得到的 `costMap` 初始各项为 0。

##### `setMap` 设置寻路层

根据 `_mapChoice` 把 `m_map` 赋值为对应的地图层，同时初始化地图尺寸参数。

##### `find(p_startX, p_startY, p_endX, p_endY, _mapChoice)` 主要函数

先调用 `setMap` 设置寻路层。

如果起点和终点一样，则返回这条平凡路径。

然后就是在 `maxTry` 限制内做寻路了。如果找到目标则调用 `getPath` 获取 `Path` 对象。

##### `getArounds` 获取相邻点

这个函数在 `find` 内被调用。

值得一提的是传送阵的检查。另外一提，很显然它只检查 4 个方向。

##### `getPath` 生成 `Path` 对象

没什么好说的，得到的路径中的坐标点按自然顺序排列。`Path` 类就是一个包括路径数组和开销 `cost` 的简单结构。

#### 寻路总结

寻路的核心就是 charm，不涉及具体狼的类型、血量分布。但是因为狼的出现顺序、调用寻路顺序的不确定性，实际路径显得很复杂。

用通俗的语言讲，每个格子有一个开销。一个狼寻路的时候，找到一条路，然后对这条路上的开销进行加或减，影响后续单位的寻路。`charm` 为正的狼会把后面的狼的路径吸引过来，为负的狼则会排斥。



#### `speed` 速度获取

`_speed` 最初值为该单位的基础速度。然后进行修正（`_rsValue` 均为对应的抗性）：

1. 如果有减速状态（`STATUS_SLOW`），修正：`_speed *= 1 - _status.statusValue * (1 - _rsValue);`
2. 如果有灼冻状态（`STATUS_BURN_COLD`），且表现为冰，修正：`_speed *= 1 - _bc.cold * (1 - _rsValue);`
3. 如果有狂奔状态（`STATUS_RUN`），修正：` _speed *= 1 + _status.statusValue;`
4. 让速度与上一帧混合：`_speed = max(1, _speed * 0.1 + this.lastSpeed * 0.9);` 当前帧计算的速度只占 10% 比重，但在影响速度的状态保留的情况下，随着连续计算，速度值会越来越接近理想值。
5. 最后将 `lastSpeed ` 设为 `_speed ` 并作为结果返回。

由于这个函数每帧只执行一次，所以速度计算没有问题。

对于 50% 抗冰，单次冰提供的减速效果最大是将速度降到 63%。



### `eventSkill`



## 所有基本单位

### `addStatus`

增加状态。状态表是一个以状态 id 为键值的字典套一个数组。

如果当前没有相同 id 的状态，则把该状态加入状态表，并判断：

- `STATUS_VERTIGO` 晕眩（仅狼）：停止移动，并打断施法。
- `STATUS_SILENCE, STATUS_INTIMIDATE` 沉默和一个未知的（仅狼）：打断施法。
- `STATUS_HIDE` 隐身（仅狼）：播放隐身动画。
- `STATUS_CLOUD` 乌云（仅塔）：让塔休息。

如果当前已经有同名状态：

- `STATUS_POISON, STATUS_REDUCED_DEFENSE, STATUS_SLOW, STATUS_SHIELD` 中毒，减防，减速，护盾：如果该状态数组里有 `statusValue` 相同的状态，`statusTime` 改为两者最大值，否则把新状态加入数组，并按 `statusValue` 降序排列。这可以解释多个中毒状态并存时，只有最强的会产生伤害。
- `STATUS_BURN_COLD` 灼冻：数组有唯一元素，`statusValue` 直接叠加。
- `STATUS_SILENCE, STATUS_CLOUD, STATUS_DARK` 沉默，乌云，未知：`statusTime` 设为新旧最大值。
- `STATUS_CUSS` 诅咒：`statusValue` 设为新旧最大值。

### `removeStatus`

根据 id 移除状态，应该只针对没有多个同名状态的状态。

- `STATUS_CAST` 施法（仅狼）：结束施法标识。
- `STATUS_VERTIGO` 晕眩（仅狼）：恢复移动。
- `STATUS_HIDE` 隐身（仅狼）：如果不在传送，则播放现身动画。
- 



### `statusDecay`

对自身的所有状态逐个判断。这里存在嵌套，一个 id 下有一个数组存多个状态。

- `STATUS_POISON` 中毒（仅怪物）。每 5 个 status_tick 的第 0 个结算一次。考虑抗性后，直接造成伤害。
- `STATUS_BURN_COLD` 灼冷（仅怪物）。每 5 个 status_tick 的第 2 个结算一次。如果 `statusValue` 大于阈值 4，考虑抗性，造成对应燃烧伤害。否则如果该值大于等于 -4，状态清空。最后将状态值减半。
- `CUSS` 诅咒，`SUICIDE` 自爆，`RELIVE` 重生,`REINCARNATE` 转生。如果 `statusTime` 小于等于 0.2，则移除状态。
- `STATUS_COLD_SLOWF` 减速光环（仅塔）。如果塔在某个拥有减速光环（暂译）的狼的影响范围内，保持该状态。
- `STATUS_LINKS_2` 灵魂治愈。如果扛伤害的怪死了，该状态清零。

接下来遍历该状态组所有状态，将其剩余时间减少，删除过时项。如果该状态组无状态，则 `removeStatus`，否则 `addBuffEffect`，具体待研究。注意灼冷效果持续时间无限，因为它是受状态值控制的。







## 伤害与状态效果判定

### 炮塔





## 狼的技能

技能有一个 `warmupAndCooldown` 机制，`warmup` 指发动前摇时间。

技能施放的条件：冷却好了且不在前摇中，自己活着且血量在规定的范围内，然后有一定概率才施放成功并进入冷却，失败则在下一帧继续尝试。

### 乌云

机制描述：先找到范围内最近的没有被封的、实力（Ability）不低于平均值一半的塔，然后判断条件，成功则施放。

有多个变种：`Cloud_A, Cloud_B, Cloud_C, Cloud_Z1, Cloud_Z2, Cloud_Z3, Cloud_Z4, Cloud_Z5, Cloud_Z6`。A,B,C 是初级、中级、高级。概率上，初中高级为 0.2，Z1,Z2,Z3 为 0.2，Z4 为 0.3，Z5,Z6 为 0.6。老二的是 Z6，可能因此乌云频率特别高。

塔平均实力的计算（墙不算塔）：所有塔实力之和除以塔数量。每个塔的实力按照下面公式计算：

$$\mathrm{ability}=\begin{cases}  
0 & 镶嵌塔（无宝石） \\
\mathrm{level}\times (0.8 + \mathrm{gemLevel} / 5)\times 2 & 镶嵌塔（有宝石）\\
\mathrm{level}\times (1 + \mathrm{gemLevel} / 10) & 其他塔 \\
\end{cases}$$

其中宝石等级为 0, 1, 2, 3, 4, 5。







计算狼的血量（以赤火老二为例）

难度系数：`hard_ness=4.3(hardB), yield_val=100(hardA)`

老二等级属性：`a=440, b=220, c=52.8`

猎手狼：`a=210, b=105, c=25.2`

`_level = sqrt(hardA + hardB * score);`
`_difficulty = difficulty * densityDifficulty; // densityDifficulty == 1 / pow(1, 0.25)` difficulty 就是这波的 hardness

`this.hpRate = _difficulty;`

`this.hpMax = (hpMaxA + hpMaxB * m_level + hpMaxC * m_level * m_level) * hpRate;`

代入计算：难度系数 1.1，进度1599。

```
_level=83.52
hpRate=_difficulty=1.1
hpMax=503271
```



# 杂项

## 杂项

### 苦工与力量

抓苦工所需银币：$C=(L+7)\times P$，其中 $C$ 为银币数，$L$ 为等级，$P$ 为静力量（不包括大力锤）。

玩家等级力量：$P=0.015L^2+0.8L+2$（四舍五入取整）

### 一些参数

狼技能参数：`[warmup, cooldown, chances, eventType, duration]`

其中 eventType 为何时能释放，1 为红血，4 为满血



火山参数：`[血量比例, 最大燃烧伤害，乌云时间]` 

反应炉参数：`[减速时间，减速效果值，冰效果值，直接伤害，塔减速时间，塔减速比例]`



### 关于出怪

目前可以肯定的是，一波的总 pop 一定达到上限



### 竞技场抽奖

数据中的第0个出现在第3个，第1个出现在第1个，第2个出现在第2个

下面记录数据中的出现的位置

```
显示顺序-实际顺序
-231
-213
-231
-231
213-132
132-213
213-231
空了一次
123-231
231-213
```

你拿到的永远是后端给你的第一个



### 升级耗时

每级的 buildValue 之和除以总力量



### 宝箱猜想

据说金宝箱中银币是 [4000, 7000) 的随机数，10% 额外出 1 或 2 个积分。物品上，10% 出碎片（蓝紫的概率较高），10% 出晶体，15% 出 1 级陷阱， 10% 出 2 级陷阱，10% 出 3 级陷阱，5% 出 sl，10% 出宝石，10% 出精华，15% 出不明物体



### 银币数据拟合记录

拉卡维银币奖励：$y=b\sqrt[3]{a+x}$，$x$ 为进度，拟合出 $a=18.8893$，$b=198.02957$

发现 $a\approx hardA/hardB$，函数关系写成：

$y=k\sqrt[3]{h_a+h_bx}$，拟合出 $k=128.0218$，其中 $h_a=70, h_b=3.7$

西利 $k=136.044$，$h_a=80, h_b=4.1$，但是没有前期的数据

