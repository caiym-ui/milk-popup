/**
 * MilkPopup of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Icon from './svg';
import iconEllipsis from './svg/ellipsis.svg';
import iconHelp from './svg/help.svg';
import iconQrcode from './svg/qrcode.svg';
import iconScan from './svg/scan.svg';
import Popup from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    const popupContent = this.renderPopupContent();

    return (
      <div className="demo__panel">
        <div className="demo__title">Milk UI</div>
        <div className="demo__description">
          Demo Page 😀.
        </div>
        <div className="demo__item">
          <div className="demo__bar">
            <div className="demo__bar__header" />
            <div className="demo__bar__body">右下方弹出</div>
            <div className="demo__bar__footer">
              <Popup
                placement="bottomRight"
                content={popupContent}
                offsetX={-20}
                offsetY={10}
              >
                <Icon className="demo__icon demo__bar__icon" glyph={iconEllipsis} />
              </Popup>
            </div>
          </div>
        </div>
        <div className="demo__item">
          <div className="demo__bar">
            <div className="demo__bar__header">
              <Popup
                placement="bottomLeft"
                content={popupContent}
                offsetX={5}
                offsetY={10}
              >
                <Icon className="demo__icon demo__bar__icon" glyph={iconEllipsis} />
              </Popup>
            </div>
            <div className="demo__bar__body">左下方弹出</div>
            <div className="demo__bar__footer" />
          </div>
        </div>
        <div className="demo__item">
          <div className="demo__bar">
            <div className="demo__bar__header" />
            <div className="demo__bar__body">右上方弹出</div>
            <div className="demo__bar__footer">
              <Popup
                placement="topRight"
                content={popupContent}
                offsetX={-20}
                offsetY={-10}
              >
                <Icon className="demo__icon demo__bar__icon" glyph={iconEllipsis} />
              </Popup>
            </div>
          </div>
        </div>
        <div className="demo__item">
          <div className="demo__bar">
            <div className="demo__bar__header">
              <Popup
                placement="topLeft"
                content={popupContent}
                offsetX={8}
                offsetY={-10}
              >
                <Icon className="demo__icon demo__bar__icon" glyph={iconEllipsis} />
              </Popup>
            </div>
            <div className="demo__bar__body">左上方弹出</div>
            <div className="demo__bar__footer" />
          </div>
        </div>
      </div>
    );
  }

  renderPopupContent() {
    return (
      <div className="demo__popup-content">
        <div className="item">
          <Icon className="demo__icon item__icon" glyph={iconScan} />
          <span>扫一扫</span>
        </div>
        <div className="item">
          <Icon className="demo__icon item__icon" glyph={iconQrcode} />
          <span>我的二维码</span>
        </div>
        <div className="item">
          <Icon className="demo__icon item__icon" glyph={iconHelp} />
          <span>帮助</span>
        </div>
      </div>
    );
  }
}

export default Demo;
