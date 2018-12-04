import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea } from '../../src';
import StoryForm from './form';
import { boolean, withKnobs } from "@storybook/addon-knobs";

storiesOf('Redux Form', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => (
    <StoryForm>
      <Textarea
        id="message"
        name="message"
        label="Message"
        disabled={boolean('Disabled', false)}
        autosize={boolean('Autosize', false)}
      />
    </StoryForm>
  ));

