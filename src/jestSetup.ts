import {isLive} from './tests/uttilities/helpers';
import nock from 'nock';

beforeAll(() => {
  if (!isLive()) {
    nock.disableNetConnect();
  }
});

afterAll(() => {
  nock.enableNetConnect();
})