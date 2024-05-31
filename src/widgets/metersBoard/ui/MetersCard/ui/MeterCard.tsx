import { DeleteMeter } from '@/features';
import Water from '@/shared/assets/svg/water.svg';
import { stringToRussianDate } from '@/shared/lib/stringToRussianDate';

import { useArea } from '../../../model/useArea';
import * as classes from './MeterCard.module.scss';
import { useState } from 'react';

const MeterTypes = {
  HotWaterAreaMeter: 'ГВС',
  ColdWaterAreaMeter: 'ХВС',
};
const MeterTypesIconsColor = {
  HotWaterAreaMeter: '#F46B4D',
  ColdWaterAreaMeter: '#3698FA',
};
enum isAutomaticIndicator {
  auto = 'да',
  manual = 'нет',
}

export const MeterCard = ({
  meterId,
  areaId,
  limit,
  offset,
  orderNumber,
  type,
  date,
  isAutomatic,
  initVal,
  description,
}: {
  meterId: string;
  areaId: string;
  limit: number;
  offset: number;
  orderNumber: number;
  type: string;
  date: string;
  isAutomatic: boolean;
  initVal: string;
  description: string;
}) => {
  const { data, isLoading } = useArea(areaId);
  const [delVisible, setDelVisible] = useState(false);
  if (isLoading) return <div className={classes.meterCard}>Загрузка...</div>;

  return (
    <div
      className={classes.meterCard}
      onMouseEnter={() => setDelVisible(true)}
      onMouseLeave={() => setDelVisible(false)}
    >
      <div className="meterCard__orderNumber">{orderNumber}</div>
      <div className={classes.meterCard__type}>
        <Water color={MeterTypesIconsColor[type as keyof typeof MeterTypes]} />
        {MeterTypes[type as keyof typeof MeterTypes]}
      </div>
      <div className="meterCard__data">{stringToRussianDate(date)}</div>
      <div className="meterCard__isAutomatic">
        {isAutomatic ? isAutomaticIndicator.auto : isAutomaticIndicator.manual}
      </div>
      <div className="meterCard__initVal">{initVal}</div>
      <div className="meterCard__address">
        {`${data.house.address} ${data.str_number_full}`}
      </div>
      <div className={classes.meterCard__description}>{description}</div>
      <div
        className={`${classes.meterCard__del}${delVisible ? '--visible' : ''}`}
      >
        <DeleteMeter id={meterId} limit={limit} offset={offset} />
      </div>
    </div>
  );
};
