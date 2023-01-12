import { TopDocUserHandler } from './topDocUser/controller/topDocUser.handler';
import { TopDocUserRepository } from './topDocUser/data/topDocUser.repository';
import { TopDocUserService } from './topDocUser/topDocUser.service';
import { AddressHandler } from './address/controller/address.handler';
import { AddressRepository } from './address/data/address.repository';
import { AddressService } from './address/address.service';
import { AvailabilityHandler } from './availability/controller/availability.handler';
import { AvailabilityService } from './availability/availability.service';
import { AvailabilityRepository } from './availability/data/availability.repository';
import { HourlyHandler } from './hourly/controller/hourly.handler';
import { HourlyService } from './hourly/hourly.service';
import { HourlyRepository } from './hourly/data/hourly.repository';
import { HolidayHandler } from './holiday/controller/holiday.handler';
import { HolidayService } from './holiday/holiday.service';
import { HolidayRepository } from './holiday/data/holiday.repository';
import { PeriodHandler } from './period/controller/period.handler';
import { PeriodService } from './period/period.service';
import { PeriodRepository } from './period/data/period.repository';

export const topDocUserHandler = new TopDocUserHandler(new TopDocUserService(new TopDocUserRepository()));
export const addressHandler = new AddressHandler(new AddressService(new AddressRepository()));
export const availabilityHandler = new AvailabilityHandler(new AvailabilityService(new AvailabilityRepository()));
export const hourlyHandler = new HourlyHandler(new HourlyService(new HourlyRepository()));
export const holidayHandler = new HolidayHandler(new HolidayService(new HolidayRepository()));
export const periodHandler = new PeriodHandler(new PeriodService(new PeriodRepository()));