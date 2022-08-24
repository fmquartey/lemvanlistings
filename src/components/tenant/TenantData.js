import { AccountCircle, Apartment, Chat, Favorite, ListAlt, Settings } from "@mui/icons-material";

export const TenantData = [
    {
        name: "Browse Listings",
        path: "/",
        icon: <ListAlt sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: "Rentals",
        path: "/app/tenant/rentals",
        icon: <Apartment sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: " Favorites",
        path: "/app/tenant/favorite",
        icon: <Favorite sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: "Chat",
        path: "/app/tenant/chat",
        icon: <Chat sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: "Profile",
        path: "/app/landlord/profile",
        icon: <AccountCircle sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: "Settings",
        path: "/app/landlord/settings",
        icon: <Settings sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
]