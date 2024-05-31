import { t } from 'mobx-state-tree';
import { AreaModel } from './Area';

export const MeterModel = t.model('Meter', {
  id: t.identifier,
  _type: t.array(t.string),
  area: AreaModel,
  is_automatic: t.maybeNull(t.boolean),
  communication: t.string,
  description: t.maybeNull(t.string),
  serial_number: t.string,
  installation_date: t.string,
  brand_name: t.maybeNull(t.string),
  model_name: t.maybeNull(t.string),
  initial_values: t.array(t.number),
});
