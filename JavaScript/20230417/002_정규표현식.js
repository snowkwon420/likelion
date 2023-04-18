6. 권순호
#8273

6. 김하연 — 오늘 오전 10:33
오
(강사) 이호준 - LiCat — 오늘 오전 10:33
\[.*\]
[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]    # 모든 한글
[^[가-힣]+$]           # 한글만 허용
[^[가-힣\\s]+$]        # 공백 허용
6. 김하연 — 오늘 오전 10:35
넵
6. 최나경 — 오늘 오전 10:35
넵
(강사) 이호준 - LiCat — 오늘 오전 10:36
'paullab CEO leehojun hello CEO'
6. 손수민 — 오늘 오전 10:39
네네
6. 정준영 — 오늘 오전 10:39
네
(강사) 이호준 - LiCat — 오늘 오전 10:41
https://codepen.io/kvendrik/pen/bGKeEE
CodePen
Koen Vendrik
JavaScript Markdown Parser
...
JavaScript Markdown Parser
6. 최나경 — 오늘 오전 10:41
:__~5:
6. 정선빈 — 오늘 오전 10:41
:__~5:
6. 정신애 — 오늘 오전 10:41
:__~5:
6. 김하연 — 오늘 오전 10:42
오와
6. 오흥식 — 오늘 오전 10:48
넵!
6. 최나경 — 오늘 오전 10:48
넵
멋쟁이사자처럼 봇 - FES 5기
봇
 — 오늘 오전 10:50
쉬는 시간입니다! 10분 뒤 정각에 뵙겠습니다 😉
이미지
(강사) 이호준 - LiCat — 오늘 오전 10:50
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1
0.김미현 — 오늘 오전 10:51
[🧑‍🔧👩‍🔧찾습니다]
주간위클리 깜빡하신 분! 
:__~17: 함께 만드는 멋진 5기 문화:__~15: 에 함께하러가기 -->
https://forms.gle/BTkgsNCB4SEePpwL8 
멋쟁이사자처럼 봇 - FES 5기
봇
 — 오늘 오전 11:00
수업 시간입니다! 카메라를 켜고 자리에 앉아주세요 🤩
이미지
6. 오흥식 — 오늘 오전 11:00
나름..
6. 김하연 — 오늘 오전 11:00
재밋어요ㅎ
6. 박재영 — 오늘 오전 11:00
괜찮지 않아요,,ㅎ
(강사) 이호준 - LiCat — 오늘 오전 11:02
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1


// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
/^ hello / g
/ hello$ / g
/^ hello$ / g

// 5. 모든문자 매핑(.)
/ hello / g
/ h.llo / g
/ hello..world / g

// 6. 모든문자 매핑
/ h[eao]llo / g

