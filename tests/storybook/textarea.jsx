import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea } from '../../src';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Textarea', () => (
    <StoryForm>
      <Textarea
        id="message"
        name="message"
        label="Message"
      />
    </StoryForm>
  ));

