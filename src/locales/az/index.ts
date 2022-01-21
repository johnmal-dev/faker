import type { LocaleDefinition } from '../..';
import address from './address';
import commerce from './commerce';
import company from './company';
import date from './date';
import internet from './internet';
import name from './name';
import phone_number from './phone_number';

const az: LocaleDefinition = {
  title: 'Azerbaijani',
  separator: ' və ',
  address,
  commerce,
  company,
  date,
  internet,
  name,
  phone_number,
};

export default az;