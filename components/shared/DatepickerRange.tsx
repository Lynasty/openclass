import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import Image from 'next/image';
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr); 

type DatepickerProps = {
  form?: any;
};

const DatepickerRange = ({ form }: DatepickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form?.control}
          name="startDateTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 dark:bg-neutral-800 px-4 py-2">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="Calendar start"
                    width={24}
                    height={24}
                    className="filter-grey"
                  />
                  <p className="ml-3 whitespace-nowrap text-grey-600">
                    Date de début:{" "}
                  </p>
                  <DatePicker
                    locale="fr"
                    calendarStartDay={1}
                    selected={field.value}
                    onChange={(date: Date) => {
                      field.onChange(date);
                      setStartDate(date);
                      setEndDate((prevDate) => {
                        if(prevDate < date) {
                          return date;
                        }
                        return prevDate;
                      })
                    }}
                    showTimeSelect
                    startDate={startDate}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeInputLabel="Heure:"
                    timeCaption="Heure"
                    timeFormat="HH:mm"
                    wrapperClassName="datePicker"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form?.control}
          name="endDateTime"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 dark:bg-neutral-800 px-4 py-2">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="Calendar end"
                    width={24}
                    height={24}
                    className="filter-grey"
                  />
                  <p className="ml-3 whitespace-nowrap text-grey-600">
                    Date de fin:{" "}
                  </p>
                  <DatePicker
                    locale="fr"
                    selected={endDate < field.value ? field.value : endDate}
                    onChange={(date: Date) => {
                      field.onChange(date);
                      setEndDate(date);
                    }}
                    showTimeSelect
                    startDate={startDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeInputLabel="Heure:"
                    timeCaption="Heure"
                    timeFormat="HH:mm"
                    calendarStartDay={1}
                    wrapperClassName="datePicker"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default DatepickerRange