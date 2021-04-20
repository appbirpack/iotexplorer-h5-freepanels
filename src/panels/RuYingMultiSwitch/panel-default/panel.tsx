import { FreePanelLayout } from "@src/components/FreePanelLayout";
import React from "react";
import { RuyingLayout } from "./RuyingLayout";
import { iconLamp } from "@icons/device/freePanel";
import "./panel.less";
const wordsList = [
  "打开LED吸顶灯",
  "关闭筒灯",
  "我要出门啦",
  "我回来啦",
  "打开房间的灯光",
];

export function MultiSwitchPanel({
  deviceInfo,
  productInfo,
  templateMap,
  deviceData,
  offline,
  powerOff,
  doControlDeviceData,
  switchList,
}) {
  return (
    <RuyingLayout
      wordsList={wordsList}
      displayName="如影智慧中控屏"
      beforeChildren={
        <div className="switch-list-wrapper">
          {switchList.map((item) => {
            console.log(item);
            return (
              <div
                className="switch-item"
                style={{
                  background: deviceData[item.id] ? "#C4CBDE" : "#222631",
                }}
                onClick={() => {
                  doControlDeviceData(item.id, deviceData[item.id] ? 0 : 1);
                }}
              >
                <div
                  className="switch-name switch-info"
                  style={{
                    color: deviceData[item.id] ? "#000" : "#fff",
                  }}
                >
                  {deviceData[item.switch_name] || "小灯"}
                </div>
                <img className="switch-icon switch-info" src={iconLamp}></img>
                <div
                  className="status-icon switch-info"
                  style={{
                    background: deviceData[item.id] ? "#2ae9ae" : "#4A4D5E",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      }
    />
  );
}
