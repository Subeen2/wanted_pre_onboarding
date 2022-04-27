*Dropdown
datalist 태그를 사용하여 구현하였습니다. 
select 태그는 사용자의 입력을 받을 수 없기 때문에 datalist를 선택하였습니다.

*Input
이메일 박스는 값의 변화에 따라 emailValueChange 함수를 호출하여, 
설정해둔 형식에 맞는지 validation하고 결과에 따라 체크박스와 invalid message를 출력할 수 있도록 하였습니다.
input에 pattern 속성을 주어 구현하게 되면 말풍선 형태로 invalid message가 출력되어 원하는 디자인이 아니므로
따로 형식 검사를 하는 함수를 만들게 되었습니다.
나머지 디자인 적인 부분은 state를 각각 하나씩 관리해야 한다고 생각하여 
해당하는 classname을 추가하고 삭제하는 방식으로 구현하였습니다.

*Tab
tab 3개에 해당하는 state들을 각각 정의해주고 하나가 클릭되었을 시 나머지 두가지는 초기화 시켜주어 css를 조정하도록 구현하였습니다.
각 state는 독립적으로 관리되어야 하므로 함수도 동일한 방식으로 구현하였습니다.

*Toggle
toggle은 on & off 두가지 값만을 가지므로 하나의 state를 정의하였습니다.
boolean 형태로 구현할 시 코드가 조금 더 길어지기 때문에 classname을 조정하는 방식을 택했습니다.
Vender Prefix를 사용하여 크로스 브라우징을 방지하였습니다.
before,after 가상 요소를 사용하여 조금더 깔끔하게 디자인 요소를 추가하였습니다.