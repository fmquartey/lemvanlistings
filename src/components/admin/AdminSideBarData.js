import { AccountCircle, Alarm, Apartment, Chat, Favorite, Home, ListAlt, People, PeopleAlt, Person, Schedule, Settings } from "@mui/icons-material";

export const AdminSideBarData = [
    {
        name: "Home",
        path: "/app/admin",
        icon: <Home sx={{
            fontSize: "20px",
        }} />
    },
    {
        name: "Listings",
        path: "/app/admin/listings",
        icon: <ListAlt sx={{
            fontSize: "20px",
        }} />
    },
    {
        name: "Appointments",
        path: "/app/admin/appointments",
        icon: <Schedule sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: " Landlords",
        path: "/app/admin/landlord",
        icon: <People sx={{
            fontSize: "20px",
        }} />
    },
    {
        name: "Tenants",
        path: "/app/admin/tenants",
        icon: <Person sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: "Users",
        path: "/app/admin/users",
        icon: <PeopleAlt sx={{
            fontSize: "20px",
        }} />,
        active: false
    }
]