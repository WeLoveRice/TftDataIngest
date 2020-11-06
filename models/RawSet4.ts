/* jshint indent: 2 */

import { DataTypes, Model, Sequelize } from 'sequelize';

export interface RawSet4Attributes {
  puuid?: string;
  uuid?: string;
  summonerName?: string;
  goldLeft?: number;
  level?: number;
  lastRound?: number;
  placement?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  chosenTrait?: string;
  chosenUnit?: string;
  matchId?: string;
  tftSetNumber?: number;
  gameVersion?: string;
  bossNumUnits?: number;
  bossTierCurrent?: number;
  bossTierTotal?: number;
  cultistNumUnits?: number;
  cultistTierCurrent?: number;
  cultistTierTotal?: number;
  divineNumUnits?: number;
  divineTierCurrent?: number;
  divineTierTotal?: number;
  duelistNumUnits?: number;
  duelistTierCurrent?: number;
  duelistTierTotal?: number;
  duskNumUnits?: number;
  duskTierCurrent?: number;
  duskTierTotal?: number;
  emperorNumUnits?: number;
  emperorTierCurrent?: number;
  emperorTierTotal?: number;
  fortuneNumUnits?: number;
  fortuneTierCurrent?: number;
  fortuneTierTotal?: number;
  hunterNumUnits?: number;
  hunterTierCurrent?: number;
  hunterTierTotal?: number;
  keeperNumUnits?: number;
  keeperTierCurrent?: number;
  keeperTierTotal?: number;
  moonlightNumUnits?: number;
  moonlightTierCurrent?: number;
  moonlightTierTotal?: number;
  set4AdeptNumUnits?: number;
  set4AdeptTierCurrent?: number;
  set4AdeptTierTotal?: number;
  set4AssassinNumUnits?: number;
  set4AssassinTierCurrent?: number;
  set4AssassinTierTotal?: number;
  set4BrawlerNumUnits?: number;
  set4BrawlerTierCurrent?: number;
  set4BrawlerTierTotal?: number;
  set4DazzlerNumUnits?: number;
  set4DazzlerTierCurrent?: number;
  set4DazzlerTierTotal?: number;
  set4ElderwoodNumUnits?: number;
  set4ElderwoodTierCurrent?: number;
  set4ElderwoodTierTotal?: number;
  set4EnlightenedNumUnits?: number;
  set4EnlightenedTierCurrent?: number;
  set4EnlightenedTierTotal?: number;
  set4ExileNumUnits?: number;
  set4ExileTierCurrent?: number;
  set4ExileTierTotal?: number;
  set4MageNumUnits?: number;
  set4MageTierCurrent?: number;
  set4MageTierTotal?: number;
  set4MysticNumUnits?: number;
  set4MysticTierCurrent?: number;
  set4MysticTierTotal?: number;
  set4NinjaNumUnits?: number;
  set4NinjaTierCurrent?: number;
  set4NinjaTierTotal?: number;
  set4ShadeNumUnits?: number;
  set4ShadeTierCurrent?: number;
  set4ShadeTierTotal?: number;
  set4SpiritNumUnits?: number;
  set4SpiritTierCurrent?: number;
  set4SpiritTierTotal?: number;
  set4TormentedNumUnits?: number;
  set4TormentedTierCurrent?: number;
  set4TormentedTierTotal?: number;
  set4VanguardNumUnits?: number;
  set4VanguardTierCurrent?: number;
  set4VanguardTierTotal?: number;
  sharpshooterNumUnits?: number;
  sharpshooterTierCurrent?: number;
  sharpshooterTierTotal?: number;
  tft4Aatrox1Items?: string;
  tft4Aatrox1Tier?: string;
  tft4Aatrox2Items?: string;
  tft4Aatrox2Tier?: string;
  tft4Aatrox3Items?: string;
  tft4Aatrox3Tier?: string;
  tft4AatroxItems?: string;
  tft4AatroxTier?: string;
  tft4Ahri1Items?: string;
  tft4Ahri1Tier?: string;
  tft4Ahri2Items?: string;
  tft4Ahri2Tier?: string;
  tft4Ahri3Items?: string;
  tft4Ahri3Tier?: string;
  tft4AhriItems?: string;
  tft4AhriTier?: string;
  tft4Akali1Items?: string;
  tft4Akali1Tier?: string;
  tft4Akali2Items?: string;
  tft4Akali2Tier?: string;
  tft4Akali3Items?: string;
  tft4Akali3Tier?: string;
  tft4AkaliItems?: string;
  tft4AkaliTier?: string;
  tft4Annie1Items?: string;
  tft4Annie1Tier?: string;
  tft4Annie2Items?: string;
  tft4Annie2Tier?: string;
  tft4Annie3Items?: string;
  tft4Annie3Tier?: string;
  tft4AnnieItems?: string;
  tft4AnnieTier?: string;
  tft4Aphelios1Items?: string;
  tft4Aphelios1Tier?: string;
  tft4Aphelios2Items?: string;
  tft4Aphelios2Tier?: string;
  tft4Aphelios3Items?: string;
  tft4Aphelios3Tier?: string;
  tft4ApheliosItems?: string;
  tft4ApheliosTier?: string;
  tft4Ashe1Items?: string;
  tft4Ashe1Tier?: string;
  tft4Ashe2Items?: string;
  tft4Ashe2Tier?: string;
  tft4Ashe3Items?: string;
  tft4Ashe3Tier?: string;
  tft4AsheItems?: string;
  tft4AsheTier?: string;
  tft4Azir1Items?: string;
  tft4Azir1Tier?: string;
  tft4Azir2Items?: string;
  tft4Azir2Tier?: string;
  tft4Azir3Items?: string;
  tft4Azir3Tier?: string;
  tft4AzirItems?: string;
  tft4AzirTier?: string;
  tft4Cassiopeia1Items?: string;
  tft4Cassiopeia1Tier?: string;
  tft4Cassiopeia2Items?: string;
  tft4Cassiopeia2Tier?: string;
  tft4Cassiopeia3Items?: string;
  tft4Cassiopeia3Tier?: string;
  tft4CassiopeiaItems?: string;
  tft4CassiopeiaTier?: string;
  tft4Diana1Items?: string;
  tft4Diana1Tier?: string;
  tft4Diana2Items?: string;
  tft4Diana2Tier?: string;
  tft4Diana3Items?: string;
  tft4Diana3Tier?: string;
  tft4DianaItems?: string;
  tft4DianaTier?: string;
  tft4Elise1Items?: string;
  tft4Elise1Tier?: string;
  tft4Elise2Items?: string;
  tft4Elise2Tier?: string;
  tft4Elise3Items?: string;
  tft4Elise3Tier?: string;
  tft4EliseItems?: string;
  tft4EliseTier?: string;
  tft4Evelynn1Items?: string;
  tft4Evelynn1Tier?: string;
  tft4Evelynn2Items?: string;
  tft4Evelynn2Tier?: string;
  tft4Evelynn3Items?: string;
  tft4Evelynn3Tier?: string;
  tft4EvelynnItems?: string;
  tft4EvelynnTier?: string;
  tft4Ezreal1Items?: string;
  tft4Ezreal1Tier?: string;
  tft4Ezreal2Items?: string;
  tft4Ezreal2Tier?: string;
  tft4Ezreal3Items?: string;
  tft4Ezreal3Tier?: string;
  tft4EzrealItems?: string;
  tft4EzrealTier?: string;
  tft4Fiora1Items?: string;
  tft4Fiora1Tier?: string;
  tft4Fiora2Items?: string;
  tft4Fiora2Tier?: string;
  tft4Fiora3Items?: string;
  tft4Fiora3Tier?: string;
  tft4FioraItems?: string;
  tft4FioraTier?: string;
  tft4Garen1Items?: string;
  tft4Garen1Tier?: string;
  tft4Garen2Items?: string;
  tft4Garen2Tier?: string;
  tft4Garen3Items?: string;
  tft4Garen3Tier?: string;
  tft4GarenItems?: string;
  tft4GarenTier?: string;
  tft4Hecarim1Items?: string;
  tft4Hecarim1Tier?: string;
  tft4Hecarim2Items?: string;
  tft4Hecarim2Tier?: string;
  tft4Hecarim3Items?: string;
  tft4Hecarim3Tier?: string;
  tft4HecarimItems?: string;
  tft4HecarimTier?: string;
  tft4Irelia1Items?: string;
  tft4Irelia1Tier?: string;
  tft4Irelia2Items?: string;
  tft4Irelia2Tier?: string;
  tft4Irelia3Items?: string;
  tft4Irelia3Tier?: string;
  tft4IreliaItems?: string;
  tft4IreliaTier?: string;
  tft4Janna1Items?: string;
  tft4Janna1Tier?: string;
  tft4Janna2Items?: string;
  tft4Janna2Tier?: string;
  tft4Janna3Items?: string;
  tft4Janna3Tier?: string;
  tft4JannaItems?: string;
  tft4JannaTier?: string;
  tft4JarvanIv1Items?: string;
  tft4JarvanIv1Tier?: string;
  tft4JarvanIv2Items?: string;
  tft4JarvanIv2Tier?: string;
  tft4JarvanIv3Items?: string;
  tft4JarvanIv3Tier?: string;
  tft4JarvanIvItems?: string;
  tft4JarvanIvTier?: string;
  tft4Jax1Items?: string;
  tft4Jax1Tier?: string;
  tft4Jax2Items?: string;
  tft4Jax2Tier?: string;
  tft4Jax3Items?: string;
  tft4Jax3Tier?: string;
  tft4JaxItems?: string;
  tft4JaxTier?: string;
  tft4Jhin1Items?: string;
  tft4Jhin1Tier?: string;
  tft4Jhin2Items?: string;
  tft4Jhin2Tier?: string;
  tft4Jhin3Items?: string;
  tft4Jhin3Tier?: string;
  tft4JhinItems?: string;
  tft4JhinTier?: string;
  tft4Jinx1Items?: string;
  tft4Jinx1Tier?: string;
  tft4Jinx2Items?: string;
  tft4Jinx2Tier?: string;
  tft4Jinx3Items?: string;
  tft4Jinx3Tier?: string;
  tft4JinxItems?: string;
  tft4JinxTier?: string;
  tft4Kalista1Items?: string;
  tft4Kalista1Tier?: string;
  tft4Kalista2Items?: string;
  tft4Kalista2Tier?: string;
  tft4Kalista3Items?: string;
  tft4Kalista3Tier?: string;
  tft4KalistaItems?: string;
  tft4KalistaTier?: string;
  tft4Katarina1Items?: string;
  tft4Katarina1Tier?: string;
  tft4Katarina2Items?: string;
  tft4Katarina2Tier?: string;
  tft4Katarina3Items?: string;
  tft4Katarina3Tier?: string;
  tft4KatarinaItems?: string;
  tft4KatarinaTier?: string;
  tft4Kayn1Items?: string;
  tft4Kayn1Tier?: string;
  tft4Kayn2Items?: string;
  tft4Kayn2Tier?: string;
  tft4Kayn3Items?: string;
  tft4Kayn3Tier?: string;
  tft4KaynItems?: string;
  tft4KaynTier?: string;
  tft4Kennen1Items?: string;
  tft4Kennen1Tier?: string;
  tft4Kennen2Items?: string;
  tft4Kennen2Tier?: string;
  tft4Kennen3Items?: string;
  tft4Kennen3Tier?: string;
  tft4KennenItems?: string;
  tft4KennenTier?: string;
  tft4Kindred1Items?: string;
  tft4Kindred1Tier?: string;
  tft4Kindred2Items?: string;
  tft4Kindred2Tier?: string;
  tft4Kindred3Items?: string;
  tft4Kindred3Tier?: string;
  tft4KindredItems?: string;
  tft4KindredTier?: string;
  tft4LeeSin1Items?: string;
  tft4LeeSin1Tier?: string;
  tft4LeeSin2Items?: string;
  tft4LeeSin2Tier?: string;
  tft4LeeSin3Items?: string;
  tft4LeeSin3Tier?: string;
  tft4LeeSinItems?: string;
  tft4LeeSinTier?: string;
  tft4Lillia1Items?: string;
  tft4Lillia1Tier?: string;
  tft4Lillia2Items?: string;
  tft4Lillia2Tier?: string;
  tft4Lillia3Items?: string;
  tft4Lillia3Tier?: string;
  tft4LilliaItems?: string;
  tft4LilliaTier?: string;
  tft4Lissandra1Items?: string;
  tft4Lissandra1Tier?: string;
  tft4Lissandra2Items?: string;
  tft4Lissandra2Tier?: string;
  tft4Lissandra3Items?: string;
  tft4Lissandra3Tier?: string;
  tft4LissandraItems?: string;
  tft4LissandraTier?: string;
  tft4Lulu1Items?: string;
  tft4Lulu1Tier?: string;
  tft4Lulu2Items?: string;
  tft4Lulu2Tier?: string;
  tft4Lulu3Items?: string;
  tft4Lulu3Tier?: string;
  tft4LuluItems?: string;
  tft4LuluTier?: string;
  tft4Lux1Items?: string;
  tft4Lux1Tier?: string;
  tft4Lux2Items?: string;
  tft4Lux2Tier?: string;
  tft4Lux3Items?: string;
  tft4Lux3Tier?: string;
  tft4LuxItems?: string;
  tft4LuxTier?: string;
  tft4Maokai1Items?: string;
  tft4Maokai1Tier?: string;
  tft4Maokai2Items?: string;
  tft4Maokai2Tier?: string;
  tft4Maokai3Items?: string;
  tft4Maokai3Tier?: string;
  tft4MaokaiItems?: string;
  tft4MaokaiTier?: string;
  tft4Morgana1Items?: string;
  tft4Morgana1Tier?: string;
  tft4Morgana2Items?: string;
  tft4Morgana2Tier?: string;
  tft4Morgana3Items?: string;
  tft4Morgana3Tier?: string;
  tft4MorganaItems?: string;
  tft4MorganaTier?: string;
  tft4Nami1Items?: string;
  tft4Nami1Tier?: string;
  tft4Nami2Items?: string;
  tft4Nami2Tier?: string;
  tft4Nami3Items?: string;
  tft4Nami3Tier?: string;
  tft4NamiItems?: string;
  tft4NamiTier?: string;
  tft4Nidalee1Items?: string;
  tft4Nidalee1Tier?: string;
  tft4Nidalee2Items?: string;
  tft4Nidalee2Tier?: string;
  tft4Nidalee3Items?: string;
  tft4Nidalee3Tier?: string;
  tft4NidaleeItems?: string;
  tft4NidaleeTier?: string;
  tft4Nunu1Items?: string;
  tft4Nunu1Tier?: string;
  tft4Nunu2Items?: string;
  tft4Nunu2Tier?: string;
  tft4Nunu3Items?: string;
  tft4Nunu3Tier?: string;
  tft4NunuItems?: string;
  tft4NunuTier?: string;
  tft4Pyke1Items?: string;
  tft4Pyke1Tier?: string;
  tft4Pyke2Items?: string;
  tft4Pyke2Tier?: string;
  tft4Pyke3Items?: string;
  tft4Pyke3Tier?: string;
  tft4PykeItems?: string;
  tft4PykeTier?: string;
  tft4Riven1Items?: string;
  tft4Riven1Tier?: string;
  tft4Riven2Items?: string;
  tft4Riven2Tier?: string;
  tft4Riven3Items?: string;
  tft4Riven3Tier?: string;
  tft4RivenItems?: string;
  tft4RivenTier?: string;
  tft4Sejuani1Items?: string;
  tft4Sejuani1Tier?: string;
  tft4Sejuani2Items?: string;
  tft4Sejuani2Tier?: string;
  tft4Sejuani3Items?: string;
  tft4Sejuani3Tier?: string;
  tft4SejuaniItems?: string;
  tft4SejuaniTier?: string;
  tft4Sett1Items?: string;
  tft4Sett1Tier?: string;
  tft4Sett2Items?: string;
  tft4Sett2Tier?: string;
  tft4Sett3Items?: string;
  tft4Sett3Tier?: string;
  tft4SettItems?: string;
  tft4SettTier?: string;
  tft4Shen1Items?: string;
  tft4Shen1Tier?: string;
  tft4Shen2Items?: string;
  tft4Shen2Tier?: string;
  tft4Shen3Items?: string;
  tft4Shen3Tier?: string;
  tft4ShenItems?: string;
  tft4ShenTier?: string;
  tft4Sylas1Items?: string;
  tft4Sylas1Tier?: string;
  tft4Sylas2Items?: string;
  tft4Sylas2Tier?: string;
  tft4Sylas3Items?: string;
  tft4Sylas3Tier?: string;
  tft4SylasItems?: string;
  tft4SylasTier?: string;
  tft4TahmKench1Items?: string;
  tft4TahmKench1Tier?: string;
  tft4TahmKench2Items?: string;
  tft4TahmKench2Tier?: string;
  tft4TahmKench3Items?: string;
  tft4TahmKench3Tier?: string;
  tft4TahmKenchItems?: string;
  tft4TahmKenchTier?: string;
  tft4Talon1Items?: string;
  tft4Talon1Tier?: string;
  tft4Talon2Items?: string;
  tft4Talon2Tier?: string;
  tft4Talon3Items?: string;
  tft4Talon3Tier?: string;
  tft4TalonItems?: string;
  tft4TalonTier?: string;
  tft4Teemo1Items?: string;
  tft4Teemo1Tier?: string;
  tft4Teemo2Items?: string;
  tft4Teemo2Tier?: string;
  tft4Teemo3Items?: string;
  tft4Teemo3Tier?: string;
  tft4TeemoItems?: string;
  tft4TeemoTier?: string;
  tft4Thresh1Items?: string;
  tft4Thresh1Tier?: string;
  tft4Thresh2Items?: string;
  tft4Thresh2Tier?: string;
  tft4Thresh3Items?: string;
  tft4Thresh3Tier?: string;
  tft4ThreshItems?: string;
  tft4ThreshTier?: string;
  tft4TwistedFate1Items?: string;
  tft4TwistedFate1Tier?: string;
  tft4TwistedFate2Items?: string;
  tft4TwistedFate2Tier?: string;
  tft4TwistedFate3Items?: string;
  tft4TwistedFate3Tier?: string;
  tft4TwistedFateItems?: string;
  tft4TwistedFateTier?: string;
  tft4Vayne1Items?: string;
  tft4Vayne1Tier?: string;
  tft4Vayne2Items?: string;
  tft4Vayne2Tier?: string;
  tft4Vayne3Items?: string;
  tft4Vayne3Tier?: string;
  tft4VayneItems?: string;
  tft4VayneTier?: string;
  tft4Veigar1Items?: string;
  tft4Veigar1Tier?: string;
  tft4Veigar2Items?: string;
  tft4Veigar2Tier?: string;
  tft4Veigar3Items?: string;
  tft4Veigar3Tier?: string;
  tft4VeigarItems?: string;
  tft4VeigarTier?: string;
  tft4Vi1Items?: string;
  tft4Vi1Tier?: string;
  tft4Vi2Items?: string;
  tft4Vi2Tier?: string;
  tft4Vi3Items?: string;
  tft4Vi3Tier?: string;
  tft4ViItems?: string;
  tft4ViTier?: string;
  tft4Warwick1Items?: string;
  tft4Warwick1Tier?: string;
  tft4Warwick2Items?: string;
  tft4Warwick2Tier?: string;
  tft4Warwick3Items?: string;
  tft4Warwick3Tier?: string;
  tft4WarwickItems?: string;
  tft4WarwickTier?: string;
  tft4Wukong1Items?: string;
  tft4Wukong1Tier?: string;
  tft4Wukong2Items?: string;
  tft4Wukong2Tier?: string;
  tft4Wukong3Items?: string;
  tft4Wukong3Tier?: string;
  tft4WukongItems?: string;
  tft4WukongTier?: string;
  tft4XinZhao1Items?: string;
  tft4XinZhao1Tier?: string;
  tft4XinZhao2Items?: string;
  tft4XinZhao2Tier?: string;
  tft4XinZhao3Items?: string;
  tft4XinZhao3Tier?: string;
  tft4XinZhaoItems?: string;
  tft4XinZhaoTier?: string;
  tft4Yasuo1Items?: string;
  tft4Yasuo1Tier?: string;
  tft4Yasuo2Items?: string;
  tft4Yasuo2Tier?: string;
  tft4Yasuo3Items?: string;
  tft4Yasuo3Tier?: string;
  tft4YasuoItems?: string;
  tft4YasuoTier?: string;
  tft4Yone1Items?: string;
  tft4Yone1Tier?: string;
  tft4Yone2Items?: string;
  tft4Yone2Tier?: string;
  tft4Yone3Items?: string;
  tft4Yone3Tier?: string;
  tft4YoneItems?: string;
  tft4YoneTier?: string;
  tft4Yuumi1Items?: string;
  tft4Yuumi1Tier?: string;
  tft4Yuumi2Items?: string;
  tft4Yuumi2Tier?: string;
  tft4Yuumi3Items?: string;
  tft4Yuumi3Tier?: string;
  tft4YuumiItems?: string;
  tft4YuumiTier?: string;
  tft4Zed1Items?: string;
  tft4Zed1Tier?: string;
  tft4Zed2Items?: string;
  tft4Zed2Tier?: string;
  tft4Zed3Items?: string;
  tft4Zed3Tier?: string;
  tft4ZedItems?: string;
  tft4ZedTier?: string;
  tft4Zilean1Items?: string;
  tft4Zilean1Tier?: string;
  tft4Zilean2Items?: string;
  tft4Zilean2Tier?: string;
  tft4Zilean3Items?: string;
  tft4Zilean3Tier?: string;
  tft4ZileanItems?: string;
  tft4ZileanTier?: string;
  warlordNumUnits?: number;
  warlordTierCurrent?: number;
  warlordTierTotal?: number;
}

