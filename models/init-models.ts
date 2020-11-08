import { Sequelize } from "sequelize";
import { AssetChampions, AssetChampionsAttributes } from "./AssetChampions";
import { AssetItems, AssetItemsAttributes } from "./AssetItems";
import { AssetTraits, AssetTraitsAttributes } from "./AssetTraits";
import { IndexMatches, IndexMatchesAttributes } from "./IndexMatches";
import { IndexSummoners, IndexSummonersAttributes } from "./IndexSummoners";
import { ProcessedMatches, ProcessedMatchesAttributes } from "./ProcessedMatches";
import { ProcessedTraits, ProcessedTraitsAttributes } from "./ProcessedTraits";
import { ProcessedUnits, ProcessedUnitsAttributes } from "./ProcessedUnits";
import { RawMatches, RawMatchesAttributes } from "./RawMatches";
import { RawSet4, RawSet4Attributes } from "./RawSet4";
import { RawSummoners, RawSummonersAttributes } from "./RawSummoners";
import { TftElo, TftEloAttributes } from "./TftElo";
import { TftItem, TftItemAttributes } from "./TftItem";
import { TftMatch, TftMatchAttributes } from "./TftMatch";
import { TftParticipant, TftParticipantAttributes } from "./TftParticipant";
import { TftParticipantElo, TftParticipantEloAttributes } from "./TftParticipantElo";
import { TftParticipantLink, TftParticipantLinkAttributes } from "./TftParticipantLink";
import { TftParticipantTrait, TftParticipantTraitAttributes } from "./TftParticipantTrait";
import { TftParticipantUnit, TftParticipantUnitAttributes } from "./TftParticipantUnit";
import { TftParticipantUnitItem, TftParticipantUnitItemAttributes } from "./TftParticipantUnitItem";
import { TftSummoner, TftSummonerAttributes } from "./TftSummoner";
import { TftSummonerElo, TftSummonerEloAttributes } from "./TftSummonerElo";
import { TftTrait, TftTraitAttributes } from "./TftTrait";
import { TftUnit, TftUnitAttributes } from "./TftUnit";

export {
  AssetChampions, AssetChampionsAttributes,
  AssetItems, AssetItemsAttributes,
  AssetTraits, AssetTraitsAttributes,
  IndexMatches, IndexMatchesAttributes,
  IndexSummoners, IndexSummonersAttributes,
  ProcessedMatches, ProcessedMatchesAttributes,
  ProcessedTraits, ProcessedTraitsAttributes,
  ProcessedUnits, ProcessedUnitsAttributes,
  RawMatches, RawMatchesAttributes,
  RawSet4, RawSet4Attributes,
  RawSummoners, RawSummonersAttributes,
  TftElo, TftEloAttributes,
  TftItem, TftItemAttributes,
  TftMatch, TftMatchAttributes,
  TftParticipant, TftParticipantAttributes,
  TftParticipantElo, TftParticipantEloAttributes,
  TftParticipantLink, TftParticipantLinkAttributes,
  TftParticipantTrait, TftParticipantTraitAttributes,
  TftParticipantUnit, TftParticipantUnitAttributes,
  TftParticipantUnitItem, TftParticipantUnitItemAttributes,
  TftSummoner, TftSummonerAttributes,
  TftSummonerElo, TftSummonerEloAttributes,
  TftTrait, TftTraitAttributes,
  TftUnit, TftUnitAttributes,
};

export function initModels(sequelize: Sequelize) {
  AssetChampions.initModel(sequelize);
  AssetItems.initModel(sequelize);
  AssetTraits.initModel(sequelize);
  IndexMatches.initModel(sequelize);
  IndexSummoners.initModel(sequelize);
  ProcessedMatches.initModel(sequelize);
  ProcessedTraits.initModel(sequelize);
  ProcessedUnits.initModel(sequelize);
  RawMatches.initModel(sequelize);
  RawSet4.initModel(sequelize);
  RawSummoners.initModel(sequelize);
  TftElo.initModel(sequelize);
  TftItem.initModel(sequelize);
  TftMatch.initModel(sequelize);
  TftParticipant.initModel(sequelize);
  TftParticipantElo.initModel(sequelize);
  TftParticipantLink.initModel(sequelize);
  TftParticipantTrait.initModel(sequelize);
  TftParticipantUnit.initModel(sequelize);
  TftParticipantUnitItem.initModel(sequelize);
  TftSummoner.initModel(sequelize);
  TftSummonerElo.initModel(sequelize);
  TftTrait.initModel(sequelize);
  TftUnit.initModel(sequelize);

  TftParticipantElo.belongsTo(TftElo, { foreignKey: "tftEloId"});
  TftElo.hasMany(TftParticipantElo, { foreignKey: "tftEloId"});
  TftParticipantElo.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasMany(TftParticipantElo, { foreignKey: "tftParticipantId"});
  TftParticipantLink.belongsTo(TftMatch, { foreignKey: "tftMatchId"});
  TftMatch.hasMany(TftParticipantLink, { foreignKey: "tftMatchId"});
  TftParticipantLink.belongsTo(TftSummoner, { foreignKey: "tftSummonerId"});
  TftSummoner.hasOne(TftParticipantLink, { foreignKey: "tftSummonerId"});
  TftParticipantLink.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasOne(TftParticipantLink, { foreignKey: "tftParticipantId"});
  TftParticipantTrait.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasMany(TftParticipantTrait, { foreignKey: "tftParticipantId"});
  TftParticipantUnit.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasMany(TftParticipantUnit, { foreignKey: "tftParticipantId"});
  TftParticipantUnitItem.belongsTo(TftItem, { foreignKey: "tftItemId"});
  TftItem.hasMany(TftParticipantUnitItem, { foreignKey: "tftItemId"});
  TftParticipantUnitItem.belongsTo(TftParticipantUnit, { foreignKey: "tftParticipantUnitId"});
  TftParticipantUnit.hasMany(TftParticipantUnitItem, { foreignKey: "tftParticipantUnitId"});
  TftSummonerElo.belongsTo(TftElo, { foreignKey: "tftEloId"});
  TftElo.hasMany(TftSummonerElo, { foreignKey: "tftEloId"});
  TftSummonerElo.belongsTo(TftSummoner, { foreignKey: "tftSummonerId"});
  TftSummoner.hasMany(TftSummonerElo, { foreignKey: "tftSummonerId"});

  return {
    AssetChampions,
    AssetItems,
    AssetTraits,
    IndexMatches,
    IndexSummoners,
    ProcessedMatches,
    ProcessedTraits,
    ProcessedUnits,
    RawMatches,
    RawSet4,
    RawSummoners,
    TftElo,
    TftItem,
    TftMatch,
    TftParticipant,
    TftParticipantElo,
    TftParticipantLink,
    TftParticipantTrait,
    TftParticipantUnit,
    TftParticipantUnitItem,
    TftSummoner,
    TftSummonerElo,
    TftTrait,
    TftUnit,
  };
}
