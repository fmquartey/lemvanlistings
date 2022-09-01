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
        path: "/app/tenant",
        icon: <Apartment sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    {
        name: " Favorites",
        path: "/app/tenant/favorites",
        icon: <Favorite sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    // {
    //     name: "Chat",
    //     path: "/app/tenant/chat",
    //     icon: <Chat sx={{
    //         fontSize: "20px",
    //     }} />,
    //     active: false
    // },
    {
        name: "Profile",
        path: "/app/tenant/profile",
        icon: <AccountCircle sx={{
            fontSize: "20px",
        }} />,
        active: false
    },
    // {
    //     name: "Settings",
    //     path: "/app/tenant/settings",
    //     icon: <Settings sx={{
    //         fontSize: "20px",
    //     }} />,
    //     active: false
    // },
]