import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconCondition from '../../assets/icon-condition.svg';
import { formMeta } from './form-meta';

export const ConditionNodeRegistry: FlowNodeRegistry = {
  type: 'condition',
  info: {
    icon: iconCondition,
    description: '连接多个下游分支。只有在满足设定条件时，才会执行相应的分支。'
  },
  meta: {
    defaultPorts: [{ type: 'input' }],
    // Condition Outputs use dynamic port
    useDynamicPort: true,
    size: {
      width: 360,
      height: 305
    }
  },
  formMeta,
  onAdd() {
    return {
      id: `condition_${nanoid(5)}`,
      type: 'condition',
      data: {
        title: 'Condition',
        inputsValues: {
          conditions: [
            {
              key: `if_${nanoid(5)}`,
              value: ''
            },
            {
              key: `if_${nanoid(5)}`,
              value: ''
            }
          ]
        },
        inputs: {
          type: 'object',
          properties: {
            conditions: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  key: {
                    type: 'string'
                  },
                  value: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    };
  }
};
