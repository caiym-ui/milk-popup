# milkui-popup

> 在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## Overview

![image](https://user-images.githubusercontent.com/11053605/28750107-95a89c06-7511-11e7-8c21-a3a72af99b98.png)

## Example

```js
import Popup from 'milkui-popup';

<Popup
  placement="bottomRight"
  content={popupContent}
  offsetX={-20}
  offsetY={10}
>
  <Icon className="demo__icon demo__bar__icon" glyph={iconEllipsis} />
</Popup>

// popupContent
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
```

## Properties

| Properties | Type | Description | Default |
| -- | -- | -- | -- |
| placement | String | 显示位置 | 'bottomLeft' |
| contentClassName | String | 自定义的 class 类名 | '' |
| adjustable | Boolean | 定位是否自适应 | true |
| maxWidth | Number | 显示内容的最大宽度 | 200 |
| offsetX | Number | 内容区定位后的 x 轴的偏移量 | 0 |
| offsetY | Number | 内容区定位后的 y 轴的偏移量 | 0 |
| content | React node | 显示内容 | '' |
| containerNode | React node | 显示内容的容器 | document.body |

## Develop

```bash
cnpm i milk-dev -g    # dev tool

cnpm install

npm start
```

## Links

- [Issues](https://github.com/milk-ui/milkui-popup/issues)
