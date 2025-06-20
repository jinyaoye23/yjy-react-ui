# Button 按钮

基础按钮组件，支持多种类型和尺寸。

## 基本用法

```jsx
import { Button } from 'yjy-react-ui';

export default () => <Button type="primary" size="middle">Hello dumi</Button>;
```

## 按钮类型

提供多种类型的按钮。

```jsx
import { Button } from 'yjy-react-ui';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
  </div>
);
```

## 按钮大小

提供三种尺寸的按钮。

```jsx
import { Button } from 'yjy-react-ui';

export default () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button size="small">Small</Button>
    <Button size="middle">Middle</Button>
    <Button size="large">Large</Button>
  </div>
);
```

## 禁用状态

按钮的禁用状态。

```jsx
import { Button } from 'yjy-react-ui';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button disabled>Disabled</Button>
    <Button type="primary" disabled>Disabled</Button>
  </div>
);
```

## API

<API src="./index.tsx"></API>