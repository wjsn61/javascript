let persons = [
    { name: "철수", age: 17 },
    { name: "영희", age: 22 },
    { name: "도우너", age: 5 },
    { name: "그루트", age: 65 },
    { name: "도비", age: 3 }
]
// undefined
for (let count = 0; count < persons.length; count++) {
    if (persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }

    // }
    // // VM1979:5 미성년자입니다
    // // VM1979:3 성인입니다
    // // VM1979:5 미성년자입니다
    // // VM1979:3 성인입니다
    // // VM1979:5 미성년자입니다
    // for (let count = 0; count < persons.length; count++) {
    //     if (persons[count].age >= 19) {
    //         console.log(persons[count].name + "님은 성인입니다")
    //     } else {
    //         console.log(persons[count].name + "님은 미성년자입니다")
    //     }

    // }
    // // VM2375:5 철수님은 미성년자입니다
    // // VM2375:3 영희님은 성인입니다
    // // VM2375:5 도우너님은 미성년자입니다
    // // VM2375:3 그루트님은 성인입니다
    // // VM2375:5 도비님은 미성년자입니다
    // undefined

    const fruits = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" }
    ]
    // undefined
    for (let k = 0; k < fruits.length; k++) {
        console.log(fruits[k].number + "" + fruits[k].title)
    }
    // VM3571:2 1레드향
    // VM3571:2 2샤인머스켓
    // VM3571:2 3산청딸기
    // VM3571:2 4한라봉
    // VM3571:2 5사과
    // VM3571:2 6애플망고
    // VM3571:2 7딸기
    // VM3571:2 8천혜향
    // VM3571:2 9과일선물세트
    // VM3571:2 10귤
    // undefined


    for (let k = 0; k < fruits.length; k++) {
        console.log(`${fruits[k].number} ${fruits[k].title}`)
    }
    // VM3917:2 1 레드향
    // VM3917:2 2 샤인머스켓
    // VM3917:2 3 산청딸기
    // VM3917:2 4 한라봉
    // VM3917:2 5 사과
    // VM3917:2 6 애플망고
    // VM3917:2 7 딸기
    // VM3917:2 8 천혜향
    // VM3917:2 9 과일선물세트
    // VM3917:2 10 귤
    // undefined
    for (let k = 0; k < fruits.length; k++) {
        console.log(`과일 차트 ${fruits[k].number}위는 ${fruits[k].title}입니다`)
// }
// VM4032:2 과일 차트 1위는 레드향입니다
// VM4032:2 과일 차트 2위는 샤인머스켓입니다
// VM4032:2 과일 차트 3위는 산청딸기입니다
// VM4032:2 과일 차트 4위는 한라봉입니다
// VM4032:2 과일 차트 5위는 사과입니다
// VM4032:2 과일 차트 6위는 애플망고입니다
// VM4032:2 과일 차트 7위는 딸기입니다
// VM4032:2 과일 차트 8위는 천혜향입니다
// VM4032:2 과일 차트 9위는 과일선물세트입니다
// VM4032:2 과일 차트 10위는 귤입니다
// undefined