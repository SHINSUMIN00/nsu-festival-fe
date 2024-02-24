import App from "../App.tsx";
import NoticePage from "@/pages/NoticePage";

export const routesConfig = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/notice",
        element: <NoticePage />,
    },
]