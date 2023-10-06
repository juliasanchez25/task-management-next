import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarMonth } from '@mui/icons-material';
import * as s from './styled-calendar';
import dayjs, { Dayjs } from 'dayjs';

type Calendar = {
  selectedDate: Dayjs;
  setSelectedDate: (value: any) => void;
}

const Calendar = ({ selectedDate, setSelectedDate }: Calendar) => {
  return (
    <>
      <s.Title>
        <CalendarMonth fontSize={'small'} />
        Calendário
      </s.Title>
      <s.Container>
        <s.StyledLocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{
            calendarWeekNumberHeaderText: '#',
            calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
          }}
        >
          <s.StyledDateCalendar
            defaultValue={selectedDate ?? dayjs()}
            displayWeekNumber
            onChange={(value: any) => {
              setSelectedDate(value);
            }}
          />
        </s.StyledLocalizationProvider>
      </s.Container>
    </>
  );
};

export default Calendar;
