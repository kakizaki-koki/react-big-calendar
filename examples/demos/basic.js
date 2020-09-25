import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'
import * as dates from '../../src/utils/dates'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let Basic = ({ localizer }) => (
  <Calendar
    companyStartDay={21}
    companyHoliday={[new Date(2015, 2, 25),new Date(2015, 2, 26)]}
    japaneseHoliday={[new Date(2015, 3, 2),new Date(2015, 3, 3)]}
    events={events}
    views={allViews}
    step={60}
    selectable
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
  />
)

export default Basic
