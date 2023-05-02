import { BiCricketBall } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";
import { BiTennisBall } from "react-icons/bi";
import { FaGolfBall } from "react-icons/fa";
import { MdSportsRugby } from "react-icons/md";
import { GiBoxingGlove } from "react-icons/gi";
import { GiBasketballBasket } from "react-icons/gi";

export const sidebarMenu = [
    { icon: BiCricketBall, gameName: "Cricket", subMenu: ["Indian Premier League"] },
    { icon: GiSoccerBall, gameName: "Soccer", subMenu: ["English Championship", "Italian Serie B", "Spanish Segunda Division", "Greek Super League"] },
    { icon: BiTennisBall, gameName: "Tennis", subMenu: ["Prague Challenger 2023", "ATP Mdrid 2023"] },
    { icon: FaGolfBall, gameName: "Golf", subMenu: [""] },
    { icon: MdSportsRugby, gameName: "Rugby", subMenu: [""] },
    { icon: GiBoxingGlove, gameName: "Boxing", subMenu: [""] },
    { icon: GiBasketballBasket, gameName: "Basketball", subMenu: [""] }
]

export const navMenu = [
    "Sports", "in-play", "ipl-cup", "Indian Casino", "Live casino", "Slots"
]

export const liveScoreButton = ["All", "Match odd", "Bookmaker", "Fancy"]

export const liveScores = [
    {
        tabName: "Winner",
        placeScores: [
            {
                placeName: "Gujarat",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                placeName: "Mumbai",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]
    },
    {
        tabName: "Winner",
        placeScores: [
            {
                placeName: "Gujarat",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
            {
                placeName: "Mumbai",
                values: [
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 },
                    { top: 3.6, bottom: 100 }
                ]
            },
        ]
    }
]