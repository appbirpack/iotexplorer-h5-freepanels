import React from 'react';
import { Position } from './Position';
import LightBright from './LightBright';
import Ticker from './Ticker';
import Action from './Action';
import { SceneTab } from './SceneTab';

export function Home(props) {
  // tab模式
  const colorMode = props.deviceData.color_mode || 'white';

  return (
    <div className="home">
      { colorMode !== 'scene'
        ? <div className="change-panel">
          <Position {...props}></Position>
          <Action {...props}></Action>
          { colorMode === 'white'
            ? <LightBright
                iconName="brightness"
                controlName="bright_value"
                {...props}
              ></LightBright>
            : null
          }
          { colorMode === 'colour'
            ? <>
                <LightBright
                  iconName="temperature"
                  controlName="temp_value"
                  {...props}
                ></LightBright>
                <LightBright
                  iconName="brightness"
                  controlName="bright_value"
                  {...props}
                ></LightBright>
              </>
            : null
          }
        </div>
        : <div className="change-panel">
          <SceneTab {...props}></SceneTab>
          <Action style="big-action" {...props}></Action>
        </div>
      }
      <Ticker {...props} />
    </div>
  );
}
