import { FlowNodeRegistry } from '@/typings';
import iconStart from '@/assets/icon-start.jpg';
import { formMeta } from './form-meta';

export const StartNodeRegistry: FlowNodeRegistry = {
  type: 'start',
  meta: {
    isStart: true, // 标记为开始节点
    deleteDisable: true, // 开始节点不能删除
    copyDisable: true, // 开始节点不能复制
    defaultPorts: [{ type: 'output' }], // 用于定义节点的输入和输出端口, 开始节点只有输出端口
    size: {
      width: 360,
      height: 211
    }
  },
  info: {
    icon: iconStart,
    description: '工作流的起始节点，用于设置启动工作流所需的信息。'
  },
  /**
   * Render node via formMeta
   * 配置节点表单的校验及渲染,
   * 注：validate 采用数据和渲染分离，保证节点即使不渲染也能对数据做校验
   */
  formMeta,
  /**
   * Start Node cannot be added
   */
  canAdd() {
    return false;
  }
};
