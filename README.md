# milk-popup

组件描述

## 效果图

...some images

## 使用

```js
import Popup from 'milk-popup';

<Popup></Popup>
```

## 参数

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

## 开发

### install

```bash
cnpm i milk-dev -g    # 组件开发工具
cnpm install
npm start
```

## 链接

- [Issues](https://github.com/milk-ui/milk-popup/issues)
