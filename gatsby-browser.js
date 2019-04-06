import * as React from 'react';
import Layout from './src/components/Layout';

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  return <Layout>{React.createElement(component, props)}</Layout>;
};
