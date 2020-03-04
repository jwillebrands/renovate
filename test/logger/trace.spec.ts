import { mock } from 'jest-mock-extended';
import { RenovateFormatter, FormatterArgs } from '../../lib/logger/trace';
import { Logger } from '../../lib/logger/common';

let logged: string;
let logger: Logger = {} as any;

describe('trace', () => {
  beforeEach(() => {
    logged = null;
    logger = {
      trace(args: any) {
        logged = args;
      },
    } as any;
  });
  it('inits', () => {
    expect(new RenovateFormatter(null)).toBeDefined();
  });
  it('onEntry', () => {
    const formatter = new RenovateFormatter(logger);
    formatter.onEntry({
      ...mock<FormatterArgs>(),
      name: 'method',
      args: ['arg1', 'arg2'],
    });
    expect(logged).toMatchSnapshot();
  });
  it('onExit', () => {
    const formatter = new RenovateFormatter(logger);
    formatter.onExit({
      ...mock<FormatterArgs>(),
      name: 'method',
      args: ['arg1', 'arg2'],
    });
    expect(logged).toMatchSnapshot();
  });
});