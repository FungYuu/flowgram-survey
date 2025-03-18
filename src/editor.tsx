import { EditorRenderer, FreeLayoutEditorProvider } from '@flowgram.ai/free-layout-editor';
import '@flowgram.ai/free-layout-editor/index.css';

import '@/styles/index.css';
import { nodeRegistries } from '@/nodes';
import { initialData } from '@/initial-data'; // 初始化数据
import { useEditorProps } from '@/hooks'; // 画布详细的 props 配置
import { DemoTools } from '@/components/tools'; // 画布工具

export const Editor = () => {
  const editorProps = useEditorProps(initialData, nodeRegistries);
  return (
    <div className="doc-free-feature-overview">
      {/* 画布配置器 */}
      <FreeLayoutEditorProvider {...editorProps}>
        <div className="demo-container">
          {/* 最终渲染的画布 */}
          <EditorRenderer className="demo-editor" />
        </div>
        <DemoTools />
      </FreeLayoutEditorProvider>
    </div>
  );
};
