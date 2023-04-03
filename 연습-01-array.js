// let classmates=["철수", "영희", "훈이"]
// undefined

classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.len
undefined
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer = ["워라벨", "연봉", "신분상승", "커리어점프", "개쩌는 개발자의 명상"]
undefined
developer
    (5)['워라벨', '연봉', '신분상승', '커리어점프', '개쩌는 개발자의 명상']0: "워라벨"1: "연봉"2: "신분상승"3: "커리어점프"4: "개쩌는 개발자의 명상"length: 5[[Prototype]]: Array(0)
developer[2]
'신분상승'
let dream = ["커리어점프", "성공", "할수있다"]
undefined
developer.concat(dream)
    (8)['워라벨', '연봉', '신분상승', '커리어점프', '개쩌는 개발자의 명상', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
undefined
'커리어점프', '성공'result
    (8)['워라벨', '연봉', '신분상승', '커리어점프', '개쩌는 개발자의 명상', , '할수있다']