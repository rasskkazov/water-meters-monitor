import { observer } from 'mobx-react';
import { Pagination } from '@/features';
import { meterStore } from '@/entities';

import { MeterCard } from './MetersCard/ui/MeterCard';
import { useMetersBoard } from '../model/useMetersBoard';
import * as classes from './MeterBoard.module.scss';

export const MetersBoard = observer(({ limit }: { limit: number }) => {
  const { page, handlePageClick } = useMetersBoard({ limit });

  return (
    <div className={classes.metersBoard}>
      <header className={classes.metersBoard__header}>
        <h4>№</h4>
        <h4>Тип</h4>
        <h4>Дата установки</h4>
        <h4>Автоматический</h4>
        <h4>Текущие показания</h4>
        <h4>Адрес</h4>
        <h4>Примечания</h4>
      </header>
      <div className={classes.metersBoard__content}>
        {meterStore.isDataReady && (
          <>
            {meterStore.meters.map((meter, index) => (
              <div key={meter.id}>
                <MeterCard
                  meterId={meter.id}
                  limit={limit}
                  offset={page * limit}
                  areaId={meter.area.id}
                  orderNumber={index + 1}
                  type={meter._type[0]}
                  date={meter.installation_date}
                  isAutomatic={meter.is_automatic}
                  initVal={meter.initial_values[0].toFixed(4)}
                  description={meter.description}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <footer className={classes.metersBoard__footer}>
        {meterStore.isCountReady && (
          <Pagination
            count={Math.ceil(meterStore.count / limit)}
            handlePageClick={handlePageClick}
          />
        )}
      </footer>
    </div>
  );
});
