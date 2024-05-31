import { Instance } from 'mobx-state-tree';
import { MeterModel } from '@/shared/model/Meter';

export interface IMeter extends Instance<typeof MeterModel> {}
