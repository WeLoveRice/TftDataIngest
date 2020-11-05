import { ApiResponseDTO, MatchTFTDTO } from "twisted/dist/models-dto";
import { TftMatchDetails, TftMatchHistory, TftSummoner } from "../../../models/init-models";
import { getMatchHistory } from "../../api/riot";

export const findSummonerByName = async (
    name: string
  ): Promise<TftSummoner> => {
    const summoner = await TftSummoner.findOne({
      where: { name }
    });
  
    if (!summoner) {
      throw new Error(`Cannot find summoner by name ${name}`);
    }
  
    return summoner;
  };
  
  export const fetchLatestUnprocessedMatchId = async (
    summoner: TftSummoner
  ): Promise<string | null> => {
    const matches = await getMatchHistory(summoner.puuid);
    const result = await TftMatchHistory.count({
      where: {
        tftMatchDetailsRiotId: matches.response[0],
        tftSummonerId: summoner.id
      }
    });
  
    if (result > 0) {
      return null;
    }
  
    return matches.response[0];
  };
  
  export const matchDetailExists = async ({
    response
  }: ApiResponseDTO<MatchTFTDTO>): Promise<boolean> => {
    const result = await TftMatchDetails.count({
      where: {
        riotId: response.metadata.match_id
      }
    });
  
    return result > 0;
  };
