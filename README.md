# 핀테크 프로젝트

<!-- 필수 항목 -->

## 카테고리

| Application | Domain | Language | Framework |
| ---- | ---- | ---- | ---- |
| :white_check_mark: Desktop Web | :white_check_mark: AI | :white_check_mark: JavaScript | :black_square_button: Vue.js |
| :white_check_mark: Mobile Web | :white_check_mark: Big Data | :white_check_mark: TypeScript | :white_check_mark: React |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain | :black_square_button: C/C++ | :black_square_button: Angular |
| :black_square_button: Android App | :black_square_button: IoT | :black_square_button: C# | :white_check_mark: Node.js |
| :black_square_button: iOS App | :black_square_button: AR/VR/Metaverse | :white_check_mark: Python | :black_square_button: Flask/Django |
| :black_square_button: Desktop App | :black_square_button: Game | :white_check_mark: Java | :white_check_mark: Spring/Springboot |

<!-- 필수 항목 -->

# [태산:泰山](https://j9c211.p.ssafy.io)
소비 습관 개선을 통해 좀 더 쉽게 저축할 수 있도록 도와주는 플랫폼입니다.

## 🚩 목차
[1. 주요 서비스](##-💡-주요-서비스)\
[2. 개발 기간](##-📅-개발-기간)\
[2. 시연 영상]()\
[2. 팀원 및 역할](##-🤝-팀원-및-역할)\
[2. 주요 기술](##-🛠️-주요-기술)\
[2. 산출물](##-산출물)

## 💡 주요 서비스
  - **소비 패턴 분석**
    - 사용자의 거래내역을 연도, 월, 분류별로 분석하여 시각화하는 서비스
    - **Kakao Map API**를 통해 사용자의 거래 내역을 장소별로 자동 분류
    - 사용자는 특정 거래에 대한 영수증 사진을 등록할 수 있고, 등록시 **Naver Clova OCR**을 이용해 자동으로 상세한 구매내역 인식
    - 자체 구축 분류 모델을 이용하여 상세 구매내역을 상품 종류별로 분류
  - **샀다 치고**
    - 충동 구매를 하고 싶은 물품을 샀다고 가정하고 저축하도록 도와주는 서비스
    - 샀다 친 물건의 가격만큼 자체 비정기 적금 상품에 이체
    - 저축한 가격을 내가 가장 자주 소비한 카테고리로 환산하여 시각화
  - **습관 저금**
    - 여러 습관들을 교정하고 이를 통해 아낀 금액을 저축하도록 도와주는 서비스
    - 내가 등록한 습관 카테고리와 일치하는 전월 소비를 일할하여 해당 금액을 자체 비정기 적금 상품에 이체
    - 습관 저금을 통해 절약한 내역을 날짜/습관별로 분류하여 시각화
    - 해당 습관 카테고리의 새로운 결제가 발견되면 습관을 지키지 않은 것이므로 당일 저축 불가
  - **절약 챌린지**
    - 특정 기간 동안 설정한 금액으로 생활하고 아낀 금액을 저축하도록 도와주는 서비스
    - 챌린지에 성공했다면 챌린지 목표 금액에서 실제로 사용한 금액만큼 제외하여 자체 비정기 적금 상품에 이체
    - 새로운 결제가 발생하면 자동으로 남은 챌린지 금액이 변동되고, 이 순위로 시각화

## 📅 개발 기간
- 2023.08.14 ~ 2023.10.06 (7주)

## 🤝 팀원 및 역할
### 🖌️ FrontEnd
<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/ksungjoon">
              <img src="https://avatars.githubusercontent.com/u/122590593?v=4" width="200">
              <br />
              <b>ksungjoon</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/PARKHEECHANG">
              <img src="https://avatars.githubusercontent.com/u/122577719?v=4" width="200">
              <br />
              <b>PARKHEECHANG</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/heon-2">
              <img src="https://avatars.githubusercontent.com/u/122588664?v=4" width="200">
              <br />
              <b>heon-2</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            김성준
        </td>
        <td>
            박희창
        </td>
        <td>
            이지헌
        </td>
    </tr>
</table>

### 🗄️ BackEnd
<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/bnk159hair">
              <img src="https://avatars.githubusercontent.com/u/71634377?v=4" width="200">
              <br />
              <b>bnk159hair</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/byh9811">
              <img src="https://avatars.githubusercontent.com/u/50614241?v=4" width="200">
              <br />
              <b>byh9811</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/marugy">
              <img src="https://avatars.githubusercontent.com/u/91540464?v=4" width="200">
              <br />
              <b>marugy</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            김하영
        </td>
        <td>
            배용현
        </td>
        <td>
            신규람
        </td>
    </tr>
</table>

## 🛠️ 주요 기술
### 🔧 BackEnd
Spring Boot, JPA, QueryDSL, Spring Cloud Config, Spring Security
### ⚛️ FrontEnd
React.js, ReactQuery, TypeScript, Tailwind, PWA
### 🧠 AI
FastText, FastAPI, KoNLPy
### ☁️ InfraStructor
AWS, Nginx, Docker, Jenkins
### 🔐 Authencation
JWT, Redis
### 💬 Collaborate
GitLab, Jira, Figma, Notion
### 🌟 Etc
Kakao Map API, Naver Clova OCR, Naver Cloud Platform SMS

## 산출물
### 🏗️ 아키텍쳐 구조도
![taesan_artchitecture.png](exec/outputs/taesan_artchitecture.png)

### 🗃️ ERD
![taesan_erd.png](exec/outputs/taesan_erd.png)

### 🌐 Class Diagram
![완성되면 찍어요~.png](exec/outputs/taesan_erd.png)