// 7. 범위
/ h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/
https://school.programmers.co.kr/learn/courses/30/lessons/49993
프로그래머스 스쿨
코딩테스트 연습 - 스킬트리
이미지
https://school.programmers.co.kr/learn/courses/30/lessons/120826
프로그래머스 스쿨
코딩테스트 연습 - 특정 문자 제거하기
이미지
6. 최나경 — 오늘 오전 11:05
넵
6. 오흥식 — 오늘 오전 11:05
넵
6. 한수정 — 오늘 오전 11:05
넵
6. 오연주 — 오늘 오전 11:05
네
6. 김하연 — 오늘 오전 11:07
그러게요//
6. 유하은 — 오늘 오전 11:07
SHIFT를 누르면 좋아요
기분이
6. 최범관 — 오늘 오전 11:09
한 문자만 바꿔서?
6. 이미현 — 오늘 오전 11:09
모두 찾지 않아서
6. 오흥식 — 오늘 오전 11:10
넵
6. 김하연 — 오늘 오전 11:10
:08:
(강사) 이호준 - LiCat — 오늘 오전 11:16
// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g') 
    return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
    // 패턴이 들어가 있으면 true 없으면 false
    (/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1


    // 3. 일반문자열
    / hello / g

    // 4. 처음과 끝
    /^ hello / g
    / hello$ / g
    /^ hello$ / g

    // 5. 모든문자 매핑(.)
    / hello / g
    / h.llo / g
    / hello..world / g

    // 6. 모든문자 매핑
    / h[eao]llo / g

        // 7. 범위
        / h[a - zA - Z0 - 9]llo / g

            // 8. 부정
            / h[^ ae]llo / g

                // 9. 그루핑 규칙
                / (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
                // /(?:on|ues)/gm
                // /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
                /.(a | e | o)ll./ gm
                    // /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
                    // /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

                    ("hello hallo hello").match(/.(a|e|o)ll./g)
                    ("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
                    ("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g') 
    return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')
https://school.programmers.co.kr/learn/courses/30/lessons/120851
프로그래머스 스쿨
코딩테스트 연습 - 숨어있는 숫자의 덧셈 (1)
이미지
6. 최나경 — 오늘 오전 11:18
넵
6. 오흥식 — 오늘 오전 11:18
넵
6. 오연주 — 오늘 오전 11:18
네
6. 신민철 — 오늘 오전 11:18
네
6. 윤서준 — 오늘 오전 11:18
넵
6. 오흥식 — 오늘 오전 11:18
넵
0-9
6. 최나경 — 오늘 오전 11:21
0-9
6. 이미현 — 오늘 오전 11:23
reduce 앞에 괄호 하나가 빠진거 같아용
6. 신은수 — 오늘 오전 11:23
괄호가...
map 괄호
6. 이미현 — 오늘 오전 11:23
parseInt(x))
6. 이도하 — 오늘 오전 11:23
(x)뒤에 괄호
(강사) 이호준 - LiCat — 오늘 오전 11:24
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
function solution(my_string) {
    my_string.match(/[0-9]/g)
}
"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
6. 이석형 — 오늘 오전 11:27
2번 문제 링크까지 부탁드려요
(강사) 이호준 - LiCat — 오늘 오전 11:27
// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
6. 김하연 — 오늘 오전 11:30
고구마요ㅎ
6. 최나경 — 오늘 오전 11:30
그릭요거트요
6. 정종미 — 오늘 오전 11:30
돈가스욤
6. 노태희 — 오늘 오전 11:30
에그드랍이요
6. 정혜민 — 오늘 오전 11:30
후르츠링과 설렁탕이요~
6. 최나경 — 오늘 오전 11:30
사실 방금 삶은계란도 먹었읍니다
6. 정수연 — 오늘 오전 11:30
김치찌개
6. 윤선호 — 오늘 오전 11:30
피자요
6. 우경석 — 오늘 오전 11:30
불고기 해먹으렵니다
6. 정종미 — 오늘 오전 11:31
재밋어욤
6. 최나경 — 오늘 오전 11:31
재밌어요~~
6. 김하연 — 오늘 오전 11:31
재미서욯
(강사) 이호준 - LiCat — 오늘 오전 11:32
https://school.programmers.co.kr/learn/courses/30/lessons/120891
프로그래머스 스쿨
코딩테스트 연습 - 369게임
이미지
||
이미지
(강사) 이호준 - LiCat — 오늘 오전 11:33
해답 쓰레드
스레드
해답 쓰레드
메시지 20개 ›
6. 정신애
2시간 전
38분까지 하겠습니다. 🙂
6. 김하연 — 오늘 오전 11:33
원래 푼거라..
(강사) 이호준 - LiCat — 오늘 오전 11:39
3331131
6. 정수연 — 오늘 오전 11:39
4
(강사) 이호준 - LiCat — 오늘 오전 11:39
163009
6. 정수연 — 오늘 오전 11:40
3!
6. 최나경 — 오늘 오전 11:40
3
6. 손수민 — 오늘 오전 11:40
3
6. 한수정 — 오늘 오전 11:40
3번
6. 권규리 — 오늘 오전 11:40
3
6. 오연주 — 오늘 오전 11:40
3
6. 오흥식 — 오늘 오전 11:41
넵
6. 이상용 — 오늘 오전 11:41
네
6. 손수민 — 오늘 오전 11:41
네네
6. 오흥식 — 오늘 오전 11:41
근데 런타임에러가 뜹니당
(강사) 이호준 - LiCat — 오늘 오전 11:44
function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}
function solution(order) {
    return order.toString().match(/[369]/g).length;
}
 
6. 박재영 — 오늘 오전 11:45
재밌어요~
(강사) 이호준 - LiCat — 오늘 오전 11:46
// 3번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 오답! null일때 length가 없습니다!
function solution(order) {
    return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
(0).toString().match(/[369]/g)
(10).toString().match(/[369]/g)

// 정답
function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}

function solution(order) {
    return (order.toString().match(/[369]/g) ?? []).length;
}
https://school.programmers.co.kr/learn/courses/30/lessons/120913
6. 손수민 — 오늘 오전 11:47
네네
6. 우경석 — 오늘 오전 11:50
{4}
6. 오흥식 — 오늘 오전 11:50
{3}
6. 최범관 — 오늘 오전 11:50
{}
멋쟁이사자처럼 봇 - FES 5기
봇
 — 오늘 오전 11:50
점심 시간입니다! 다들 식사 맛있게 하세요 😍
1시에 뵙겠습니다! 😎
이미지
6. 오흥식 — 오늘 오전 11:50
식사 맛있게 하십숑!!
6. 오연주 — 오늘 오전 11:50
감사합니다
6. 정종미 — 오늘 오전 11:50
네엥 맛쩜하세용!!!
6. 한수빈 — 오늘 오전 11:50
:__~2:
6. 이미현 — 오늘 오전 11:50
맛점입니당!
6. 김하연 — 오늘 오전 11:50
맛점하세요~!
6. 안나별 — 오늘 오전 11:50
감사합니다!
6. 정현빈 — 오늘 오전 11:50
감사합니다
6. 권순호 — 오늘 오전 11:50
맛점하세요!!
6. 정준영 — 오늘 오전 11:50
감사합니다~
6. 홍승표 — 오늘 오전 11:50
맛점하세요!
6. 한상헌 — 오늘 오전 11:50
맛점하세요!
0. 정재인 — 오늘 오전 11:50
:__~2:
6. 정신애 — 오늘 오전 11:50
식사 맛있게 하세요!
6. 정수연 — 오늘 오전 11:50
맛점하세요~
6. 이선근 — 오늘 오전 11:50
맛점하세요~
6. 정유송 — 오늘 오전 11:50
맛점하세요!
6. 안동섭 — 오늘 오전 11:50
점심 맛있게 드세요!
(강사) 이호준 - LiCat — 오늘 오전 11:50
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
확장
message.txt
6KB
0. 김태진 — 오늘 오전 11:51
맛점입니다!🙌
6. 김지우 — 오늘 오전 11:51
맛점하세요!
0.김미현 — 오늘 오전 11:53
[🧙‍♀️찾습니다]
아직 주간설문 안하셨다면, 점심시간 동안 💜 💗 
위클리설문을 완료하러가기 -->> 😁
https://forms.gle/BTkgsNCB4SEePpwL8
Google Forms: Sign-in
Access Google Forms with a personal Google account or Google Workspace account (for business use).
멋쟁이사자처럼 봇 - FES 5기
봇
 — 오늘 오후 1:00
수업 시간입니다! 카메라를 켜고 자리에 앉아주세요 🤩
이미지
6. 손수민 — 오늘 오후 1:00
네네
6. 이양래 — 오늘 오후 1:00
넵
6. 권순호 — 오늘 오후 1:00
넵
6. 이미현 — 오늘 오후 1:00
네엡
6. 정승규 — 오늘 오후 1:00
넵!!
6. 최나경 — 오늘 오후 1:00
네
(강사) 한재현 - Wade — 오늘 오후 1:04
개발자는 돈을 벌 구석도 많아요 ㅎㅎㅎ
6. 이미현 — 오늘 오후 1:06
:3736patrickomg:
6. 손수민 — 오늘 오후 1:06
:__~5:
6. 권순호 — 오늘 오후 1:06
꿈...
6. 이미현 — 오늘 오후 1:06
6개월에 2억...?
6. 오나영 — 오늘 오후 1:06
🥹
6. 이미현 — 오늘 오후 1:06
:3430squidwarddab:
6. 최나경 — 오늘 오후 1:06
:2982pepecry:
6. 이미현 — 오늘 오후 1:06
생각보다... 크지 않다....
6. 이도하 — 오늘 오후 1:07
:__~5:
6. 손수민 — 오늘 오후 1:07
:__~5:
6. 최나경 — 오늘 오후 1:07
🥹
6. 한수정 — 오늘 오후 1:07
🥹
6. 이양래 — 오늘 오후 1:07
:cool~1:
6. 권규리 — 오늘 오후 1:07
:2982pepecry:
6. 손수민 — 오늘 오후 1:08
🙏
6. 정신애 — 오늘 오후 1:08
:cool~1:
6. 이미현 — 오늘 오후 1:08
:14:
6. 김지우 — 오늘 오후 1:08
:_good4:
6. 김하연 — 오늘 오후 1:08
감덩..
6. 한수정 — 오늘 오후 1:08
:__~3:✨
6. 김하연 — 오늘 오후 1:09
ㅜㅜㅜㅜ
6. 정종미 — 오늘 오후 1:09
🥹
6. 권순호 — 오늘 오후 1:09
ㅋㅋㅋ
﻿
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)

// 패턴이 들어가 있으면 true 없으면 false
//(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1


// 3. 일반문자열
// / hello / g

// 4. 처음과 끝
// /^ hello / g
// / hello$ / g
// /^ hello$ / g

// 5. 모든문자 매핑(.)
// / hello / g
// / h.llo / g
// / hello..world / g

// 6. 모든문자 매핑
// / h[eao]llo / g

// 7. 범위
// / h[a - zA - Z0 - 9]llo / g

// 8. 부정
// / h[^ ae]llo / g

// 9. 그루핑 규칙
// / (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
// /.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

// ("hello hallo hello").match(/.(a|e|o)ll./g)
// ("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
// ("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')


// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .map(x => parseInt(x))
    .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
    .match(/[0-9]/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)

// 정답 유형2 : 문자를 제거한다!
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp"
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)


// 3번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 오답! null일때 length가 없습니다!
function solution(order) {
    return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
(0).toString().match(/[369]/g)
(10).toString().match(/[369]/g)

// 정답
function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}

function solution(order) {
    return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
    let result = []
    for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i+n))
    return result
}

[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]
[0-9]{1,n}


"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null


// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
  return my_string
      .replace(/[^0-9]/g, '')
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 오답
function solution(my_string) {
  return my_string
      .match(/\d+/g)
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
  return (my_string.match(/\d+/g)??[])
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/\d/g)
"aAb1B2cC34oOp".match(/\d+/g)
"aAb1B2c111C34oO123p".match(/\d+/g)
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g);