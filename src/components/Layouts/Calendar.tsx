import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useStore, actions } from '~/reducers';
import Api from '~/services';

const format: string = 'YYYYMMDD'; //'DD/MM/YYYY';

function Calender() {
  const [value, setValue] = useState(new Date());
  const [states, dispatch] = useStore();
  const { date } = states;

  const handleChangeDate = (value: any): void => {
    setValue((prev) => {
      return value;
    });
    dispatch(actions.changeDate(1)); // thực hiện bật lại điều kiện có thể lọt vào useEffect.
  };

  useEffect(() => {
    if (+date > 0) {
      // dieu kien de khong lot vao day
      if (value) {
        const selectedDate: string = moment(new Date(value)).format(format);

        // kiem tra neu co global state thi khong goi lai api
        if (date !== selectedDate) {
          async function callApi() {
            const data = await Api.getMatches(selectedDate);

            dispatch(actions.setMatch(data.data.data));
            dispatch(actions.changeDate(data.data.date));
          }

          callApi();
        }
      }
    }
  }, [value, date]);

  return (
    <div className="rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 mb-4 p-2 text-sm">
      <Calendar onChange={handleChangeDate} value={value} />
    </div>
  );
}

export default Calender;
