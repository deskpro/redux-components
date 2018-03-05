import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Input } from '@deskpro/react-components';
import { FieldGroup } from '../../src';

storiesOf('Redux Form', module)
  .addDecorator(withKnobs)
  .add('FieldGroup', () => {
    const meta = {
      error:   text('Error', 'Required'),
      touched: boolean('Touched', false)
    };

    return (
      <div style={{ margin: 20 }}>
        <FieldGroup label="Username" meta={meta}>
          <Input id="username" name="username" />
        </FieldGroup>
      </div>
    );
  });

