import { LikeBusType, MainDataType } from "./types";

export const MAIN_DATA:MainDataType = {
    busLikes: [1,3],
    menu: {
        items: ['미트소스스파게티[돈육:국내산]','쌀밥/팽이버섯장국','더운채소','클링크컷감자튀김*케찹','단무지','포기김치'],
        subItems: ['사과/숭늉'],
    },
    hotPosts: [
        {
            postId: 0,
            title: '7기 곧수료 대박',
            likeCount: 17,
            commentCount: 9,
            createdDate: '2022-11-09',
        }
    ]
};

export const BUS_DATA = {
    busStops:[
        {
            previousBusStop: '정부청사역 4번출구 앞',
            nextBusStop: '갈마역',
        },
        {
            previousBusStop: '유성문화원',
            nextBusStop: '큰맘할매순대국 맞은편',
        },
        {
            previousBusStop: '가수원네거리',
            nextBusStop: '정림삼거리',
        },
        {
            previousBusStop: '가장네거리',
            nextBusStop: '매평오거리',
        },
        {
            previousBusStop: '유성온천역',
            nextBusStop: '노은역',
        },
    ],
    message: '버스 운행시간이 아닙니다.',
}