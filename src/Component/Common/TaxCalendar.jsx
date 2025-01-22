import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { get } from "../Hook/api";
const CustomEventCalendar = () => {
  const [event, setEvent] = useState(null);
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllEvents = async () => {
    setLoading(true);
    try {
      let allData = [];
      let currentPage = 1;
      let totalPages = 1;

      do {
        const response = await get(
          `/calendar-events?pagination[page]=${currentPage}&pagination[pageSize]=100`
        );
        const data = response?.data?.data || [];
        const meta = response?.data?.meta;

        allData = [...allData, ...data];
        totalPages = meta.pagination.pageCount;
        currentPage++;
      } while (currentPage <= totalPages);

      setEventData(allData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const taxEventDates = eventData.map((event) => ({
    date: new Date(event?.attributes.date),
    event: event?.attributes.event,
    discription: event?.attributes.discription,
  }));

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isTaxEvent = taxEventDates.some(
        (taxEvent) =>
          date.getDate() === taxEvent.date.getDate() &&
          date.getMonth() === taxEvent.date.getMonth()
      );
      return isTaxEvent ? "highlight-tax-date" : "";
    }
  };

  const handleDateClick = (date) => {
    const clickedEvent = taxEventDates.find(
      (taxEvent) =>
        date.getDate() === taxEvent.date.getDate() &&
        date.getMonth() === taxEvent.date.getMonth()
    );
    if (clickedEvent) {
      setEvent(clickedEvent);
    } else {
      setEvent(null);
    }
  };

  return (
    <div>
      {loading ? (
        "loading event data..."
      ) : (
        <>
          <h1 className="text-center  text-lg text-blue-500 mb-4 font-semibold ">
            Compliance Calendar
          </h1>
          <Calendar
            onClickDay={handleDateClick}
            tileClassName={tileClassName}
          />
          <div className="mt-4 ">
            <p className="text-blue-500 text-[16px]  font-semibold ">
              {event?.event}
            </p>
            <p className="text-black-500 text-sm">{event?.discription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomEventCalendar;
