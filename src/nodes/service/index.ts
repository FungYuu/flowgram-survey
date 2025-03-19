import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '@/typings';
import databaseSearchIcon from '@/assets/icon-database-search.png';
import { formMeta } from './form-meta';

/**
 * 输入项
 */
export const ServiceNodeRegistry: FlowNodeRegistry = {
  type: 'service',
  meta: {
    copyDisable: false
  },
  info: {
    icon: databaseSearchIcon,
    description: 'Service节点'
  },
  formMeta,
  canAdd: () => true, // 是否可添加
  onAdd(ctx, from) {
    return {
      id: `service_${nanoid(5)}`,
      type: 'service',
      data: {
        title: `Service_${nanoid(3)}`,
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string',
              default: 'Kylin'
            }
          }
        },
        inputs: {
          type: 'object',
          // 新建了表单
          required: ['serviceName'],
          properties: {
            serviceName: {
              type: 'string'
            }
          }
        }
      }
    };
  }
};
