import { t, Instance } from "mobx-state-tree";
import { AreaModel } from "@/shared/model/Area";
import { MeterModel } from "@/shared/model/Meter";
import { IMeter } from "./type";

const MeterStore = t
  .model("MeterStore", {
    meters: t.array(MeterModel),
  })
  .actions((self) => ({
    appendMeters(newMeters: IMeter[]) {
      self.meters.push(...newMeters);
    },
    removeMeterById(id: string) {
      const index = self.meters.findIndex((meter) => meter.id === id);
      if (index > -1) {
        self.meters.splice(index, 1);
      }
    },
  }));

export const meterStore = MeterStore.create({
  meters: [],
});

// export const meterStore = MeterStore.create({
//   meters: [
//     {
//       id: "526a0caae0e34c3e6dda9b98",
//       _type: ["ColdWaterAreaMeter", "AreaMeter"],
//       area: {
//         id: "526237d2e0e34c524382c11c",
//       },
//       is_automatic: false,
//       communication: "5b20f6ba64c0360001ed10a5",
//       description: "488",
//       serial_number: "12039415",
//       installation_date: "2012-07-01T00:00:00",
//       brand_name: "EXBRA",
//       model_name: "EV-AM",
//       initial_values: [0.0],
//     },
//     {
//       id: "526a0caae0e34c3e6dda9b43",
//       _type: ["HotWaterAreaMeter", "AreaMeter"],
//       area: {
//         id: "526237d2e0e34c524382c0e0",
//       },
//       is_automatic: null,
//       communication: "5b20f6ba64c0360001ed1063",
//       description: "459",
//       serial_number: "",
//       installation_date: "2012-01-01T00:00:00",
//       brand_name: null,
//       model_name: null,
//       initial_values: [0.0],
//     },
//     {
//       id: "526a0caae0e34c3e6dda9b99",
//       _type: ["ColdWaterAreaMeter", "AreaMeter"],
//       area: {
//         id: "526237d2e0e34c524382c11c",
//       },
//       is_automatic: false,
//       communication: "5b20f6a864c0360001ed0eaa",
//       description: "489",
//       serial_number: "12095130",
//       installation_date: "2012-07-01T00:00:00",
//       brand_name: "ITELMA",
//       model_name: "WFK 24 D080",
//       initial_values: [0.0],
//     },
//   ],
// });
