import fs from "fs-extra";
import path from "path";
import { TftApi } from "twisted";
import { Regions } from "twisted/dist/constants";
import { TftApiKey } from "../../models/TftApiKey";
import { TftSummoner } from "../../models/TftSummoner";
import { TftSummonerApiKey } from "../../models/TftSummonerApiKey";

export const upsertApiKeys = async () => {
  const keysFile = path.resolve(__dirname, "..", "..", "riot-api-keys.txt");

  const data = await fs.readFile(keysFile, "utf-8");
  const keys = data.split("\n").filter((value) => value);

  for await (const key of keys) {
    const keyCount = await TftApiKey.count({ where: { riotApiKey: key } });
    // If key already exists then skip
    if (keyCount > 0) {
      continue;
    }

    const tftSummonerApiKey = await findTftSummonerApiKey(key);
    // If a record exists, it means the key has been seen before but has probably been regenerated
    // Update the api key
    if (tftSummonerApiKey) {
      const tftApiKey = await TftApiKey.findByPk(tftSummonerApiKey.tftApiKeyId);
      if (!tftApiKey) {
        throw new Error(`Can't find tftApiKey by id ${tftApiKey}`);
      }
      await tftApiKey.set({ riotApiKey: key });
      await tftApiKey.save();
    }
    // If not exists for this summoner, its a new key
    if (!tftSummonerApiKey) {
      await TftApiKey.create({
        riotApiKey: key,
      });
    }
  }
};

const findTftSummonerApiKey = async (key: string) => {
  const tftApi = new TftApi(key);
  const { response } = await tftApi.Summoner.getByName(
    "DFTskillz",
    Regions.EU_WEST
  );
  const summoner = await TftSummoner.findOne({
    where: { summonerName: "DFTskillz" },
  });

  return TftSummonerApiKey.findOne({
    where: {
      encryptedSummonerId: response.id,
      encryptedPlayerUuid: response.puuid,
      tftSummonerId: summoner?.tftSummonerId,
    },
  });
};
