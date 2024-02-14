import { fireEvent, render, screen } from '@testing-library/react';
import Message from '../../../src/components/Message/Message';
//
describe.skip('Unit | Component | Message', () => {
  let mockRef = {};
  beforeEach(() => {});
  it('should render properly', () => {
    render(
      <Message
        messageRef={mockRef}
        className={'test-class'}
        message={'test message'}
      />
    );
    const message = screen.getByText('test message');

    expect(message).toBeInTheDocument();
  });
});
