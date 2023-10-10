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

<h3> 프로젝트 소개 </h3>
프로젝트 명 : 태산:泰山 절약 저축 플랫폼

* 주요 기능
  - **소비 패턴 분석** : 사용자의 거래내역을 기반으로 소비패턴 분석 결과 제공
  - **샀다 치고** : 충동적인 소비를 억제하고 저축하는 기능
  - **습관 저금** : 소비 습관 개선을 위해 습관을 관리하고 저축하는 기능
  - **절약 챌린지** : 다른 사람들과 일정 기간동안 진행하는 절약 챌린지

* 주요 기술
  * Spring Boot, JPA, QueryDSL, Spring Cloud Config, Spring Security
  * React.js, ReactQuery, TypeScript, Tailwind, PWA
  * FastText, FastAPI, KoNLPy
  * AWS, Nginx, Docker, Jenkins
  * JWT, Redis
  * GitLab, Jira, Figma, Notion
  * Kakao Map API, Naver Clova OCR, Naver Cloud Platform SMS

* 배포 환경
  * URL : https://j9c211.p.ssafy.io


---

## 🚩 목차
[1. 주요 서비스](##-💡-주요-서비스)\
[2. 개발 기간](##-📅-개발-기간)\
[3. 서비스 시연](##-🎪-서비스-시연)\
[4. 팀원 및 역할](##-🤝-팀원-및-역할)\
[5. 주요 기술](##-🛠️-주요-기술)\
[6. 산출물](##-산출물)


# 태산: 泰山(소비 관리 및 저축 플랫폼) :bank:

<div align=center>

![웹 화면](exec/outputs/웹화면.png)

📅 프로젝트 기간 : 2023.08.14 ~ 2023.10.06 (7주)

## [태산:泰山](https://j9c211.p.ssafy.io/):credit_card:
소비 습관으로 이뤄내는 저축! :dollar:

</div>

# 태산 기획 :book:

저축은 예금, 적금, 주식, 투자 등 다양한 방식으로 이뤄지고 있습니다.<br>
하지만 큰 금액으로 꾸준히 해야한다는 부담감이 느껴지곤 합니다.<br>
사용자의 소비습관 관리를 통해 잘못된 소비 습관을 개선하고 소액으로 저축을 진행하여 부담없이 꾸준히 저축할 수 있는 플랫폼을 기획하게 되었습니다. :smile:

# 태산 소개📄
* 태산은 사용자의 소비 습관을 개선하고 저축 습관을 기를 수 있는 플랫폼입니다!:astonished:
* "소비 패턴 분석" 기능으로 장소, 카테고리 별 소비 패턴을 확인할 수 있습니다! :speech_balloon:
* "샀다 치고" 기능으로 충동구매를 억제할 수 있습니다! :no_entry:
* "습관 저금통" 기능으로 줄이고 싶은 소비를 관리하며 저축이 가능합니다!:lock:
* "절약 챌린지" 기능으로 지인들과 함께 저축 대결이 가능합니다!:family_mmgg:


# 주요 서비스 소개 💡
* 태산의 주요 서비스를 소개합니다!!

### 회원 관련 기능 :man:
|                회원가입                |                 로그인                 |
|:----------------------------------:|:-----------------------------------:|
| ![회원가입](exec/outputs/gif/회원가입.gif) | ![로그인](exec/outputs/gif/랜딩&로그인.gif) | 
|    회원 정보를 입력한 뒤 회원가입을 진행합니다    |         GIF를 이용한 랜딩페이지입니다.          |
* NCP SMS를 이용해 문자 인증을 구현했습니다.

### 자산 관련 기능
|               자산 연동                |               결제               |
|:----------------------------------:|:------------------------------:|
| ![자산연동](exec/outputs/gif/자산연동.gif) | ![결제](exec/outputs/gif/결제.gif) |
|     마이데이터 API를 준수하여 자산을 연동합니다.     | 카드 내역을 생성하기 위해 결제 기능을 구현했습니다.  |

|                         카드 결제 내역 조회                          |              상세 결제 내역 조회 / 영수증 분석               |
|:------------------------------------------------------------:|:-----------------------------------------------:|
|            ![결제내역](exec/outputs/gif/거래내역조회.gif)             |  ![영수증분석](exec/outputs/gif/상세조회및OCR.gif) |
| 무한 스크롤을 이용한 페이지네이션을 구현했습니다.<br/> 커서 페이지네이션을 이용해 성능을 향상시켰습니다. |      FastText 모델을 추가 학습시켜 상세 카테고리를 분류합니다.       |

### 티끌 적금통
|              티끌 적금통 생성               |                     티끌 적금통 해지                      |
|:------------------------------------:|:--------------------------------------------------:|
| ![적금통생성](exec/outputs/gif/적금통생성.gif) |        ![적금통해지](exec/outputs/gif/적금통해지.gif)        | 
|  실제 적금 상품을 모방하여 기획한 티끌 적금통을 생성합니다.   | 설정한 2.3%의 이율을 적용하여 적금통을 해지하고 등록한 계좌로 모은 돈을 이체시킵니다. |

### 소비패턴 분석
|                소비 패턴 분석                 |
|:---------------------------------------:|
| ![소비패턴분석](exec/outputs/gif/소비패턴분석.gif)  | 
| Kakao Map API를 이용해 장소 카테고리를 분류하여 제공합니다. |

    - 사용자의 거래내역을 연도, 월, 분류별로 분석하여 시각화하는 서비스
    - **Kakao Map API**를 통해 사용자의 거래 내역을 장소별로 자동 분류
    - 사용자는 특정 거래에 대한 영수증 사진을 등록할 수 있고, 등록시 **Naver Clova OCR**을 이용해 자동으로 상세한 구매내역 인식
    - 자체 구축 분류 모델을 이용하여 상세 구매내역을 상품 종류별로 분류

### 샀다치고
|               샀다치고 물품 목록               |               샀다치고 물품 등록               |
|:--------------------------------------:|:--------------------------------------:|
| ![샀다치고목록](exec/outputs/gif/샀다치고목록.gif) | ![샀다치고등록](exec/outputs/gif/샀다치고등록.gif) | 
|          샀다고 가정했던 물품을 확인합니다.           |           샀다고 가정할 물품을 등록합니다.           |

  - **샀다 치고**
    - 충동 구매를 하고 싶은 물품을 샀다고 가정하고 저축하도록 도와주는 서비스
    - 샀다 친 물건의 가격만큼 자체 비정기 적금 상품에 이체
    - 저축한 가격을 내가 가장 자주 소비한 카테고리로 환산하여 시각화

### 절약 챌린지
|                절약 챌린지 생성                 |                절약 챌린지 모집                 |
|:----------------------------------------:|:----------------------------------------:|
| ![절약챌린지생성](exec/outputs/gif/절약챌린지생성.gif) | ![절약챌린지모집](exec/outputs/gif/절약챌린지모집.gif) | 
|              절약 챌린지를 생성합니다.              |            절약 챌린지 참가자를 모집합니다.            |

|                절약 챌린지 진행                 |                절약 챌린지 저축                 |
|:----------------------------------------:|:----------------------------------------:|
| ![절약챌린지진행](exec/outputs/gif/절약챌린지진행.gif) | ![이전챌린지저축](exec/outputs/gif/절약챌린지저축.gif) | 
|              절약 챌린지를 진행합니다.              |           절약 챌린지로 아낀 돈을 저축합니다.           |


  - **절약 챌린지**
    - 특정 기간 동안 설정한 금액으로 생활하고 아낀 금액을 저축하도록 도와주는 서비스
    - 챌린지에 성공했다면 챌린지 목표 금액에서 실제로 사용한 금액만큼 제외하여 자체 비정기 적금 상품에 이체
    - 새로운 결제가 발생하면 자동으로 남은 챌린지 금액이 변동되고, 이 순위로 시각화

### 습관 저금통
|                  습관 저금 월별조회                  |                 습관 저금 생성                 |
|:--------------------------------------------:|:----------------------------------------:|
| ![습관저금통월별조회](exec/outputs/gif/습관저금통월별조회.gif) | ![습관저금통생성](exec/outputs/gif/습관저금통생성.gif) | 
|             습관 저금 내역을 월별로 조회합니다.             |           지킬 지출 습관을 생성합니다.            |

|                습관 저금통 상세                 |                 습관저금통저금                  |
|:----------------------------------------:|:----------------------------------------:|
| ![습관저금통상세](exec/outputs/gif/습관저금통상세.gif) | ![이전챌린지저축](exec/outputs/gif/절약챌린지저축.gif) | 
|           습관 저금 내역을 상세 조회합니다.            |         습관을 지켜 아낀 내역을 월별로 조회합니다.         |

  - **습관 저금**
    - 여러 습관들을 교정하고 이를 통해 아낀 금액을 저축하도록 도와주는 서비스
    - 내가 등록한 습관 카테고리와 일치하는 전월 소비를 일할하여 해당 금액을 자체 비정기 적금 상품에 이체
    - 습관 저금을 통해 절약한 내역을 날짜/습관별로 분류하여 시각화
    - 해당 습관 카테고리의 새로운 결제가 발견되면 습관을 지키지 않은 것이므로 당일 저축 불가

### 마이페이지
|                 마이페이지 계좌 변경                  |                 마이페이지 내 정보 변경                  |
|:--------------------------------------------:|:----------------------------------------------:|
| ![마이페이지계좌변경](exec/outputs/gif/마이페이지계좌변경.gif) | ![마이페이지내정보수정](exec/outputs/gif/마이페이지내정보수정.gif) | 
|              계정에 등록된 계좌를 변경합니다.              |                 계정의 정보를 변경합니다.                 |

|                  마이페이지 비밀번호 변경                   |                  마이페이지 적금 상품 정보                  |
|:------------------------------------------------:|:------------------------------------------------:|
| ![마이페이지비밀번호변경](exec/outputs/gif/마이페이지비밀번호변경.gif) | ![마이페이지적금상품정보](exec/outputs/gif/마이페이지적금상품정보.gif) | 
|                 계정의 비밀번호를 변경합니다.                 |               적금 상품의 정보를 확인합니다.               |

|                 마이페이지 회원 탈퇴                  |                  알림                  |
|:--------------------------------------------:|:------------------------------------------------:|
| ![마이페이지회원탈퇴](exec/outputs/gif/마이페이지회원탈퇴.gif) | ![알림](exec/outputs/gif/알림.gif) |
|                  계정을 탈퇴합니다.                  |               사용자 및 기능 상태 알림을 표시합니다.               |

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
