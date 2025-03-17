import { FlowNodeRegistry } from '../../typings';
import iconStart from '../../assets/icon-start.jpg';
import { formMeta } from './form-meta';

export const StartNodeRegistry: FlowNodeRegistry = {
  type: 'start',
  meta: {
    isStart: true,
    deleteDisable: true,
    copyDisable: true,
    defaultPorts: [{ type: 'output' }],
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
   */
  formMeta,
  /**
   * Start Node cannot be added
   */
  canAdd() {
    return false;
  }
};
