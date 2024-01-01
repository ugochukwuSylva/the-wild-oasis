import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import SpinnerMini from "../../ui/SpinnerMini";

function Stats({ bookings, confirmedStays, numDays, cabinCount, isLoading }) {
  // 1.
  const numBookings = bookings?.length;

  // 2.
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays?.length;

  // 4.
  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  // number of checked in nights / all available nights (num of days * num of cabins)

  return (
    <>
      <Stat
        title="Bookings"
        value={!numBookings ? <SpinnerMini /> : numBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
      />

      <Stat
        title="Sales"
        value={!sales ? <SpinnerMini /> : formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
        color="green"
      />

      <Stat
        title="Check ins"
        value={!checkins ? <SpinnerMini /> : checkins}
        icon={<HiOutlineCalendarDays />}
        color="indigo"
      />
      <Stat
        title="Occupancy rate"
        value={
          !occupation ? <SpinnerMini /> : Math.round(occupation * 100) + "%"
        }
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
