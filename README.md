# 工作流

## 节点数据基本结构

- id: `string` 节点唯一标识, 必须保证唯一
- meta: `object` 节点的 ui 配置信息，如自由布局的 `position` 信息放这里
- type: `string | number` 节点类型，会和 `nodeRegistries` 中的 `type` 对应
- data: `object` 节点表单数据, 业务可自定义
- blocks: `array` 节点的分支, 采用 `block` 更贴近 `Gramming`
