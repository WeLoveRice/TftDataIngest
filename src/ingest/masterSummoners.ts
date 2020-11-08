import sleep from "sleep-promise";
import { Regions } from "twisted/dist/constants";
import { TftSummonerElo } from "../../models/init-models";
import { TftElo } from "../../models/TftElo";
import { TftSummoner } from "../../models/TftSummoner";
import { getTftApi } from "../api/riot/riot";

export const ingestMasterSummoners = async () => {
  const [tftApi, key] = await getTftApi();
  const league = await tftApi.League.getMasterLeague(Regions.EU_WEST);
  const eloTime = new Date();
  let count = 0;
  for await (const entry of league.response.entries) {
    console.log(`${count}/${league.response.entries.length}`);
    count += 1;
    const summCount = await TftSummoner.count({
      where: { summonerName: entry.summonerName },
    });
    if (summCount > 0) {
      continue;
    }
    const summonerDto = await tftApi.Summoner.getById(
      entry.summonerId,
      Regions.EU_WEST
    );
    const { id, name, puuid } = summonerDto.response;
    const summoner = await TftSummoner.create({
      summonerName: name,
      encryptedSummonerId: id,
      encryptedPlayerUuid: puuid,
      summonerRegion: Regions.EU_WEST,
    });

    const tftElo = await TftElo.findOne({
      where: {
        tier: "MASTER",
        rank: entry.rank,
        lp: entry.leaguePoints,
      },
    });
    await TftSummonerElo.create({
      tftEloId: tftElo?.tftEloId,
      tftSummonerId: summoner.tftSummonerId,
      summonerEloTimestamp: eloTime,
    });

    await sleep(1200);
  }
};
