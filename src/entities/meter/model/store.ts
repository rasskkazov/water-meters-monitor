import { t, Instance, flow } from "mobx-state-tree";
import { AreaModel } from "@/shared/model/Area";
import { MeterModel } from "@/shared/model/Meter";
import { IMeter } from "./type";
import { fetchMeters } from "../api";

const MeterStore = t
  .model("MeterStore", {
    meters: t.array(MeterModel),
    count: t.number,
    isDataReady: t.boolean,
    isCountReady: t.boolean,
  })
  .actions((self) => ({
    fetchMetersPage: flow(function* (params: {
      limit: number;
      offset: number;
    }) {
      self.isDataReady = false;
      try {
        self.meters = yield fetchMeters({ params }).then(
          (data) => data.results
        );
      } catch (e) {
        console.error(e);
      } finally {
        self.isDataReady = true;
      }
    }),
    init: flow(function* (params: { limit: number; offset: number }) {
      self.isCountReady = false;
      try {
        self.count = yield fetchMeters({ params }).then((data) => data.count);
      } catch (e) {
        console.error(e);
      } finally {
        self.isCountReady = true;
      }
    }),
  }));

export const meterStore = MeterStore.create({
  meters: [],
  count: 0,
  isDataReady: false,
  isCountReady: false,
});
