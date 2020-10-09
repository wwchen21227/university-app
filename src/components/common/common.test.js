import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BasicImage, BasicLink, NoResult, WithLoading } from './common';

describe('Common Components', () => {
  describe('BasicImage', () => {
    it('should render without crash', () => {
      const fakeProps = {
        url: '',
        alt: ''
      };

      render(<BasicImage {...fakeProps} />);
    });
  });

  describe('BasicLink', () => {
    it('should render without crash', () => {
      const fakeProps = {
        url: '',
        text: ''
      };

      render(<BasicLink {...fakeProps} />);
    });
  });

  describe('NoResult', () => {
    it('should render without crash', () => {
      render(<NoResult />);
    });
  });

  describe('WithLoading', () => {
    it('should render without crash', () => {
      render(
        <WithLoading isLoading>
          <span>Hello</span>
        </WithLoading>
      );
    });
  });
});
