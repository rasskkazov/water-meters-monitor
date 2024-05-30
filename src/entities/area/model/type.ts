import { Instance } from "mobx-state-tree";
import { AreaModel } from "@/shared/model/Area";

export interface IArea extends Instance<typeof AreaModel> {}
