import React from 'react';
import { Icon } from '@custom/Icon';
import { Btn } from '@custom/Btn';

const CONFIG = [
  ['白光', 0, 'white'],
  ['彩光', 1, 'colour'],
  ['情景', 2, 'scene'],
];

const Ticker = ({
  deviceData: { color_mode = 'white', power_switch },
  doControlDeviceData,
}) => {
  const isSwitchOff = power_switch !== 1;
  const isChecked = (val: number | string) => !isSwitchOff && color_mode === val;
  const cls = isSwitchOff ? 'ticker-off' : '';
  return (
    <div className={`ticker ${cls}`}>
      <div className="content">
        {CONFIG.map(([name, value, icon]) => (
          <Btn
            key={value}
            type={isChecked(icon) ? 'primary' : 'reverse'}
            onClick={() => doControlDeviceData({ color_mode: icon })}
          >
            <Icon name={`${icon}${isChecked(icon) ? '-checked' : ''}`} />
            <div className="title">{name}</div>
          </Btn>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
