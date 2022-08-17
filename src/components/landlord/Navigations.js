import { AccountCircle, Alarm, Chat, FavoriteBorder, Home, ListAlt, PeopleAlt, Settings } from "@mui/icons-material";

export const navigation = [
    {
        name: "Home",
        path: "/app/landlord",
        icon: <Home sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: "Listings",
        path: "/app/landlord/listings",
        icon: <ListAlt sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: " Saved Listings",
        path: "/app/landlord/saved",
        icon: <FavoriteBorder sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: "Tenants",
        path: "/app/landlord/tenants",
        icon: <PeopleAlt sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: "Appointments",
        path: "/app/landlord/appointments",
        icon: <Alarm sx={{
            fontSize: "20px",

        }} />,
    },
    {
        name: "Chats",
        path: "/app/landlord/chat",
        icon: <Chat sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: "Profile",
        path: "/app/landlord/profile",
        icon: <AccountCircle sx={{
            fontSize: "20px",
        }} />,
    },
    {
        name: "Settings",
        path: "/app/landlord/settings",
        icon: <Settings sx={{
            fontSize: "20px",
        }} />,
    },
]