export class RawSet4 extends Model<RawSet4Attributes, RawSet4Attributes> implements RawSet4Attributes {
  puuid?: string;
  uuid?: string;
  summonerName?: string;
  goldLeft?: number;
  level?: number;
  lastRound?: number;
  placement?: number;
  playersEliminated?: number;
  timeEliminated?: number;
  totalDamageToPlayers?: number;
  chosenTrait?: string;
  chosenUnit?: string;
  matchId?: string;
  tftSetNumber?: number;
  gameVersion?: string;
  bossNumUnits?: number;
  bossTierCurrent?: number;
  bossTierTotal?: number;
  cultistNumUnits?: number;
  cultistTierCurrent?: number;
  cultistTierTotal?: number;
  divineNumUnits?: number;
  divineTierCurrent?: number;
  divineTierTotal?: number;
  duelistNumUnits?: number;
  duelistTierCurrent?: number;
  duelistTierTotal?: number;
  duskNumUnits?: number;
  duskTierCurrent?: number;
  duskTierTotal?: number;
  emperorNumUnits?: number;
  emperorTierCurrent?: number;
  emperorTierTotal?: number;
  fortuneNumUnits?: number;
  fortuneTierCurrent?: number;
  fortuneTierTotal?: number;
  hunterNumUnits?: number;
  hunterTierCurrent?: number;
  hunterTierTotal?: number;
  keeperNumUnits?: number;
  keeperTierCurrent?: number;
  keeperTierTotal?: number;
  moonlightNumUnits?: number;
  moonlightTierCurrent?: number;
  moonlightTierTotal?: number;
  set4AdeptNumUnits?: number;
  set4AdeptTierCurrent?: number;
  set4AdeptTierTotal?: number;
  set4AssassinNumUnits?: number;
  set4AssassinTierCurrent?: number;
  set4AssassinTierTotal?: number;
  set4BrawlerNumUnits?: number;
  set4BrawlerTierCurrent?: number;
  set4BrawlerTierTotal?: number;
  set4DazzlerNumUnits?: number;
  set4DazzlerTierCurrent?: number;
  set4DazzlerTierTotal?: number;
  set4ElderwoodNumUnits?: number;
  set4ElderwoodTierCurrent?: number;
  set4ElderwoodTierTotal?: number;
  set4EnlightenedNumUnits?: number;
  set4EnlightenedTierCurrent?: number;
  set4EnlightenedTierTotal?: number;
  set4ExileNumUnits?: number;
  set4ExileTierCurrent?: number;
  set4ExileTierTotal?: number;
  set4MageNumUnits?: number;
  set4MageTierCurrent?: number;
  set4MageTierTotal?: number;
  set4MysticNumUnits?: number;
  set4MysticTierCurrent?: number;
  set4MysticTierTotal?: number;
  set4NinjaNumUnits?: number;
  set4NinjaTierCurrent?: number;
  set4NinjaTierTotal?: number;
  set4ShadeNumUnits?: number;
  set4ShadeTierCurrent?: number;
  set4ShadeTierTotal?: number;
  set4SpiritNumUnits?: number;
  set4SpiritTierCurrent?: number;
  set4SpiritTierTotal?: number;
  set4TormentedNumUnits?: number;
  set4TormentedTierCurrent?: number;
  set4TormentedTierTotal?: number;
  set4VanguardNumUnits?: number;
  set4VanguardTierCurrent?: number;
  set4VanguardTierTotal?: number;
  sharpshooterNumUnits?: number;
  sharpshooterTierCurrent?: number;
  sharpshooterTierTotal?: number;
  tft4Aatrox1Items?: string;
  tft4Aatrox1Tier?: string;
  tft4Aatrox2Items?: string;
  tft4Aatrox2Tier?: string;
  tft4Aatrox3Items?: string;
  tft4Aatrox3Tier?: string;
  tft4AatroxItems?: string;
  tft4AatroxTier?: string;
  tft4Ahri1Items?: string;
  tft4Ahri1Tier?: string;
  tft4Ahri2Items?: string;
  tft4Ahri2Tier?: string;
  tft4Ahri3Items?: string;
  tft4Ahri3Tier?: string;
  tft4AhriItems?: string;
  tft4AhriTier?: string;
  tft4Akali1Items?: string;
  tft4Akali1Tier?: string;
  tft4Akali2Items?: string;
  tft4Akali2Tier?: string;
  tft4Akali3Items?: string;
  tft4Akali3Tier?: string;
  tft4AkaliItems?: string;
  tft4AkaliTier?: string;
  tft4Annie1Items?: string;
  tft4Annie1Tier?: string;
  tft4Annie2Items?: string;
  tft4Annie2Tier?: string;
  tft4Annie3Items?: string;
  tft4Annie3Tier?: string;
  tft4AnnieItems?: string;
  tft4AnnieTier?: string;
  tft4Aphelios1Items?: string;
  tft4Aphelios1Tier?: string;
  tft4Aphelios2Items?: string;
  tft4Aphelios2Tier?: string;
  tft4Aphelios3Items?: string;
  tft4Aphelios3Tier?: string;
  tft4ApheliosItems?: string;
  tft4ApheliosTier?: string;
  tft4Ashe1Items?: string;
  tft4Ashe1Tier?: string;
  tft4Ashe2Items?: string;
  tft4Ashe2Tier?: string;
  tft4Ashe3Items?: string;
  tft4Ashe3Tier?: string;
  tft4AsheItems?: string;
  tft4AsheTier?: string;
  tft4Azir1Items?: string;
  tft4Azir1Tier?: string;
  tft4Azir2Items?: string;
  tft4Azir2Tier?: string;
  tft4Azir3Items?: string;
  tft4Azir3Tier?: string;
  tft4AzirItems?: string;
  tft4AzirTier?: string;
  tft4Cassiopeia1Items?: string;
  tft4Cassiopeia1Tier?: string;
  tft4Cassiopeia2Items?: string;
  tft4Cassiopeia2Tier?: string;
  tft4Cassiopeia3Items?: string;
  tft4Cassiopeia3Tier?: string;
  tft4CassiopeiaItems?: string;
  tft4CassiopeiaTier?: string;
  tft4Diana1Items?: string;
  tft4Diana1Tier?: string;
  tft4Diana2Items?: string;
  tft4Diana2Tier?: string;
  tft4Diana3Items?: string;
  tft4Diana3Tier?: string;
  tft4DianaItems?: string;
  tft4DianaTier?: string;
  tft4Elise1Items?: string;
  tft4Elise1Tier?: string;
  tft4Elise2Items?: string;
  tft4Elise2Tier?: string;
  tft4Elise3Items?: string;
  tft4Elise3Tier?: string;
  tft4EliseItems?: string;
  tft4EliseTier?: string;
  tft4Evelynn1Items?: string;
  tft4Evelynn1Tier?: string;
  tft4Evelynn2Items?: string;
  tft4Evelynn2Tier?: string;
  tft4Evelynn3Items?: string;
  tft4Evelynn3Tier?: string;
  tft4EvelynnItems?: string;
  tft4EvelynnTier?: string;
  tft4Ezreal1Items?: string;
  tft4Ezreal1Tier?: string;
  tft4Ezreal2Items?: string;
  tft4Ezreal2Tier?: string;
  tft4Ezreal3Items?: string;
  tft4Ezreal3Tier?: string;
  tft4EzrealItems?: string;
  tft4EzrealTier?: string;
  tft4Fiora1Items?: string;
  tft4Fiora1Tier?: string;
  tft4Fiora2Items?: string;
  tft4Fiora2Tier?: string;
  tft4Fiora3Items?: string;
  tft4Fiora3Tier?: string;
  tft4FioraItems?: string;
  tft4FioraTier?: string;
  tft4Garen1Items?: string;
  tft4Garen1Tier?: string;
  tft4Garen2Items?: string;
  tft4Garen2Tier?: string;
  tft4Garen3Items?: string;
  tft4Garen3Tier?: string;
  tft4GarenItems?: string;
  tft4GarenTier?: string;
  tft4Hecarim1Items?: string;
  tft4Hecarim1Tier?: string;
  tft4Hecarim2Items?: string;
  tft4Hecarim2Tier?: string;
  tft4Hecarim3Items?: string;
  tft4Hecarim3Tier?: string;
  tft4HecarimItems?: string;
  tft4HecarimTier?: string;
  tft4Irelia1Items?: string;
  tft4Irelia1Tier?: string;
  tft4Irelia2Items?: string;
  tft4Irelia2Tier?: string;
  tft4Irelia3Items?: string;
  tft4Irelia3Tier?: string;
  tft4IreliaItems?: string;
  tft4IreliaTier?: string;
  tft4Janna1Items?: string;
  tft4Janna1Tier?: string;
  tft4Janna2Items?: string;
  tft4Janna2Tier?: string;
  tft4Janna3Items?: string;
  tft4Janna3Tier?: string;
  tft4JannaItems?: string;
  tft4JannaTier?: string;
  tft4JarvanIv1Items?: string;
  tft4JarvanIv1Tier?: string;
  tft4JarvanIv2Items?: string;
  tft4JarvanIv2Tier?: string;
  tft4JarvanIv3Items?: string;
  tft4JarvanIv3Tier?: string;
  tft4JarvanIvItems?: string;
  tft4JarvanIvTier?: string;
  tft4Jax1Items?: string;
  tft4Jax1Tier?: string;
  tft4Jax2Items?: string;
  tft4Jax2Tier?: string;
  tft4Jax3Items?: string;
  tft4Jax3Tier?: string;
  tft4JaxItems?: string;
  tft4JaxTier?: string;
  tft4Jhin1Items?: string;
  tft4Jhin1Tier?: string;
  tft4Jhin2Items?: string;
  tft4Jhin2Tier?: string;
  tft4Jhin3Items?: string;
  tft4Jhin3Tier?: string;
  tft4JhinItems?: string;
  tft4JhinTier?: string;
  tft4Jinx1Items?: string;
  tft4Jinx1Tier?: string;
  tft4Jinx2Items?: string;
  tft4Jinx2Tier?: string;
  tft4Jinx3Items?: string;
  tft4Jinx3Tier?: string;
  tft4JinxItems?: string;
  tft4JinxTier?: string;
  tft4Kalista1Items?: string;
  tft4Kalista1Tier?: string;
  tft4Kalista2Items?: string;
  tft4Kalista2Tier?: string;
  tft4Kalista3Items?: string;
  tft4Kalista3Tier?: string;
  tft4KalistaItems?: string;
  tft4KalistaTier?: string;
  tft4Katarina1Items?: string;
  tft4Katarina1Tier?: string;
  tft4Katarina2Items?: string;
  tft4Katarina2Tier?: string;
  tft4Katarina3Items?: string;
  tft4Katarina3Tier?: string;
  tft4KatarinaItems?: string;
  tft4KatarinaTier?: string;
  tft4Kayn1Items?: string;
  tft4Kayn1Tier?: string;
  tft4Kayn2Items?: string;
  tft4Kayn2Tier?: string;
  tft4Kayn3Items?: string;
  tft4Kayn3Tier?: string;
  tft4KaynItems?: string;
  tft4KaynTier?: string;
  tft4Kennen1Items?: string;
  tft4Kennen1Tier?: string;
  tft4Kennen2Items?: string;
  tft4Kennen2Tier?: string;
  tft4Kennen3Items?: string;
  tft4Kennen3Tier?: string;
  tft4KennenItems?: string;
  tft4KennenTier?: string;
  tft4Kindred1Items?: string;
  tft4Kindred1Tier?: string;
  tft4Kindred2Items?: string;
  tft4Kindred2Tier?: string;
  tft4Kindred3Items?: string;
  tft4Kindred3Tier?: string;
  tft4KindredItems?: string;
  tft4KindredTier?: string;
  tft4LeeSin1Items?: string;
  tft4LeeSin1Tier?: string;
  tft4LeeSin2Items?: string;
  tft4LeeSin2Tier?: string;
  tft4LeeSin3Items?: string;
  tft4LeeSin3Tier?: string;
  tft4LeeSinItems?: string;
  tft4LeeSinTier?: string;
  tft4Lillia1Items?: string;
  tft4Lillia1Tier?: string;
  tft4Lillia2Items?: string;
  tft4Lillia2Tier?: string;
  tft4Lillia3Items?: string;
  tft4Lillia3Tier?: string;
  tft4LilliaItems?: string;
  tft4LilliaTier?: string;
  tft4Lissandra1Items?: string;
  tft4Lissandra1Tier?: string;
  tft4Lissandra2Items?: string;
  tft4Lissandra2Tier?: string;
  tft4Lissandra3Items?: string;
  tft4Lissandra3Tier?: string;
  tft4LissandraItems?: string;
  tft4LissandraTier?: string;
  tft4Lulu1Items?: string;
  tft4Lulu1Tier?: string;
  tft4Lulu2Items?: string;
  tft4Lulu2Tier?: string;
  tft4Lulu3Items?: string;
  tft4Lulu3Tier?: string;
  tft4LuluItems?: string;
  tft4LuluTier?: string;
  tft4Lux1Items?: string;
  tft4Lux1Tier?: string;
  tft4Lux2Items?: string;
  tft4Lux2Tier?: string;
  tft4Lux3Items?: string;
  tft4Lux3Tier?: string;
  tft4LuxItems?: string;
  tft4LuxTier?: string;
  tft4Maokai1Items?: string;
  tft4Maokai1Tier?: string;
  tft4Maokai2Items?: string;
  tft4Maokai2Tier?: string;
  tft4Maokai3Items?: string;
  tft4Maokai3Tier?: string;
  tft4MaokaiItems?: string;
  tft4MaokaiTier?: string;
  tft4Morgana1Items?: string;
  tft4Morgana1Tier?: string;
  tft4Morgana2Items?: string;
  tft4Morgana2Tier?: string;
  tft4Morgana3Items?: string;
  tft4Morgana3Tier?: string;
  tft4MorganaItems?: string;
  tft4MorganaTier?: string;
  tft4Nami1Items?: string;
  tft4Nami1Tier?: string;
  tft4Nami2Items?: string;
  tft4Nami2Tier?: string;
  tft4Nami3Items?: string;
  tft4Nami3Tier?: string;
  tft4NamiItems?: string;
  tft4NamiTier?: string;
  tft4Nidalee1Items?: string;
  tft4Nidalee1Tier?: string;
  tft4Nidalee2Items?: string;
  tft4Nidalee2Tier?: string;
  tft4Nidalee3Items?: string;
  tft4Nidalee3Tier?: string;
  tft4NidaleeItems?: string;
  tft4NidaleeTier?: string;
  tft4Nunu1Items?: string;
  tft4Nunu1Tier?: string;
  tft4Nunu2Items?: string;
  tft4Nunu2Tier?: string;
  tft4Nunu3Items?: string;
  tft4Nunu3Tier?: string;
  tft4NunuItems?: string;
  tft4NunuTier?: string;
  tft4Pyke1Items?: string;
  tft4Pyke1Tier?: string;
  tft4Pyke2Items?: string;
  tft4Pyke2Tier?: string;
  tft4Pyke3Items?: string;
  tft4Pyke3Tier?: string;
  tft4PykeItems?: string;
  tft4PykeTier?: string;
  tft4Riven1Items?: string;
  tft4Riven1Tier?: string;
  tft4Riven2Items?: string;
  tft4Riven2Tier?: string;
  tft4Riven3Items?: string;
  tft4Riven3Tier?: string;
  tft4RivenItems?: string;
  tft4RivenTier?: string;
  tft4Sejuani1Items?: string;
  tft4Sejuani1Tier?: string;
  tft4Sejuani2Items?: string;
  tft4Sejuani2Tier?: string;
  tft4Sejuani3Items?: string;
  tft4Sejuani3Tier?: string;
  tft4SejuaniItems?: string;
  tft4SejuaniTier?: string;
  tft4Sett1Items?: string;
  tft4Sett1Tier?: string;
  tft4Sett2Items?: string;
  tft4Sett2Tier?: string;
  tft4Sett3Items?: string;
  tft4Sett3Tier?: string;
  tft4SettItems?: string;
  tft4SettTier?: string;
  tft4Shen1Items?: string;
  tft4Shen1Tier?: string;
  tft4Shen2Items?: string;
  tft4Shen2Tier?: string;
  tft4Shen3Items?: string;
  tft4Shen3Tier?: string;
  tft4ShenItems?: string;
  tft4ShenTier?: string;
  tft4Sylas1Items?: string;
  tft4Sylas1Tier?: string;
  tft4Sylas2Items?: string;
  tft4Sylas2Tier?: string;
  tft4Sylas3Items?: string;
  tft4Sylas3Tier?: string;
  tft4SylasItems?: string;
  tft4SylasTier?: string;
  tft4TahmKench1Items?: string;
  tft4TahmKench1Tier?: string;
  tft4TahmKench2Items?: string;
  tft4TahmKench2Tier?: string;
  tft4TahmKench3Items?: string;
  tft4TahmKench3Tier?: string;
  tft4TahmKenchItems?: string;
  tft4TahmKenchTier?: string;
  tft4Talon1Items?: string;
  tft4Talon1Tier?: string;
  tft4Talon2Items?: string;
  tft4Talon2Tier?: string;
  tft4Talon3Items?: string;
  tft4Talon3Tier?: string;
  tft4TalonItems?: string;
  tft4TalonTier?: string;
  tft4Teemo1Items?: string;
  tft4Teemo1Tier?: string;
  tft4Teemo2Items?: string;
  tft4Teemo2Tier?: string;
  tft4Teemo3Items?: string;
  tft4Teemo3Tier?: string;
  tft4TeemoItems?: string;
  tft4TeemoTier?: string;
  tft4Thresh1Items?: string;
  tft4Thresh1Tier?: string;
  tft4Thresh2Items?: string;
  tft4Thresh2Tier?: string;
  tft4Thresh3Items?: string;
  tft4Thresh3Tier?: string;
  tft4ThreshItems?: string;
  tft4ThreshTier?: string;
  tft4TwistedFate1Items?: string;
  tft4TwistedFate1Tier?: string;
  tft4TwistedFate2Items?: string;
  tft4TwistedFate2Tier?: string;
  tft4TwistedFate3Items?: string;
  tft4TwistedFate3Tier?: string;
  tft4TwistedFateItems?: string;
  tft4TwistedFateTier?: string;
  tft4Vayne1Items?: string;
  tft4Vayne1Tier?: string;
  tft4Vayne2Items?: string;
  tft4Vayne2Tier?: string;
  tft4Vayne3Items?: string;
  tft4Vayne3Tier?: string;
  tft4VayneItems?: string;
  tft4VayneTier?: string;
  tft4Veigar1Items?: string;
  tft4Veigar1Tier?: string;
  tft4Veigar2Items?: string;
  tft4Veigar2Tier?: string;
  tft4Veigar3Items?: string;
  tft4Veigar3Tier?: string;
  tft4VeigarItems?: string;
  tft4VeigarTier?: string;
  tft4Vi1Items?: string;
  tft4Vi1Tier?: string;
  tft4Vi2Items?: string;
  tft4Vi2Tier?: string;
  tft4Vi3Items?: string;
  tft4Vi3Tier?: string;
  tft4ViItems?: string;
  tft4ViTier?: string;
  tft4Warwick1Items?: string;
  tft4Warwick1Tier?: string;
  tft4Warwick2Items?: string;
  tft4Warwick2Tier?: string;
  tft4Warwick3Items?: string;
  tft4Warwick3Tier?: string;
  tft4WarwickItems?: string;
  tft4WarwickTier?: string;
  tft4Wukong1Items?: string;
  tft4Wukong1Tier?: string;
  tft4Wukong2Items?: string;
  tft4Wukong2Tier?: string;
  tft4Wukong3Items?: string;
  tft4Wukong3Tier?: string;
  tft4WukongItems?: string;
  tft4WukongTier?: string;
  tft4XinZhao1Items?: string;
  tft4XinZhao1Tier?: string;
  tft4XinZhao2Items?: string;
  tft4XinZhao2Tier?: string;
  tft4XinZhao3Items?: string;
  tft4XinZhao3Tier?: string;
  tft4XinZhaoItems?: string;
  tft4XinZhaoTier?: string;
  tft4Yasuo1Items?: string;
  tft4Yasuo1Tier?: string;
  tft4Yasuo2Items?: string;
  tft4Yasuo2Tier?: string;
  tft4Yasuo3Items?: string;
  tft4Yasuo3Tier?: string;
  tft4YasuoItems?: string;
  tft4YasuoTier?: string;
  tft4Yone1Items?: string;
  tft4Yone1Tier?: string;
  tft4Yone2Items?: string;
  tft4Yone2Tier?: string;
  tft4Yone3Items?: string;
  tft4Yone3Tier?: string;
  tft4YoneItems?: string;
  tft4YoneTier?: string;
  tft4Yuumi1Items?: string;
  tft4Yuumi1Tier?: string;
  tft4Yuumi2Items?: string;
  tft4Yuumi2Tier?: string;
  tft4Yuumi3Items?: string;
  tft4Yuumi3Tier?: string;
  tft4YuumiItems?: string;
  tft4YuumiTier?: string;
  tft4Zed1Items?: string;
  tft4Zed1Tier?: string;
  tft4Zed2Items?: string;
  tft4Zed2Tier?: string;
  tft4Zed3Items?: string;
  tft4Zed3Tier?: string;
  tft4ZedItems?: string;
  tft4ZedTier?: string;
  tft4Zilean1Items?: string;
  tft4Zilean1Tier?: string;
  tft4Zilean2Items?: string;
  tft4Zilean2Tier?: string;
  tft4Zilean3Items?: string;
  tft4Zilean3Tier?: string;
  tft4ZileanItems?: string;
  tft4ZileanTier?: string;
  warlordNumUnits?: number;
  warlordTierCurrent?: number;
  warlordTierTotal?: number;

