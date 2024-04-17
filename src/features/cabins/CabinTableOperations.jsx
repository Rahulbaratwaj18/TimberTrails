
import TableOperations from "../../ui/TableOperations";
import SortBy from "../../ui/SortBy";

import Filter from "../../ui/Filter";
function CabinTableOperations() {
    return (
      
      <TableOperations>
       <Filter filterField="discount" options={[
        {value:"all",label:"All"},
        {value:"no-discount",label:"No Discount"},
        {value:"with-discount",label:"With Discount"},

       ]}/>
       <SortBy options={[
        {value:"name-asc",label:"Sort the name (A-Z)"},
        {value:"name-desc",label:"Sort the name (Z-A)"},
        {value:"regularPrice-asc",label:"Sort the Price(low to high)"},
        {value:"regularPrice-desc",label:"Sort the Price(hight to low)"},
        {value:"maxCapacity-asc",label:"Sort the Capacity(low to high)"},
        {value:"maxCapacity-desc",label:"Sort the Capacity(high to low)"},
      ]}/>
      </TableOperations>

      
    
    )
}

export default CabinTableOperations
