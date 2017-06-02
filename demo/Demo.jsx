/**
 * MilkPopup of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Icon from './svg';
import iconEllipsis from './svg/ellipsis.svg';
import iconMenu from './svg/menu.svg';
import iconHelp from './svg/help.svg';
import iconQrcode from './svg/qrcode.svg';
import iconScan from './svg/scan.svg';
import Popup from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    const popupContent = this.renderPopupContent();

    return (
      <div className="demo-panel">
        <div className="demo-title">Milk UI</div>
        <div className="demo-description">
          Demo Page 😀.
        </div>
        <div className="demo-item">
          <div className="demo-bar">
            <div className="demo-bar-header" />
            <div className="demo-bar-body">bottomRight</div>
            <div className="demo-bar-footer">
              <Popup
                placement="bottomRight"
                content={popupContent}
                offsetX={-20}
                offsetY={10}
              >
                <Icon className="demo-icon demo-bar-icon" glyph={iconEllipsis} />
              </Popup>
            </div>
          </div>
        </div>
        <div className="demo-item">
          <div className="demo-bar">
            <div className="demo-bar-header">
              <Popup
                placement="bottomLeft"
                content={popupContent}
                offsetX={5}
                offsetY={10}
              >
                <Icon className="demo-icon demo-bar-icon" glyph={iconMenu} />
              </Popup>
            </div>
            <div className="demo-bar-body">bottomLeft</div>
            <div className="demo-bar-footer" />
          </div>
        </div>
        <div className="demo-item">
          <div className="demo-bar">
            <div className="demo-bar-header" />
            <div className="demo-bar-body">topRight</div>
            <div className="demo-bar-footer">
              <Popup
                placement="topRight"
                content={popupContent}
                offsetX={-20}
                offsetY={-10}
              >
                <Icon className="demo-icon demo-bar-icon" glyph={iconEllipsis} />
              </Popup>
            </div>
          </div>
        </div>
        <div className="demo-item">
          <div className="demo-bar">
            <div className="demo-bar-header">
              <Popup
                placement="topLeft"
                content={popupContent}
                offsetX={8}
                offsetY={-10}
              >
                <Icon className="demo-icon demo-bar-icon" glyph={iconMenu} />
              </Popup>
            </div>
            <div className="demo-bar-body">topLeft</div>
            <div className="demo-bar-footer" />
          </div>
        </div>
      </div>
    );
  }

  renderPopupContent() {
    return (
      <div className="demo-popup-content">
        <div className="item">
          <Icon className="demo-icon item-icon" glyph={iconScan} />
          <span className="item-text">扫一扫</span>
        </div>
        <div className="item">
          <Icon className="demo-icon item-icon" glyph={iconQrcode} />
          <span className="item-text">我的二维码</span>
        </div>
        <div className="item">
          <Icon className="demo-icon item-icon" glyph={iconHelp} />
          <span className="item-text">帮助</span>
        </div>
      </div>
    );
  }
}

export default Demo;
