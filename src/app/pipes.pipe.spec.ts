import { FormatNumberPipe } from './pipes.pipe';

describe('PipesPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
