let PluginName = '玩家详细信息记录'// LiteLoader-AIDS automatic generated
/// <reference path="c:\Users\matebook 16s\.vscode\LLSE-Aids本地库目录/dts/helperlib/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "玩家详细信息记录",
    /* introduction */ "",
    /* version */ [2,0,0],
    /* otherInformation */ "记录玩家详细信息"
); 



let Version = '2.0.0'  
let Author = 'CreeperAWA'  
let PlayerInfoFilePath = "./plugins/PlayerInfo/PlayerData/"  

function GetPlayerInfo(Player) {  
    let dv = Player.getDevice();  // 定义 dv  
  
    var PlayerInfo = {  
        Name: Player.name, // 玩家名称  
        XUID: Player.xuid, // 玩家XUID  
        UUID: Player.uuid,  // 玩家UUID  
        PermLevel: Player.permLevel, // 玩家的操作权限等级（0 - 4）  
        GameMode: Player.gameMode, // 玩家的游戏模式（0 - 2, 6）  
        Pos: Player.pos, // 玩家所在坐标  
        FeetPos: Player.feetPos, // 玩家腿部所在坐标  
        BlockPos: Player.blockPos, // 玩家所在的方块坐标  
        LastDeathPos: Player.lastDeathPos, // 玩家上次死亡的坐标  
        RealName: Player.realName, // 玩家的真实名字  
        CanFly: Player.canFly, // 玩家是否可以飞行  
        CanSleep: Player.canSleep, // 玩家是否可以睡觉  
        CanBeSeenOnMap: Player.canBeSeenOnMap, // 玩家是否可以在地图上看到  
        CanFreeze: Player.canFreeze, // 玩家是否可以冻结  
        CanSeeDaylight: Player.canSeeDaylight, // 玩家是否能看到日光  
        CanShowNameTag: Player.canShowNameTag, // 玩家是否可以显示姓名标签  
        CanStartSleepInBed: Player.canStartSleepInBed, // 玩家是否可以开始在床上睡觉  
        CanPickupItems: Player.canPickupItems, // 玩家是否可以拾取物品  
        MaxHealth: Player.maxHealth, // 玩家最大生命值  
        Health: Player.health, // 玩家当前生命值  
        InAir: Player.inAir, // 玩家当前是否悬空  
        InWater: Player.inWater, // 玩家当前是否在水中  
        InLava: Player.inLava, // 玩家是否在熔岩中  
        InRain: Player.inRain, // 玩家是否下雨  
        InSnow: Player.inSnow, // 玩家是否在雪中  
        InWall: Player.inWall, // 玩家是否在墙上  
        InWaterOrRain: Player.inWaterOrRain, // 玩家是否在水中或雨中  
        InWorld: Player.inWorld, // 玩家是否在世界  
        InClouds: Player.inClouds, // 玩家是否在云端  
        Speed: Player.speed, // 玩家当前速度  
        Direction: Player.direction, // 玩家当前朝向  
        UniqueId: Player.uniqueId, // 玩家（实体的）唯一标识符  
        LangCode: Player.langCode, // 玩家设置的语言的标识符(形如zh_CN)  
        IsLoading: Player.isLoading, // 玩家是否正在加载  
        IsInvisible: Player.isInvisible, // 玩家是否隐身中  
        IsInsidePortal: Player.isInsidePortal, // 玩家是否在传送门中  
        IsHurt: Player.isHurt, // 玩家是否受伤  
        IsTrusting: Player.isTrusting, // LL文档没写是干啥的，我猜测可能是返回玩家是否被信任
        IsTouchingDamageBlock: Player.isTouchingDamageBlock, // 玩家是否在能造成伤害的方块上  
        IsHungry: Player.isHungry, // 玩家是否饿了  
        IsOnFire: Player.isOnFire, // 玩家是否着火  
        IsOnGround: Player.isOnGround, // 玩家是否在地上  
        IsOnHotBlock: Player.isOnHotBlock, // 玩家是否在高温方块上（岩浆等）  
        IsTrading: Player.isTrading, // 玩家在交易  
        IsAdventure: Player.isAdventure, // 玩家是否是冒险模式  
        IsGliding: Player.isGliding, // 玩家在滑行  
        IsSurvival: Player.isSurvival, // 玩家是否是生存模式  
        IsSpectator: Player.isSpectator, // 玩家是否是观众模式，实际上应该是旁观模式，LL文档是这么写的我就这么写了  
        IsRiding: Player.isRiding, // 玩家是否在骑行  
        IsDancing: Player.isDancing, // 玩家是否在跳舞，我猜测应该是是否在做表情动作，LL文档是这么写的，我就这么写了  
        IsCreative: Player.isCreative, // 玩家是否是创造模式  
        IsFlying: Player.isFlying, // 玩家是否在飞行  
        IsSleeping: Player.isSleeping, // 玩家是否正在睡觉  
        IsMoving: Player.isMoving, // 玩家是否正在移动  
        IsSneaking: Player.isSneaking, // 玩家是否正在潜行  
        IP: dv.ip,  // 玩家IP  
        AvgPing: dv.avgPing,  // 玩家平均延迟  
        AvgPacketLoss: dv.avgPacketLoss,  // 玩家平均丢包率  
        ConnectServerAddress: dv.serverAddress,  // 玩家连接的地址  
        OS: dv.os,  // 玩家操作系统  
        DeviceName: dv.deviceName,  //设备名  
        InPutMode: dv.inputMode,  // 玩家操作模式  
        ClientId: dv.clientId,  // 玩家客户端ID  
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