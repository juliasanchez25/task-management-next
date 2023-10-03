import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import * as s from './styled-calendar';
import dayjs, { Dayjs } from 'dayjs';

type Calendar = {
  selectedDate: Dayjs;
  setSelectedDate: (value: any) => void;
}

const Calendar = ({ selectedDate, setSelectedDate }: Calendar) => {
  return (
    <div>
      <s.Title>Calendário</s.Title>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
          calendarWeekNumberHeaderText: '#',
          calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
      >
        <DateCalendar
          defaultValue={selectedDate ?? dayjs()}
          displayWeekNumber
          onChange={(value: any) => {
            setSelectedDate(value);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
