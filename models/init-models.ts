import { Sequelize } from "sequelize";
import { AssetChampions, AssetChampionsAttributes } from "./AssetChampions";
import { AssetItems, AssetItemsAttributes } from "./AssetItems";
import { AssetTraits, AssetTraitsAttributes } from "./AssetTraits";
import { IndexMatches, IndexMatchesAttributes } from "./IndexMatches";
import { IndexSummoners, IndexSummonersAttributes } from "./IndexSummoners";
import { ProcessedMatches, ProcessedMatchesAttributes } from "./ProcessedMatches";
import { ProcessedTraits, ProcessedTraitsAttributes } from "./ProcessedTraits";
import { ProcessedUnits, ProcessedUnitsAttributes } from "./ProcessedUnits";
import { RawSet4, RawSet4Attributes } from "./RawSet4";
import { TftElo, TftEloAttributes } from "./TftElo";
import { TftMatch, TftMatchAttributes } from "./TftMatch";
import { TftParticipant, TftParticipantAttributes } from "./TftParticipant";
import { TftParticipantElo, TftParticipantEloAttributes } from "./TftParticipantElo";
import { TftParticipantLink, TftParticipantLinkAttributes } from "./TftParticipantLink";
import { TftParticipantUnit, TftParticipantUnitAttributes } from "./TftParticipantUnit";
import { TftSummoner, TftSummonerAttributes } from "./TftSummoner";
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
  RawSet4, RawSet4Attributes,
  TftElo, TftEloAttributes,
  TftMatch, TftMatchAttributes,
  TftParticipant, TftParticipantAttributes,
  TftParticipantElo, TftParticipantEloAttributes,
  TftParticipantLink, TftParticipantLinkAttributes,
  TftParticipantUnit, TftParticipantUnitAttributes,
  TftSummoner, TftSummonerAttributes,
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
  RawSet4.initModel(sequelize);
  TftElo.initModel(sequelize);
  TftMatch.initModel(sequelize);
  TftParticipant.initModel(sequelize);
  TftParticipantElo.initModel(sequelize);
  TftParticipantLink.initModel(sequelize);
  TftParticipantUnit.initModel(sequelize);
  TftSummoner.initModel(sequelize);
  TftUnit.initModel(sequelize);

  TftParticipantElo.belongsTo(TftElo, { foreignKey: "tftEloId"});
  TftElo.hasMany(TftParticipantElo, { foreignKey: "tftEloId"});
  TftParticipantElo.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasMany(TftParticipantElo, { foreignKey: "tftParticipantId"});
  TftParticipantLink.belongsTo(TftMatch, { foreignKey: "tftMatchId"});
  TftMatch.hasMany(TftParticipantLink, { foreignKey: "tftMatchId"});
  TftParticipantLink.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasOne(TftParticipantLink, { foreignKey: "tftParticipantId"});
  TftParticipantLink.belongsTo(TftSummoner, { foreignKey: "tftSummonerId"});
  TftSummoner.hasMany(TftParticipantLink, { foreignKey: "tftSummonerId"});
  TftParticipantUnit.belongsTo(TftParticipant, { foreignKey: "tftParticipantId"});
  TftParticipant.hasMany(TftParticipantUnit, { foreignKey: "tftParticipantId"});

  return {
    AssetChampions,
    AssetItems,
    AssetTraits,
    IndexMatches,
    IndexSummoners,
    ProcessedMatches,
    ProcessedTraits,
    ProcessedUnits,
    RawSet4,
    TftElo,
    TftMatch,
    TftParticipant,
    TftParticipantElo,
    TftParticipantLink,
    TftParticipantUnit,
    TftSummoner,
    TftUnit,
  };
}
