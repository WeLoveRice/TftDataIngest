import { Sequelize } from "sequelize";
import { AssetChampions, AssetChampionsAttributes } from "./AssetChampions";
import { AssetItems, AssetItemsAttributes } from "./AssetItems";
import { AssetTraits, AssetTraitsAttributes } from "./AssetTraits";
import { IndexMatches, IndexMatchesAttributes } from "./IndexMatches";
import { ProcessedMatches, ProcessedMatchesAttributes } from "./ProcessedMatches";
import { ProcessedTraits, ProcessedTraitsAttributes } from "./ProcessedTraits";
import { ProcessedUnits, ProcessedUnitsAttributes } from "./ProcessedUnits";
import { RawSet4, RawSet4Attributes } from "./RawSet4";
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
import { TftTrait, TftTraitAttributes } from "./TftTrait";
import { TftUnit, TftUnitAttributes } from "./TftUnit";

export {
  AssetChampions, AssetChampionsAttributes,
  AssetItems, AssetItemsAttributes,
  AssetTraits, AssetTraitsAttributes,
  IndexMatches, IndexMatchesAttributes,
  ProcessedMatches, ProcessedMatchesAttributes,
  ProcessedTraits, ProcessedTraitsAttributes,
  ProcessedUnits, ProcessedUnitsAttributes,
  RawSet4, RawSet4Attributes,
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
  TftTrait, TftTraitAttributes,
  TftUnit, TftUnitAttributes,
};

export function initModels(sequelize: Sequelize) {
  AssetChampions.initModel(sequelize);
  AssetItems.initModel(sequelize);
  AssetTraits.initModel(sequelize);
  IndexMatches.initModel(sequelize);
  ProcessedMatches.initModel(sequelize);
  ProcessedTraits.initModel(sequelize);
  ProcessedUnits.initModel(sequelize);
  RawSet4.initModel(sequelize);
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

  return {
    AssetChampions,
    AssetItems,
    AssetTraits,
    IndexMatches,
    ProcessedMatches,
    ProcessedTraits,
    ProcessedUnits,
    RawSet4,
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
    TftTrait,
    TftUnit,
  };
}
