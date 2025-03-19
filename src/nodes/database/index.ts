import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '@/typings';
import databaseIcon from '@/assets/icon-database.png';

/**
 * 输入项
 */
export const DatabaseNodeRegistry: FlowNodeRegistry = {
  type: 'database',
  meta: {
    copyDisable: false
  },
  info: {
    icon: databaseIcon,
    description: '数据库节点'
  },
  canAdd: () => true, // 是否可添加
  onAdd(ctx, from) {
    return {
      id: `database_${nanoid(5)}`,
      type: 'database',
      data: {
        title: `Database_${nanoid(3)}`,
        inputs: {
          type: 'object',
          // 新建了表单
          required: [
            'databaseHost',
            'databasePort',
            'databaseName',
            'databaseUser',
            'databasePassword'
          ],
          properties: {
            databaseHost: {
              type: 'string'
            },
            databasePort: {
              type: 'number'
            },
            databaseName: {
              type: 'string'
            },
            databaseUser: {
              type: 'string'
            },
            databasePassword: {
              type: 'string'
            }
          }
        }
      }
    };
  }
};
