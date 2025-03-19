import { useClientContext } from '@flowgram.ai/free-layout-editor';

import { Button } from '@douyinfe/semi-ui';

export const GetAllNodes = (props: { disabled: boolean }) => {
  const ctx = useClientContext();

  const handleGetAllNodes = () => {
    const nodes = ctx.document.getAllNodes();
    console.log('All nodes:', nodes);

    const json = ctx.document.toJSON();
    console.log('All nodes JSON:', json);
  };

  return (
    <Button disabled={props.disabled} onClick={handleGetAllNodes} style={{ backgroundColor: 'rgba(171,181,255,0.3)', borderRadius: '8px', marginLeft: '5px' }}>Get All Nodes</Button>
  );
};
