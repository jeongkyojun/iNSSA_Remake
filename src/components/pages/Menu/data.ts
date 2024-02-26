import { MenuTypes } from "./types";

const Dates = new Date();
const today = Dates.getDay();
const nowDate = Dates.getDate();
const firstDay = nowDate-today;
export const MENU_OF_WEEK:MenuTypes = {
    startDate:'2020-11-20',
    endDate:'2020-11-27',
    menus:[
        {
            dayOfTheWeek: '일',
            items: [],
            subItems: [],
            date: (firstDay).toString(),
        },
        {
            dayOfTheWeek: '월',
            items: ['미트소스스파게티[돈육:국내산]','쌀밥/팽이버섯장국','더운채소','클링크컷감자튀김*케찹','단무지','포기김치'],
            subItems: ['사과/숭늉'],
            date: (firstDay).toString()+1,
        },
        {
            dayOfTheWeek: '화',
            items: ['온도토리묵국','쌀밥','고기산적조림[돈육,계육:국내산]','호박전','마늘종지무침','깍두기'],
            subItems: ['숭늉'],
            date: (firstDay).toString()+2,
        },
        {
            dayOfTheWeek: '수',
            items: ['치킨가스[계육:국내산]','쌀밥','미니우동','감자샐러드','오이피클','포기김치'],
            subItems: ['샐러드바/숭늉'],
            date: (firstDay).toString()+3,
        },
        {
            dayOfTheWeek: '목',
            items: ['꽃게된장찌개','흑미밥','고사리무침','야채튀김','닭볶음탕[계육:국내산]','깍두기'],
            subItems: [],
            date: (firstDay).toString()+4,
        },
        {
            dayOfTheWeek: '금',
            items: ['팽이버섯장국','쌀밥','고기산적조림[돈육,계육:국내산]','연근조림','콩나물무침','열무김치'],
            subItems: ['숭늉'],
            date: (firstDay).toString()+5,
        },
        {
            dayOfTheWeek: '토',
            items: [],
            subItems: [],
            date: (firstDay).toString(),
        },
    ],
};
