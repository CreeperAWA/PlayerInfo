let PluginName = '玩家详细信息记录'// LiteLoader-AIDS automatic generated
/// <reference path="c:\Users\matebook 16s\.vscode\LLSE-Aids本地库目录/dts/helperlib/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "玩家详细信息记录",
    /* introduction */ "",
    /* version */ [2,0,1],
    /* otherInformation */ "记录玩家详细信息"
); 



let Version = '2.0.0'  
let Author = 'CreeperAWA'  
let PlayerInfoFilePath = "./plugins/PlayerInfo/PlayerData/"  

function GetPlayerInfo(Player) {  
    let dv = Player.getDevice();  // 定义 dv  
  
    var PlayerInfo = {  
        玩家名称: Player.name, // 玩家名称  
        玩家XUID: Player.xuid, // 玩家XUID  
        玩家UUID: Player.uuid,  // 玩家UUID  
        玩家操作权限等级: Player.permLevel, // 玩家的操作权限等级（0 - 4）  
        玩家游戏模式: Player.gameMode, // 玩家的游戏模式（0 - 2, 6）  
        玩家所在坐标: Player.pos, // 玩家所在坐标  
        玩家腿部所在坐标: Player.feetPos, // 玩家腿部所在坐标  
        玩家所在的方块坐标: Player.blockPos, // 玩家所在的方块坐标  
        玩家上次死亡的坐标: Player.lastDeathPos, // 玩家上次死亡的坐标  
        玩家的真实名字: Player.realName, // 玩家的真实名字  
        玩家是否可以飞行: Player.canFly, // 玩家是否可以飞行  
        玩家是否可以睡觉: Player.canSleep, // 玩家是否可以睡觉  
        玩家是否可以在地图上看到: Player.canBeSeenOnMap, // 玩家是否可以在地图上看到  
        玩家是否可以冻结: Player.canFreeze, // 玩家是否可以冻结  
        玩家是否能看到日光: Player.canSeeDaylight, // 玩家是否能看到日光  
        玩家是否可以显示姓名标签: Player.canShowNameTag, // 玩家是否可以显示姓名标签  
        玩家是否可以开始在床上睡觉: Player.canStartSleepInBed, // 玩家是否可以开始在床上睡觉  
        玩家是否可以拾取物品: Player.canPickupItems, // 玩家是否可以拾取物品  
        玩家最大生命值: Player.maxHealth, // 玩家最大生命值  
        玩家当前生命值: Player.health, // 玩家当前生命值  
        玩家当前是否悬空: Player.inAir, // 玩家当前是否悬空  
        玩家当前是否在水中: Player.inWater, // 玩家当前是否在水中  
        玩家是否在熔岩中: Player.inLava, // 玩家是否在熔岩中  
        玩家是否下雨: Player.inRain, // 玩家是否下雨  
        玩家是否在雪中: Player.inSnow, // 玩家是否在雪中  
        玩家是否在墙上: Player.inWall, // 玩家是否在墙上  
        玩家是否在水中或雨中: Player.inWaterOrRain, // 玩家是否在水中或雨中  
        玩家是否在世界: Player.inWorld, // 玩家是否在世界  
        玩家是否在云端: Player.inClouds, // 玩家是否在云端  
        玩家当前速度: Player.speed, // 玩家当前速度  
        玩家当前朝向: Player.direction, // 玩家当前朝向  
        玩家实体唯一标识符: Player.uniqueId, // 玩家（实体的）唯一标识符  
        玩家设置的语言的标识符: Player.langCode, // 玩家设置的语言的标识符(形如zh_CN)  
        玩家是否正在加载: Player.isLoading, // 玩家是否正在加载  
        玩家是否隐身中: Player.isInvisible, // 玩家是否隐身中  
        玩家是否在传送门中: Player.isInsidePortal, // 玩家是否在传送门中  
        玩家是否受伤: Player.isHurt, // 玩家是否受伤  
        玩家是否被信任: Player.isTrusting, // LL文档没写是干啥的，我猜测可能是返回玩家是否被信任  
        玩家是否在能造成伤害的方块上: Player.isTouchingDamageBlock, // 玩家是否在能造成伤害的方块上  
        玩家是否饿了: Player.isHungry, // 玩家是否饿了  
        玩家是否着火: Player.isOnFire, // 玩家是否着火  
        玩家是否在地上: Player.isOnGround, // 玩家是否在地上  
        玩家是否在高温方块上: Player.isOnHotBlock, // 玩家是否在高温方块上（岩浆等）  
        玩家在交易: Player.isTrading, // 玩家在交易  
        玩家在滑行: Player.isGliding, // 玩家在滑行  
        玩家是否在骑行: Player.isRiding, // 玩家是否在骑行  
        玩家是否在跳舞: Player.isDancing, // 玩家是否在跳舞，我猜测应该是是否在做表情动作，LL文档是这么写的，我就这么写了  
        玩家是否在飞行: Player.isFlying, // 玩家是否在飞行  
        玩家是否正在睡觉: Player.isSleeping, // 玩家是否正在睡觉  
        玩家是否正在移动: Player.isMoving, // 玩家是否正在移动  
        玩家是否正在潜行: Player.isSneaking, // 玩家是否正在潜行  
        玩家IP: dv.ip,  // 玩家IP  
        玩家平均延迟: dv.avgPing,  // 玩家平均延迟  
        玩家平均丢包率: dv.avgPacketLoss,  // 玩家平均丢包率  
        玩家连接的地址: dv.serverAddress,  // 玩家连接的地址  
        玩家操作系统: dv.os,  // 玩家操作系统  
        设备名: dv.deviceName,  //设备名  
        玩家操作模式: dv.inputMode,  // 玩家操作模式  
        玩家客户端ID: dv.clientId,  // 玩家客户端ID  
    };
    return PlayerInfo;  
}  
  
log("插件名称：" + PluginName);
log("插件版本：" + Version);  
log("作者：" + Author);  
  
// 玩家进入后写入信息  
mc.listen("onJoin", function (player) {  
    let currentTime = system.getTimeStr().replace(/:/g, "-").replace(/ /g, "_"); // 获取当前时间字符串，并替换字符以避免错误  
    let fileName = player.name + "-" + currentTime + ".json"; // 生成文件名  
    let PlayerInfoFilePath = "./plugins/PlayerInfo/PlayerData/" + fileName; // 拼接完整的文件路径  
    let Data = JSON.stringify(GetPlayerInfo(player), null, 4); // 获取玩家信息的JSON字符串，并格式化（缩进4个空格）  
    File.writeTo(PlayerInfoFilePath, Data); // 写入文件  
});