import React from 'react';
import { storiesOf } from '@storybook/react';
import { TagSet } from '../../src';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('TagSet', () => (
    <StoryForm initialValues={{labels: ['Agents', 'Docs']}}>
      <TagSet
        name="labels"
        label="Labels"
        options={['Agents', 'Docs', 'Feedback']}
      />
    </StoryForm>
  ));
