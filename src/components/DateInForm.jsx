import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover } from 'keep-react'

export const DatePickerComponent = ({ selectedDates, setSelectedDates }) => {
  return (
    <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-lg border border-metal-50 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {selectedDates ? (
            <>
              {format(selectedDates?.from ?? new Date(), 'LLL dd, y')} - {format(selectedDates?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="range" numberOfMonths={2} selected={selectedDates} onSelect={setSelectedDates} showOutsideDays={true} />
      </Popover.Content>
    </Popover>
  )
}
