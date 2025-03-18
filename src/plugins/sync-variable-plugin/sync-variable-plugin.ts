import {
  definePluginCreator,
  FlowNodeVariableData,
  getNodeForm,
  PluginCreator,
  FreeLayoutPluginContext,
  ASTFactory
} from '@flowgram.ai/free-layout-editor';

import { createASTFromJSONSchema } from './utils';

export interface SyncVariablePluginOptions {}

/**
 * 创建一个插件，当节点创建或更新时，将输出数据同步到变量引擎。
 * @param ctx - 插件上下文，包含文档和其他相关信息。
 * @param options - 插件选项，目前为空对象。
 */
export const createSyncVariablePlugin: PluginCreator<SyncVariablePluginOptions> =
  definePluginCreator<SyncVariablePluginOptions, FreeLayoutPluginContext>({
    onInit(ctx, options) {
      const flowDocument = ctx.document;

      // 监听节点创建事件
      flowDocument.onNodeCreate(({ node }) => {
        const form = getNodeForm(node);
        const variableData = node.getData(FlowNodeVariableData);

        /**
         * 将输出数据同步到变量引擎。
         * @param value - 要同步的输出数据。
         */
        const syncOutputs = (value: any) => {
          if (!value) {
            // 如果输出数据为空，则清除变量。
            variableData.clearVar();
            return;
          }

          // 从输出数据的 JSON 模式创建一个类型 AST
          // 注意：你可以创建一个新函数，根据你的自定义 DSL 生成 AST。
          const typeAST = createASTFromJSONSchema(value);

          if (typeAST) {
            // 使用节点的标题或其 ID 作为变量的标题。
            const title = form?.getValueIn('title') || node.id;

            // 在变量引擎中设置变量。
            variableData.setVar(
              ASTFactory.createVariableDeclaration({
                meta: {
                  title: `${title}.outputs`
                  // 注意：您可以根据需要在此处添加更多元数据。
                },
                key: `${node.id}.outputs`,
                type: typeAST
              })
            );
          } else {
            // 如果无法创建 AST，则清除变量。
            variableData.clearVar();
          }
        };

        if (form) {
          // 初始同步输出数据。
          syncOutputs(form.getValueIn('outputs'));

          // 监听表单值的变化，并在输出数据变化时重新同步。
          form.onFormValuesChange((props) => {
            if (props.name.match(/^outputs/)) {
              syncOutputs(form.getValueIn('outputs'));
            }
          });
        }
      });
    }
  });
