/**
 * Popup of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Mask from 'milkui-mask';

import './index.scss';

let number = 0;  // popup 弹出框序号

class Popup extends Component {
  static propTypes = {
    placement: PropTypes.string,
    contentClassName: PropTypes.string,
    adjustable: PropTypes.bool,
    maxWidth: PropTypes.number,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    content: PropTypes.node,
    containerNode: PropTypes.node,
    children: PropTypes.node,
  }

  static defaultProps = {
    placement: 'bottomLeft',
    contentClassName: '',
    adjustable: true,
    content: '',
    offsetX: 0,
    offsetY: 0,
    containerNode: document.body,
  }

  constructor(props) {
    super(props);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    number += 1;
    this.wrapNumber = `milkui-popup-${number}`;
    this.triggerEle = null;
    this.contentEle = null;
    this.contentWrapEle = document.getElementById(this.wrapNumber);
    this.wrapStyleMap = {};
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="milkui-popup">
        <div
          className="milkui-popup__trigger"
          ref={(r) => { this.triggerEle = r; }}
          onClick={this.onTriggerClick}
        >
          {children}
        </div>
      </div>
    );
  }

  renderContent() {
    const { content, contentClassName, placement } = this.props;
    const className = classnames('milkui-popup__content', contentClassName);
    const arrowClassName = classnames('milkui-popup__content__arrow', placement);
    return (
      <div className={className}>
        <Mask onClick={this.hide} />
        <div className="milkui-popup__content__inner">
          <span className={arrowClassName} />
          <div className="milkui-popup__content__body">
            {content}
          </div>
        </div>
      </div>
    );
  }

  renderContentWrap() {
    const { containerNode } = this.props;
    const contanteWrapEle = document.createElement('div');
    contanteWrapEle.id = this.wrapNumber;
    contanteWrapEle.className = 'milkui-popup__content-wrap';
    containerNode.appendChild(contanteWrapEle);
    return contanteWrapEle;
  }

  onTriggerClick() {
    if (!this.contentWrapEle) {
      this.contentEle = this.renderContent();
      this.contentWrapEle = this.renderContentWrap();
      ReactDOM.render(this.contentEle, this.contentWrapEle);
    } else {
      this.show();
    }
    this.assignContentPosition();
  }

  hide() {
    this.setWrapStyle({ display: 'none' });
  }

  show() {
    this.setWrapStyle({ display: 'block' });
  }

  setWrapStyle(style) {
    this.wrapStyleMap = { ...this.wrapStyleMap, ...style };
    let arr = [];
    Object.keys(this.wrapStyleMap).forEach((attr) => {
      arr = [...arr, `${attr}: ${this.wrapStyleMap[attr]}`];
    });
    this.contentWrapEle.style.cssText = arr.join(';');
  }

  assignContentPosition() {
    const position = this.getContentPosition();
    this.setWrapStyle({
      top: `${position.top}px`,
      left: `${position.left}px`,
    });
  }

  getContentPosition() {
    const { placement, offsetX, offsetY } = this.props;
    const position = this.getPosition(placement, this.triggerEle, this.contentWrapEle);
    position.left += offsetX;
    position.top += offsetY;
    return position;
  }

  getPosition(placement, trigger, content) {
    const position = { top: 0, left: 0 };
    const tRect = trigger.getBoundingClientRect();
    const cRect = content.getBoundingClientRect();
    const tWidth = tRect.width;
    const tHeight = tRect.height;
    const tTop = tRect.top;
    const tLeft = tRect.left;
    const cWidth = cRect.width;
    const cHeight = cRect.height;

    switch (placement) {
      case 'bottomLeft':
        position.top = tTop + tHeight;
        position.left = tLeft;
        break;
      case 'bottomCenter':
        position.top = tTop + tHeight;
        position.left = tLeft + (tWidth / 2);
        break;
      case 'bottomRight':
        position.top = tTop + tHeight;
        position.left = (tLeft + tWidth) - cWidth;
        break;
      case 'topLeft':
        position.top = tTop - cHeight;
        position.left = tLeft;
        break;
      case 'topCenter':
        position.top = tTop - cHeight;
        position.left = tLeft + (tWidth / 2);
        break;
      case 'topRight':
        position.top = tTop - cHeight;
        position.left = (tLeft + tWidth) - cWidth;
        break;
      default:
        break;
    }

    return position;
  }
}

export default Popup;
