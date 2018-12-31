import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import Layout from './src/components/Layout';

const Transition = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    applyAtStart: { display: 'grid' },
    beforeChildren: true,
  },
  exit: { opacity: 0 },
});

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources;
  return (
    <Layout>
      <PoseGroup>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  );
};