  static initModel(sequelize: Sequelize) {
    RawSet4.init({
    puuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    summonerName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goldLeft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'gold_left'
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastRound: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'last_round'
    },
    placement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    playersEliminated: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'players_eliminated'
    },
    timeEliminated: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'time_eliminated'
    },
    totalDamageToPlayers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'total_damage_to_players'
    },
    chosenTrait: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'chosen_trait'
    },
    chosenUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'chosen_unit'
    },
    matchId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'match_id'
    },
    tftSetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tft_set_number'
    },
    gameVersion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'game_version'
    },
    bossNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Boss_num_units'
    },
    bossTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Boss_tier_current'
    },
    bossTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Boss_tier_total'
    },
    cultistNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Cultist_num_units'
    },
    cultistTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Cultist_tier_current'
    },
    cultistTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Cultist_tier_total'
    },
    divineNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Divine_num_units'
    },
    divineTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Divine_tier_current'
    },
    divineTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Divine_tier_total'
    },
    duelistNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Duelist_num_units'
    },
    duelistTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Duelist_tier_current'
    },
    duelistTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Duelist_tier_total'
    },
    duskNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Dusk_num_units'
    },
    duskTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Dusk_tier_current'
    },
    duskTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Dusk_tier_total'
    },
    emperorNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Emperor_num_units'
    },
    emperorTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Emperor_tier_current'
    },
    emperorTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Emperor_tier_total'
    },
    fortuneNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Fortune_num_units'
    },
    fortuneTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Fortune_tier_current'
    },
    fortuneTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Fortune_tier_total'
    },
    hunterNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Hunter_num_units'
    },
    hunterTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Hunter_tier_current'
    },
    hunterTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Hunter_tier_total'
    },
    keeperNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Keeper_num_units'
    },
    keeperTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Keeper_tier_current'
    },
    keeperTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Keeper_tier_total'
    },
    moonlightNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Moonlight_num_units'
    },
    moonlightTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Moonlight_tier_current'
    },
    moonlightTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Moonlight_tier_total'
    },
    set4AdeptNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Adept_num_units'
    },
    set4AdeptTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Adept_tier_current'
    },
    set4AdeptTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Adept_tier_total'
    },
    set4AssassinNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Assassin_num_units'
    },
    set4AssassinTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Assassin_tier_current'
    },
    set4AssassinTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Assassin_tier_total'
    },
    set4BrawlerNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Brawler_num_units'
    },
    set4BrawlerTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Brawler_tier_current'
    },
    set4BrawlerTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Brawler_tier_total'
    },
    set4DazzlerNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Dazzler_num_units'
    },
    set4DazzlerTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Dazzler_tier_current'
    },
    set4DazzlerTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Dazzler_tier_total'
    },
    set4ElderwoodNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Elderwood_num_units'
    },
    set4ElderwoodTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Elderwood_tier_current'
    },
    set4ElderwoodTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Elderwood_tier_total'
    },
    set4EnlightenedNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Enlightened_num_units'
    },
    set4EnlightenedTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Enlightened_tier_current'
    },
    set4EnlightenedTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Enlightened_tier_total'
    },
    set4ExileNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Exile_num_units'
    },
    set4ExileTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Exile_tier_current'
    },
    set4ExileTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Exile_tier_total'
    },
    set4MageNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mage_num_units'
    },
    set4MageTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mage_tier_current'
    },
    set4MageTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mage_tier_total'
    },
    set4MysticNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mystic_num_units'
    },
    set4MysticTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mystic_tier_current'
    },
    set4MysticTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Mystic_tier_total'
    },
    set4NinjaNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Ninja_num_units'
    },
    set4NinjaTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Ninja_tier_current'
    },
    set4NinjaTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Ninja_tier_total'
    },
    set4ShadeNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Shade_num_units'
    },
    set4ShadeTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Shade_tier_current'
    },
    set4ShadeTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Shade_tier_total'
    },
    set4SpiritNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Spirit_num_units'
    },
    set4SpiritTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Spirit_tier_current'
    },
    set4SpiritTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Spirit_tier_total'
    },
    set4TormentedNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Tormented_num_units'
    },
    set4TormentedTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Tormented_tier_current'
    },
    set4TormentedTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Tormented_tier_total'
    },
    set4VanguardNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Vanguard_num_units'
    },
    set4VanguardTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Vanguard_tier_current'
    },
    set4VanguardTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Set4_Vanguard_tier_total'
    },
    sharpshooterNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Sharpshooter_num_units'
    },
    sharpshooterTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Sharpshooter_tier_current'
    },
    sharpshooterTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Sharpshooter_tier_total'
    },
    tft4Aatrox1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.1_items'
    },
    tft4Aatrox1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.1_tier'
    },
    tft4Aatrox2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.2_items'
    },
    tft4Aatrox2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.2_tier'
    },
    tft4Aatrox3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.3_items'
    },
    tft4Aatrox3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox.3_tier'
    },
    tft4AatroxItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox_items'
    },
    tft4AatroxTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aatrox_tier'
    },
    tft4Ahri1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.1_items'
    },
    tft4Ahri1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.1_tier'
    },
    tft4Ahri2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.2_items'
    },
    tft4Ahri2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.2_tier'
    },
    tft4Ahri3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.3_items'
    },
    tft4Ahri3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri.3_tier'
    },
    tft4AhriItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri_items'
    },
    tft4AhriTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ahri_tier'
    },
    tft4Akali1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.1_items'
    },
    tft4Akali1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.1_tier'
    },
    tft4Akali2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.2_items'
    },
    tft4Akali2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.2_tier'
    },
    tft4Akali3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.3_items'
    },
    tft4Akali3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali.3_tier'
    },
    tft4AkaliItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali_items'
    },
    tft4AkaliTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Akali_tier'
    },
    tft4Annie1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.1_items'
    },
    tft4Annie1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.1_tier'
    },
    tft4Annie2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.2_items'
    },
    tft4Annie2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.2_tier'
    },
    tft4Annie3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.3_items'
    },
    tft4Annie3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie.3_tier'
    },
    tft4AnnieItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie_items'
    },
    tft4AnnieTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Annie_tier'
    },
    tft4Aphelios1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.1_items'
    },
    tft4Aphelios1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.1_tier'
    },
    tft4Aphelios2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.2_items'
    },
    tft4Aphelios2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.2_tier'
    },
    tft4Aphelios3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.3_items'
    },
    tft4Aphelios3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios.3_tier'
    },
    tft4ApheliosItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios_items'
    },
    tft4ApheliosTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Aphelios_tier'
    },
    tft4Ashe1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.1_items'
    },
    tft4Ashe1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.1_tier'
    },
    tft4Ashe2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.2_items'
    },
    tft4Ashe2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.2_tier'
    },
    tft4Ashe3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.3_items'
    },
    tft4Ashe3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe.3_tier'
    },
    tft4AsheItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe_items'
    },
    tft4AsheTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ashe_tier'
    },
    tft4Azir1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.1_items'
    },
    tft4Azir1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.1_tier'
    },
    tft4Azir2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.2_items'
    },
    tft4Azir2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.2_tier'
    },
    tft4Azir3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.3_items'
    },
    tft4Azir3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir.3_tier'
    },
    tft4AzirItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir_items'
    },
    tft4AzirTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Azir_tier'
    },
    tft4Cassiopeia1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.1_items'
    },
    tft4Cassiopeia1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.1_tier'
    },
    tft4Cassiopeia2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.2_items'
    },
    tft4Cassiopeia2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.2_tier'
    },
    tft4Cassiopeia3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.3_items'
    },
    tft4Cassiopeia3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia.3_tier'
    },
    tft4CassiopeiaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia_items'
    },
    tft4CassiopeiaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Cassiopeia_tier'
    },
    tft4Diana1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.1_items'
    },
    tft4Diana1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.1_tier'
    },
    tft4Diana2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.2_items'
    },
    tft4Diana2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.2_tier'
    },
    tft4Diana3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.3_items'
    },
    tft4Diana3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana.3_tier'
    },
    tft4DianaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana_items'
    },
    tft4DianaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Diana_tier'
    },
    tft4Elise1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.1_items'
    },
    tft4Elise1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.1_tier'
    },
    tft4Elise2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.2_items'
    },
    tft4Elise2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.2_tier'
    },
    tft4Elise3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.3_items'
    },
    tft4Elise3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise.3_tier'
    },
    tft4EliseItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise_items'
    },
    tft4EliseTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Elise_tier'
    },
    tft4Evelynn1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.1_items'
    },
    tft4Evelynn1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.1_tier'
    },
    tft4Evelynn2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.2_items'
    },
    tft4Evelynn2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.2_tier'
    },
    tft4Evelynn3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.3_items'
    },
    tft4Evelynn3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn.3_tier'
    },
    tft4EvelynnItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn_items'
    },
    tft4EvelynnTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Evelynn_tier'
    },
    tft4Ezreal1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.1_items'
    },
    tft4Ezreal1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.1_tier'
    },
    tft4Ezreal2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.2_items'
    },
    tft4Ezreal2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.2_tier'
    },
    tft4Ezreal3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.3_items'
    },
    tft4Ezreal3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal.3_tier'
    },
    tft4EzrealItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal_items'
    },
    tft4EzrealTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Ezreal_tier'
    },
    tft4Fiora1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.1_items'
    },
    tft4Fiora1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.1_tier'
    },
    tft4Fiora2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.2_items'
    },
    tft4Fiora2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.2_tier'
    },
    tft4Fiora3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.3_items'
    },
    tft4Fiora3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora.3_tier'
    },
    tft4FioraItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora_items'
    },
    tft4FioraTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Fiora_tier'
    },
    tft4Garen1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.1_items'
    },
    tft4Garen1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.1_tier'
    },
    tft4Garen2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.2_items'
    },
    tft4Garen2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.2_tier'
    },
    tft4Garen3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.3_items'
    },
    tft4Garen3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen.3_tier'
    },
    tft4GarenItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen_items'
    },
    tft4GarenTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Garen_tier'
    },
    tft4Hecarim1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.1_items'
    },
    tft4Hecarim1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.1_tier'
    },
    tft4Hecarim2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.2_items'
    },
    tft4Hecarim2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.2_tier'
    },
    tft4Hecarim3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.3_items'
    },
    tft4Hecarim3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim.3_tier'
    },
    tft4HecarimItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim_items'
    },
    tft4HecarimTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Hecarim_tier'
    },
    tft4Irelia1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.1_items'
    },
    tft4Irelia1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.1_tier'
    },
    tft4Irelia2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.2_items'
    },
    tft4Irelia2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.2_tier'
    },
    tft4Irelia3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.3_items'
    },
    tft4Irelia3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia.3_tier'
    },
    tft4IreliaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia_items'
    },
    tft4IreliaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Irelia_tier'
    },
    tft4Janna1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.1_items'
    },
    tft4Janna1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.1_tier'
    },
    tft4Janna2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.2_items'
    },
    tft4Janna2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.2_tier'
    },
    tft4Janna3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.3_items'
    },
    tft4Janna3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna.3_tier'
    },
    tft4JannaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna_items'
    },
    tft4JannaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Janna_tier'
    },
    tft4JarvanIv1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.1_items'
    },
    tft4JarvanIv1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.1_tier'
    },
    tft4JarvanIv2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.2_items'
    },
    tft4JarvanIv2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.2_tier'
    },
    tft4JarvanIv3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.3_items'
    },
    tft4JarvanIv3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV.3_tier'
    },
    tft4JarvanIvItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV_items'
    },
    tft4JarvanIvTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_JarvanIV_tier'
    },
    tft4Jax1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.1_items'
    },
    tft4Jax1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.1_tier'
    },
    tft4Jax2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.2_items'
    },
    tft4Jax2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.2_tier'
    },
    tft4Jax3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.3_items'
    },
    tft4Jax3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax.3_tier'
    },
    tft4JaxItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax_items'
    },
    tft4JaxTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jax_tier'
    },
    tft4Jhin1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.1_items'
    },
    tft4Jhin1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.1_tier'
    },
    tft4Jhin2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.2_items'
    },
    tft4Jhin2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.2_tier'
    },
    tft4Jhin3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.3_items'
    },
    tft4Jhin3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin.3_tier'
    },
    tft4JhinItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin_items'
    },
    tft4JhinTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jhin_tier'
    },
    tft4Jinx1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.1_items'
    },
    tft4Jinx1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.1_tier'
    },
    tft4Jinx2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.2_items'
    },
    tft4Jinx2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.2_tier'
    },
    tft4Jinx3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.3_items'
    },
    tft4Jinx3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx.3_tier'
    },
    tft4JinxItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx_items'
    },
    tft4JinxTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Jinx_tier'
    },
    tft4Kalista1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.1_items'
    },
    tft4Kalista1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.1_tier'
    },
    tft4Kalista2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.2_items'
    },
    tft4Kalista2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.2_tier'
    },
    tft4Kalista3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.3_items'
    },
    tft4Kalista3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista.3_tier'
    },
    tft4KalistaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista_items'
    },
    tft4KalistaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kalista_tier'
    },
    tft4Katarina1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.1_items'
    },
    tft4Katarina1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.1_tier'
    },
    tft4Katarina2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.2_items'
    },
    tft4Katarina2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.2_tier'
    },
    tft4Katarina3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.3_items'
    },
    tft4Katarina3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina.3_tier'
    },
    tft4KatarinaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina_items'
    },
    tft4KatarinaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Katarina_tier'
    },
    tft4Kayn1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.1_items'
    },
    tft4Kayn1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.1_tier'
    },
    tft4Kayn2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.2_items'
    },
    tft4Kayn2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.2_tier'
    },
    tft4Kayn3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.3_items'
    },
    tft4Kayn3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn.3_tier'
    },
    tft4KaynItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn_items'
    },
    tft4KaynTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kayn_tier'
    },
    tft4Kennen1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.1_items'
    },
    tft4Kennen1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.1_tier'
    },
    tft4Kennen2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.2_items'
    },
    tft4Kennen2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.2_tier'
    },
    tft4Kennen3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.3_items'
    },
    tft4Kennen3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen.3_tier'
    },
    tft4KennenItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen_items'
    },
    tft4KennenTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kennen_tier'
    },
    tft4Kindred1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.1_items'
    },
    tft4Kindred1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.1_tier'
    },
    tft4Kindred2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.2_items'
    },
    tft4Kindred2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.2_tier'
    },
    tft4Kindred3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.3_items'
    },
    tft4Kindred3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred.3_tier'
    },
    tft4KindredItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred_items'
    },
    tft4KindredTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Kindred_tier'
    },
    tft4LeeSin1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.1_items'
    },
    tft4LeeSin1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.1_tier'
    },
    tft4LeeSin2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.2_items'
    },
    tft4LeeSin2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.2_tier'
    },
    tft4LeeSin3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.3_items'
    },
    tft4LeeSin3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin.3_tier'
    },
    tft4LeeSinItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin_items'
    },
    tft4LeeSinTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_LeeSin_tier'
    },
    tft4Lillia1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.1_items'
    },
    tft4Lillia1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.1_tier'
    },
    tft4Lillia2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.2_items'
    },
    tft4Lillia2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.2_tier'
    },
    tft4Lillia3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.3_items'
    },
    tft4Lillia3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia.3_tier'
    },
    tft4LilliaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia_items'
    },
    tft4LilliaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lillia_tier'
    },
    tft4Lissandra1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.1_items'
    },
    tft4Lissandra1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.1_tier'
    },
    tft4Lissandra2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.2_items'
    },
    tft4Lissandra2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.2_tier'
    },
    tft4Lissandra3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.3_items'
    },
    tft4Lissandra3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra.3_tier'
    },
    tft4LissandraItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra_items'
    },
    tft4LissandraTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lissandra_tier'
    },
    tft4Lulu1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.1_items'
    },
    tft4Lulu1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.1_tier'
    },
    tft4Lulu2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.2_items'
    },
    tft4Lulu2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.2_tier'
    },
    tft4Lulu3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.3_items'
    },
    tft4Lulu3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu.3_tier'
    },
    tft4LuluItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu_items'
    },
    tft4LuluTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lulu_tier'
    },
    tft4Lux1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.1_items'
    },
    tft4Lux1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.1_tier'
    },
    tft4Lux2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.2_items'
    },
    tft4Lux2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.2_tier'
    },
    tft4Lux3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.3_items'
    },
    tft4Lux3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux.3_tier'
    },
    tft4LuxItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux_items'
    },
    tft4LuxTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Lux_tier'
    },
    tft4Maokai1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.1_items'
    },
    tft4Maokai1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.1_tier'
    },
    tft4Maokai2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.2_items'
    },
    tft4Maokai2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.2_tier'
    },
    tft4Maokai3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.3_items'
    },
    tft4Maokai3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai.3_tier'
    },
    tft4MaokaiItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai_items'
    },
    tft4MaokaiTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Maokai_tier'
    },
    tft4Morgana1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.1_items'
    },
    tft4Morgana1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.1_tier'
    },
    tft4Morgana2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.2_items'
    },
    tft4Morgana2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.2_tier'
    },
    tft4Morgana3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.3_items'
    },
    tft4Morgana3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana.3_tier'
    },
    tft4MorganaItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana_items'
    },
    tft4MorganaTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Morgana_tier'
    },
    tft4Nami1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.1_items'
    },
    tft4Nami1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.1_tier'
    },
    tft4Nami2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.2_items'
    },
    tft4Nami2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.2_tier'
    },
    tft4Nami3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.3_items'
    },
    tft4Nami3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami.3_tier'
    },
    tft4NamiItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami_items'
    },
    tft4NamiTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nami_tier'
    },
    tft4Nidalee1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.1_items'
    },
    tft4Nidalee1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.1_tier'
    },
    tft4Nidalee2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.2_items'
    },
    tft4Nidalee2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.2_tier'
    },
    tft4Nidalee3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.3_items'
    },
    tft4Nidalee3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee.3_tier'
    },
    tft4NidaleeItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee_items'
    },
    tft4NidaleeTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nidalee_tier'
    },
    tft4Nunu1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.1_items'
    },
    tft4Nunu1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.1_tier'
    },
    tft4Nunu2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.2_items'
    },
    tft4Nunu2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.2_tier'
    },
    tft4Nunu3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.3_items'
    },
    tft4Nunu3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu.3_tier'
    },
    tft4NunuItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu_items'
    },
    tft4NunuTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Nunu_tier'
    },
    tft4Pyke1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.1_items'
    },
    tft4Pyke1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.1_tier'
    },
    tft4Pyke2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.2_items'
    },
    tft4Pyke2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.2_tier'
    },
    tft4Pyke3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.3_items'
    },
    tft4Pyke3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke.3_tier'
    },
    tft4PykeItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke_items'
    },
    tft4PykeTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Pyke_tier'
    },
    tft4Riven1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.1_items'
    },
    tft4Riven1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.1_tier'
    },
    tft4Riven2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.2_items'
    },
    tft4Riven2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.2_tier'
    },
    tft4Riven3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.3_items'
    },
    tft4Riven3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven.3_tier'
    },
    tft4RivenItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven_items'
    },
    tft4RivenTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Riven_tier'
    },
    tft4Sejuani1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.1_items'
    },
    tft4Sejuani1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.1_tier'
    },
    tft4Sejuani2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.2_items'
    },
    tft4Sejuani2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.2_tier'
    },
    tft4Sejuani3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.3_items'
    },
    tft4Sejuani3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani.3_tier'
    },
    tft4SejuaniItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani_items'
    },
    tft4SejuaniTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sejuani_tier'
    },
    tft4Sett1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.1_items'
    },
    tft4Sett1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.1_tier'
    },
    tft4Sett2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.2_items'
    },
    tft4Sett2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.2_tier'
    },
    tft4Sett3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.3_items'
    },
    tft4Sett3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett.3_tier'
    },
    tft4SettItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett_items'
    },
    tft4SettTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sett_tier'
    },
    tft4Shen1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.1_items'
    },
    tft4Shen1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.1_tier'
    },
    tft4Shen2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.2_items'
    },
    tft4Shen2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.2_tier'
    },
    tft4Shen3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.3_items'
    },
    tft4Shen3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen.3_tier'
    },
    tft4ShenItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen_items'
    },
    tft4ShenTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Shen_tier'
    },
    tft4Sylas1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.1_items'
    },
    tft4Sylas1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.1_tier'
    },
    tft4Sylas2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.2_items'
    },
    tft4Sylas2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.2_tier'
    },
    tft4Sylas3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.3_items'
    },
    tft4Sylas3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas.3_tier'
    },
    tft4SylasItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas_items'
    },
    tft4SylasTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Sylas_tier'
    },
    tft4TahmKench1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.1_items'
    },
    tft4TahmKench1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.1_tier'
    },
    tft4TahmKench2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.2_items'
    },
    tft4TahmKench2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.2_tier'
    },
    tft4TahmKench3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.3_items'
    },
    tft4TahmKench3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench.3_tier'
    },
    tft4TahmKenchItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench_items'
    },
    tft4TahmKenchTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TahmKench_tier'
    },
    tft4Talon1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.1_items'
    },
    tft4Talon1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.1_tier'
    },
    tft4Talon2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.2_items'
    },
    tft4Talon2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.2_tier'
    },
    tft4Talon3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.3_items'
    },
    tft4Talon3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon.3_tier'
    },
    tft4TalonItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon_items'
    },
    tft4TalonTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Talon_tier'
    },
    tft4Teemo1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.1_items'
    },
    tft4Teemo1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.1_tier'
    },
    tft4Teemo2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.2_items'
    },
    tft4Teemo2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.2_tier'
    },
    tft4Teemo3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.3_items'
    },
    tft4Teemo3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo.3_tier'
    },
    tft4TeemoItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo_items'
    },
    tft4TeemoTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Teemo_tier'
    },
    tft4Thresh1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.1_items'
    },
    tft4Thresh1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.1_tier'
    },
    tft4Thresh2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.2_items'
    },
    tft4Thresh2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.2_tier'
    },
    tft4Thresh3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.3_items'
    },
    tft4Thresh3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh.3_tier'
    },
    tft4ThreshItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh_items'
    },
    tft4ThreshTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Thresh_tier'
    },
    tft4TwistedFate1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.1_items'
    },
    tft4TwistedFate1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.1_tier'
    },
    tft4TwistedFate2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.2_items'
    },
    tft4TwistedFate2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.2_tier'
    },
    tft4TwistedFate3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.3_items'
    },
    tft4TwistedFate3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate.3_tier'
    },
    tft4TwistedFateItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate_items'
    },
    tft4TwistedFateTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_TwistedFate_tier'
    },
    tft4Vayne1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.1_items'
    },
    tft4Vayne1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.1_tier'
    },
    tft4Vayne2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.2_items'
    },
    tft4Vayne2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.2_tier'
    },
    tft4Vayne3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.3_items'
    },
    tft4Vayne3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne.3_tier'
    },
    tft4VayneItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne_items'
    },
    tft4VayneTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vayne_tier'
    },
    tft4Veigar1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.1_items'
    },
    tft4Veigar1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.1_tier'
    },
    tft4Veigar2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.2_items'
    },
    tft4Veigar2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.2_tier'
    },
    tft4Veigar3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.3_items'
    },
    tft4Veigar3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar.3_tier'
    },
    tft4VeigarItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar_items'
    },
    tft4VeigarTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Veigar_tier'
    },
    tft4Vi1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.1_items'
    },
    tft4Vi1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.1_tier'
    },
    tft4Vi2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.2_items'
    },
    tft4Vi2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.2_tier'
    },
    tft4Vi3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.3_items'
    },
    tft4Vi3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi.3_tier'
    },
    tft4ViItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi_items'
    },
    tft4ViTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Vi_tier'
    },
    tft4Warwick1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.1_items'
    },
    tft4Warwick1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.1_tier'
    },
    tft4Warwick2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.2_items'
    },
    tft4Warwick2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.2_tier'
    },
    tft4Warwick3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.3_items'
    },
    tft4Warwick3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick.3_tier'
    },
    tft4WarwickItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick_items'
    },
    tft4WarwickTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Warwick_tier'
    },
    tft4Wukong1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.1_items'
    },
    tft4Wukong1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.1_tier'
    },
    tft4Wukong2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.2_items'
    },
    tft4Wukong2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.2_tier'
    },
    tft4Wukong3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.3_items'
    },
    tft4Wukong3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong.3_tier'
    },
    tft4WukongItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong_items'
    },
    tft4WukongTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Wukong_tier'
    },
    tft4XinZhao1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.1_items'
    },
    tft4XinZhao1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.1_tier'
    },
    tft4XinZhao2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.2_items'
    },
    tft4XinZhao2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.2_tier'
    },
    tft4XinZhao3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.3_items'
    },
    tft4XinZhao3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao.3_tier'
    },
    tft4XinZhaoItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao_items'
    },
    tft4XinZhaoTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_XinZhao_tier'
    },
    tft4Yasuo1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.1_items'
    },
    tft4Yasuo1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.1_tier'
    },
    tft4Yasuo2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.2_items'
    },
    tft4Yasuo2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.2_tier'
    },
    tft4Yasuo3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.3_items'
    },
    tft4Yasuo3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo.3_tier'
    },
    tft4YasuoItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo_items'
    },
    tft4YasuoTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yasuo_tier'
    },
    tft4Yone1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.1_items'
    },
    tft4Yone1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.1_tier'
    },
    tft4Yone2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.2_items'
    },
    tft4Yone2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.2_tier'
    },
    tft4Yone3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.3_items'
    },
    tft4Yone3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone.3_tier'
    },
    tft4YoneItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone_items'
    },
    tft4YoneTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yone_tier'
    },
    tft4Yuumi1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.1_items'
    },
    tft4Yuumi1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.1_tier'
    },
    tft4Yuumi2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.2_items'
    },
    tft4Yuumi2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.2_tier'
    },
    tft4Yuumi3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.3_items'
    },
    tft4Yuumi3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi.3_tier'
    },
    tft4YuumiItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi_items'
    },
    tft4YuumiTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Yuumi_tier'
    },
    tft4Zed1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.1_items'
    },
    tft4Zed1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.1_tier'
    },
    tft4Zed2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.2_items'
    },
    tft4Zed2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.2_tier'
    },
    tft4Zed3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.3_items'
    },
    tft4Zed3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed.3_tier'
    },
    tft4ZedItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed_items'
    },
    tft4ZedTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zed_tier'
    },
    tft4Zilean1Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.1_items'
    },
    tft4Zilean1Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.1_tier'
    },
    tft4Zilean2Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.2_items'
    },
    tft4Zilean2Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.2_tier'
    },
    tft4Zilean3Items: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.3_items'
    },
    tft4Zilean3Tier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean.3_tier'
    },
    tft4ZileanItems: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean_items'
    },
    tft4ZileanTier: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'TFT4_Zilean_tier'
    },
    warlordNumUnits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Warlord_num_units'
    },
    warlordTierCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Warlord_tier_current'
    },
    warlordTierTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Warlord_tier_total'
    }
  }, {
    sequelize,
    tableName: 'raw_set4',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "raw_set4_pkey",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  return RawSet4;
  }
}
