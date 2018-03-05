import React from 'react';
import { storiesOf } from '@storybook/react';
import { TagSet } from '../../src';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('TagSet', () => (
    <StoryForm>
      <TagSet
        name="labels"
        label="Labels"
        tags={['Agents', 'Docs']}
        options={['Agents', 'Docs', 'Feedback']}
      />
    </StoryForm>
  ));
