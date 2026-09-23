import Url from "./url";
import { faTable, faChartLine, faNewspaper } from "@fortawesome/free-solid-svg-icons";

const ROUTING = [
    {
        name: 'Dashboard',
        url: Url.Dashboard,
        icon: faTable
    },
    {
        name: 'Cryptos',
        url: Url.Cryptos,
        icon: faChartLine
    },
    {
        name: 'News',
        url: Url.News,
        icon: faNewspaper
    }   
]

export default ROUTING;