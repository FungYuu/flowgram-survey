import { FlowDocumentJSON } from '@/typings';

export const initialData: FlowDocumentJSON = {
  nodes: [
    {
      id: 'database_MUGSD',
      type: 'database',
      meta: {
        position: {
          x: 1105,
          y: 382.39417035814586
        }
      },
      data: {
        title: 'Database_-Ar',
        inputs: {
          type: 'object',
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
        },
        inputsValues: {
          databaseHost: {
            type: 'expression',
            content: 'start_0.outputs.host'
          },
          databasePort: {
            type: 'expression',
            content: 'start_0.outputs.port'
          },
          databaseName: {
            type: 'expression',
            content: 'start_0.outputs.name'
          },
          databaseUser: {
            type: 'expression',
            content: 'start_0.outputs.user'
          },
          databasePassword: {
            type: 'expression',
            content: 'start_0.outputs.password'
          }
        }
      }
    },
    {
      id: 'start_0',
      type: 'start',
      meta: {
        position: {
          x: 181,
          y: 249.5
        }
      },
      data: {
        title: 'Start',
        outputs: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              default: 'Hello Flow.'
            },
            host: {
              type: 'string',
              default: 'localhost'
            },
            port: {
              type: 'number',
              default: '3306'
            },
            name: {
              type: 'string',
              default: 'Kylin'
            },
            user: {
              type: 'string',
              default: 'root'
            },
            password: {
              type: 'string',
              default: 'root'
            }
          }
        }
      }
    },
    {
      id: 'condition_0',
      type: 'condition',
      meta: {
        position: {
          x: 643,
          y: 213
        }
      },
      data: {
        title: 'Condition',
        inputsValues: {
          conditions: [
            {
              key: 'if_0',
              value: {
                type: 'expression',
                content: 'start_0.outputs'
              }
            },
            {
              key: 'if_1',
              value: {
                type: 'expression',
                content: 'start_0.outputs.host'
              }
            },
            {
              key: 'if_sZLaiG',
              value: {
                type: 'expression',
                content: 'start_0.outputs.name'
              }
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
    },
    {
      id: 'llm_0',
      type: 'llm',
      meta: {
        position: {
          x: 1105,
          y: 0
        }
      },
      data: {
        title: 'LLM_0',
        inputsValues: {
          modelType: 'gpt-3.5-turbo',
          temperature: 0.5,
          systemPrompt: 'You are an AI assistant.',
          prompt: ''
        },
        inputs: {
          type: 'object',
          required: ['modelType', 'temperature', 'prompt'],
          properties: {
            modelType: {
              type: 'string'
            },
            temperature: {
              type: 'number'
            },
            systemPrompt: {
              type: 'string'
            },
            prompt: {
              type: 'string'
            }
          }
        },
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string'
            }
          }
        }
      }
    },
    {
      id: 'end_0',
      type: 'end',
      meta: {
        position: {
          x: 1567,
          y: 249.5
        }
      },
      data: {
        title: 'End',
        outputs: {
          type: 'object',
          properties: {
            result: {
              type: 'string'
            }
          }
        }
      }
    },
    {
      id: 'service_WVRrl',
      type: 'service',
      meta: {
        position: {
          x: 1105,
          y: 753.7883407162917
        }
      },
      data: {
        title: 'Service_OAR',
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
          required: ['serviceName'],
          properties: {
            serviceName: {
              type: 'string'
            }
          }
        }
      }
    }
  ],
  edges: [
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'database_MUGSD',
      sourcePortID: 'if_1'
    },
    {
      sourceNodeID: 'database_MUGSD',
      targetNodeID: 'end_0'
    },
    {
      sourceNodeID: 'start_0',
      targetNodeID: 'condition_0'
    },
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'llm_0',
      sourcePortID: 'if_0'
    },
    {
      sourceNodeID: 'condition_0',
      targetNodeID: 'service_WVRrl',
      sourcePortID: 'if_sZLaiG'
    },
    {
      sourceNodeID: 'llm_0',
      targetNodeID: 'end_0'
    },
    {
      sourceNodeID: 'service_WVRrl',
      targetNodeID: 'end_0'
    }
  ]
};
