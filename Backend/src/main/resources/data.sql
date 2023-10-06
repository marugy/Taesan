use S09P22C211;
insert into member values (1, now(), now(), null, "광주광역시 광산구", "장덕동", "05526", "user1@naver.com",null, "admin1",null, "박희창", "admin1", "010-7185-7744",null, "123456");
insert into member values (2, now(), now(), null, "광주광역시 광산구", "수완동", "02326", "user2@naver.com",null, "admin2",null, "조인성", "admin2", "010-2323-2562",null, "123456");
insert into member values (3, now(), now(), null, "경기도 성남시 중원구", "은행동", "12415", "user3@naver.com",null, "admin3",null, "이을용", "admin3", "010-7457-4421", null,"123456");
insert into member values (4, now(), now(), null, "경기도 성남시 중원구", "은행1동", "36234", "user4@naver.com",null, "admin4",null, "호난동", "admin4", "010-2314-2563",null, "123456");
insert into member values (5, now(), now(), null, "경기도 성남시 중원구", "금광동", "12412", "user5@naver.com",null, "admin5",null, "박지정", "admin5", "010-7185-7734",null, "123456");
insert into member values (6, now(), now(), null, "경기도 성남시 중원구", "금광1동", "12427", "user6@naver.com",null, "admin6",null, "고길동", "admin6", "010-7634-9945",null, "123456");
insert into member values (7, now(), now(), null, "경기도 성남시 중원구", "금광2동", "83252", "user7@naver.com",null, "admin7",null, "박희리", "admin7", "010-7808-4421",null, "123456");
insert into member values (8, now(), now(), null, "경기도 성남시 수정구", "모란동", "76541", "user8@naver.com",null, "admin8",null, "윤복희", "admin8", "010-1246-2563",null, "123456");
insert into member values (9, now(), now(), null, "강원도 강릉시", "강릉동", "54763", "user9@naver.com",null, "admin9",null, "김주혁", "admin9", "010-7185-5244",null, "123456");
insert into member values (10, now(), now(), null, "제주도 제주시", "제주동", "67543", "user10@naver.com",null, "admin10",null, "박후건", "admin10", "010-2345-2563",null, "123456");
insert into member values (11, now(), now(), null, "경상북도 울릉군", "울릉동", "65431", "user11@naver.com",null, "admin11",null, "박규은", "admin11", "010-2662-8522",null, "123456");

-- 챌린지 더미데이터
insert into challenge values(1,date_sub(now(),INTERVAL 15 DAY) ,now(),date_sub(now(),INTERVAL 8 DAY),7,50000,now(),2,"티비 값 아낍니다","123123-123123",1);
insert into challenge values(2,date_sub(now(),INTERVAL 32 DAY),now(),date_sub(now(),INTERVAL 22 DAY),10,150000,now(),2,"컴퓨터 살거야","123123-123123",1);
insert into challenge values(3,date_sub(now(),INTERVAL 25 DAY),now(),date_sub(now(),INTERVAL 18 DAY),7,90000,now(),2,"티끌모아 태산","331722-123123",2);
insert into challenge values(4,date_sub(now(),INTERVAL 66 DAY),now(),date_sub(now(),INTERVAL 49 DAY),17,150000,now(),2,"강한이형 생일선물","124-123123",1);
insert into challenge values(5,date_sub(now(),INTERVAL 12 DAY),now(),date_sub(now(),INTERVAL 5 DAY),7,7800,now(),2,"파인엔슈 먹을거야","634643-123123",1);
insert into challenge values(6,date_sub(now(),INTERVAL 27 DAY),now(),date_sub(now(),INTERVAL 26 DAY),1,10000,now(),2,"만원의 행복","3457535-123123",2);
insert into challenge values(7,date_sub(now(),INTERVAL 45 DAY),now(),date_sub(now(),INTERVAL 35 DAY),10,100000,now(),2,"10만원의 행복","347735-123123",2);
insert into challenge values(8,date_sub(now(),INTERVAL 36 DAY),now(),date_sub(now(),INTERVAL 32 DAY),4,100000,now(),2,"아껴서 아낀다","2523523-123123",3);
insert into challenge values(9,date_sub(now(),INTERVAL 40 DAY),now(),date_sub(now(),INTERVAL 30 DAY),10,300000,now(),2,"광주 2반 다모여","2532663-123123",2);
insert into challenge values(10,date_sub(now(),INTERVAL 99 DAY),now(),date_sub(now(),INTERVAL 97 DAY),7,100000,now(),2,"11조는 그냥 아껴버려","236623-123123",4);

-- 챌린지 참여자 목록
insert into challenge_participant values(1,date_sub(now(),INTERVAL 15 DAY) ,now(), true, 5000, 1,1);
insert into challenge_participant values(2,date_sub(now(),INTERVAL 15 DAY) ,now(), false, 5000, 1,2);
insert into challenge_participant values(3,date_sub(now(),INTERVAL 32 DAY) ,now(), false, 5000, 2,1);
insert into challenge_participant values(4,date_sub(now(),INTERVAL 32 DAY) ,now(), true, 5000, 2,2);
insert into challenge_participant values(5,date_sub(now(),INTERVAL 32 DAY) ,now(), true, 5000, 2,3);
insert into challenge_participant values(6,date_sub(now(),INTERVAL 25 DAY) ,now(), true, 5000, 3,1);
insert into challenge_participant values(7,date_sub(now(),INTERVAL 66 DAY) ,now(), false, 5000, 4,1);
insert into challenge_participant values(8,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 4,2);
insert into challenge_participant values(9,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 4,3);
insert into challenge_participant values(10,date_sub(now(),INTERVAL 66 DAY) ,now(), false, 5000, 5,1);
insert into challenge_participant values(11,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 6,2);
insert into challenge_participant values(12,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 7,2);
insert into challenge_participant values(13,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 8,3);
insert into challenge_participant values(14,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 9,2);
insert into challenge_participant values(15,date_sub(now(),INTERVAL 66 DAY) ,now(), true, 5000, 10, 4);

-- 습관 저금통
insert into habit values(1,now() ,now(), now(),"담배", 0, 0, 4500,"금연하겠습니다", 1);
insert into habit values(2,now() ,now(), now(),"커피", 0, 0, 1500,"커피를 줄여보겠습니다", 1);
insert into habit values(3,now() ,now(), now(),"술", 0, 0, 5500,"금주하겠습니다", 1);


-- 습관 저금통 기록
insert into habit_log values(1,now() ,now(), "2023-09-01", 3000,1);
insert into habit_log values(2,now() ,now(), "2023-09-02", 4000,1);
insert into habit_log values(3,now() ,now(), "2023-09-03", 5000,1);
insert into habit_log values(4,now() ,now(), "2023-09-04", 6000,1);
insert into habit_log values(5,now() ,now(), "2023-09-04", 6000,2);
insert into habit_log values(6,now() ,now(), "2023-10-03", 3000,1);
insert into habit_log values(7,now() ,now(), "2023-10-02", 3000,2);
insert into habit_log values(8,now() ,now(), "2023-10-01", 3000,1);
insert into habit_log values(9,now() ,now(), "2023-10-02", 3000,1);

-- 거래내역

-- 영수증
insert into receipt values ('1', '1');

-- 영수증 품목
insert into receipt_list values('1', '담배', '담배', '10', '1');