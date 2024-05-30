import { t } from "mobx-state-tree";

export const AreaModel = t.model("Area", {
  id: t.identifier,
});
