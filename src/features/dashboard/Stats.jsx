import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({bookings,confirmedStays,numDays,cabinCount}) {
    const sales = bookings?.reduce((acc,cur) => acc+cur.totalPrice ,0);
    const ocuupancyrate = (confirmedStays?.reduce((acc,cur) => acc+cur.numNights,0) )/ (numDays * cabinCount);
    return (
        <>
        <Stat title="bookings" value={bookings?.length} color="blue" icon={<HiOutlineBriefcase />}/>
        <Stat title="Sales" value={formatCurrency(sales)} color="green" icon={<HiOutlineBanknotes />}/>
        <Stat title="Checkins" value={confirmedStays?.length} color="indigo" icon={<HiOutlineCalendarDays />}/>
        <Stat title="Occupancy" value={Math.round(ocuupancyrate *100) + "%"} color="yellow" icon={<HiOutlineChartBar />}/>
        </>
    )
}

export default Stats
