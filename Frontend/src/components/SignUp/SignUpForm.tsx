import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import { formatPhone } from 'hooks/useFormatPhone';
import EmailInput from './EmailInput';
import PostcodeList from './PostcodeList';
import { FormProps } from 'types/SignUpForm';
import axios from 'axios';

import { SignUpPincode } from './SignUpPincode';

const schema = yup.object().shape({
  loginId: yup.string().required('아이디를 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 다릅니다.')
    .required('비밀번호를 확인해주세요.'),
  name: yup.string().required('이름을 입력해주세요.'),
  phone: yup.string().required(' '),
  email: yup.string().required('이메일을 입력해주세요.'),
  postcode: yup.string().required('주소를 선택해주세요.'),
  zonecode: yup.string().required(' '),
  detailPostcode: yup.string().required('상세 주소를 입력해주세요.'),
});

const SingUpForm = () => {
  const navigate = useNavigate();
  // 폼 데이터
  const [formData, setFormData] = useState<FormProps>();

  // 휴대폰
  const [phone, setPhone] = useState(''); // 하이픈상태
  const [inputSMS, setInputSMS] = useState(false); // SMS Input View 여부
  const [phoneLengthError, setPhoneLengthError] = useState(false); // 휴대폰 길이 에러
  const [countDown, setCountDown] = useState(-1); // 카운트 다운 시간
  // 보여지는 휴대폰 번호 형식 변환 ('-' 하이픈 추가)
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  // 인증 확인
  const [validLoginId, setValidLoginId] = useState(0);
  const [numberSMS, setNumberSMS] = useState('');
  const [validPhone, setValidPhone] = useState(0);
  const [validPin, setValidPin] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(schema) });

  // 이메일 입력 확인
  const watchedPostcode = watch('postcode');
  const watchedZonecode = watch('zonecode');
  const watchedDetailPostcode = watch('detailPostcode');

  // 아이디 인증 요청
  const watchedLoginId = watch('loginId');
  const handleRequestLoginId = () => {
    // 아이디 보내기
    axios
      .get(`https://j9c211.p.ssafy.io/api/member-management/members/check?id=${watchedLoginId}`)
      .then((res) => {
        console.log(res.data.response);
        if (res.data.response) {
          // 결과 받기 (중복 X)
          setValidLoginId(1);
        } else {
          // 결과 받기 (중복 O)
          setValidLoginId(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(watchedLoginId);
  };
  useEffect(() => {
    setValidLoginId(0);
  }, [watchedLoginId]);

  // SMS 번호 받기
  const handleRequestSMS = () => {
    if (phone.length < 13) {
      // 유효하지 않은 번호
      setPhoneLengthError(true);
      setInputSMS(false);
      return;
    } else if (phone.length >= 13) {
      // 전송
      axios
        .post(`https://j9c211.p.ssafy.io/api/auth-management/auths/sms/send`, {
          to: extractNumbers(phone),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(typeof extractNumbers(phone));
          console.log(err);
        });
      setPhoneLengthError(false);
      setInputSMS(true);
      setCountDown(180); // 인증 180(3분) 설정
      return;
    }
  };

  const onChangeSMS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberSMS(e.target.value);
  };

  // SMS 번호 인증 확인
  const handleResponseSMS = () => {
    console.log(numberSMS);
    axios
      .post(`https://j9c211.p.ssafy.io/api/auth-management/auths/sms/check`, {
        phone: extractNumbers(phone),
        sms: numberSMS,
      })
      .then((res) => {
        if (res.data.response.success) {
          setValidPhone(1);
        } else {
          setValidPhone(-1);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  };

  // 인증 시간
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countDown !== null && countDown > 0) {
      timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else if (countDown === 0) {
      setInputSMS(false);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [countDown]);

  // 휴대폰 '-' 하이픈 제외
  const extractNumbers = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  // 핀코드 상태
  const [pincode, setPincode] = useState('');
  const [simplePassword, setSimplePassword] = useState('');
  const [viewPincode, setViewPincode] = useState(false);

  const onValid = (data: FormProps) => {
    // 모든 인증 성공
    if (validLoginId === 1 && validPhone === 1) {
      // 간편 비밀번호 설정
      setViewPincode(true);
      setFormData(data); // 데이터 저장
      // 로그인 중복 확인 안함
    } else if (validLoginId === -1 || validLoginId === 0) {
      console.log('중복확인필요');
      setValidLoginId(-1);
      // 휴대폰 인증 확인 안함
    } else if (validPhone === -1 || validPhone === 0) {
      console.log('휴대폰 인증 필요');
      setValidPhone(-1);
    } else if (validPin === -1 || validPin === 0) {
      console.log('간편비밀번호 설정 필요');
      setValidPin(-1);
    }
  };

  // 회원가입
  const onSubmit = (data: FormProps) => {
    // 간편 비밀번호가 설정되면
    if (simplePassword !== '') {
      axios
        .post('https://j9c211.p.ssafy.io/api/member-management/members/join', {
          loginId: data.loginId,
          password: data.password,
          email: data.email,
          name: data.name,
          phone: extractNumbers(data.phone),
          address: data.postcode,
          zipCode: data.zonecode,
          simplePassword: simplePassword,
          addressDetail: data.detailPostcode,
        })
        .then((res) => {
          console.log('회원가입 성공함');
          console.log(res);
          setViewPincode(false);
          navigate('/login');
        })
        .catch((err) => {
          console.log(err);
          setViewPincode(false);
        });
    }

    const formattedData = {
      ...data,
      phone: extractNumbers(data.phone),
    };

    console.log(formattedData);
  };

  // const handlePincodeSuccess = () => {
  //   setViewPincode(false); // 핀코드 입력이 성공적으로 완료되면 모달을 닫습니다.
  //   console.log(simplePassword);
  //   if (formData) {
  //     onSubmit(formData);
  //   }
  // };

  useEffect(() => {
    if (simplePassword && formData) {
      onSubmit(formData);
      setSimplePassword('');
    }
  }, [simplePassword]);

  return (
    <div className=" flex flex-col justify-center items-center">
      {viewPincode && <SignUpPincode pincode={pincode} setPincode={setPincode} setSimplePassword={setSimplePassword} />}
      <div className="text-2xl tb:text-3xl dt:text-4xl mb-5">회원가입</div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 justify-center items-center">
            <Input size="lg" label="*아이디" crossOrigin="anonymous" {...register('loginId')} />
            <Button
              type="button"
              className="bg-[#0067AC] h-10 w-36 flex items-center justify-center flex-col"
              onClick={handleRequestLoginId}
            >
              중복 확인
            </Button>
            {/* {validLoginId === 0 && <span className="text-gray-500 ">❓</span>} */}
            {validLoginId === -1 && <span className="text-red-500 ">❌</span>}
            {validLoginId === 1 && <span className="text-blue-500 ">✔</span>}
            {validLoginId === -1 && <div className="text-red-500 ">아이디 중복 확인을 해주세요.</div>}
          </div>
          {errors.loginId && <span className="text-red-500 ">{errors.loginId.message}</span>}
          <div>
            <Input size="lg" label="*비밀번호" crossOrigin="anonymous" {...register('password')} type="password" />
            {errors.password && <span className="text-red-500 ">{errors.password.message}</span>}
          </div>
          <div>
            <Input
              size="lg"
              label="*비밀번호 확인"
              crossOrigin="anonymous"
              {...register('passwordConfirm')}
              type="password"
            />
            {errors.passwordConfirm && <span className="text-red-500 ">{errors.passwordConfirm.message}</span>}
          </div>
          <div>
            <Input size="lg" label="*이름" crossOrigin="anonymous" {...register('name')} />
            {errors.name && <span className="text-red-500 ">{errors.name.message}</span>}
          </div>
          <div className="">
            <Input
              size="lg"
              label="*휴대폰 번호"
              {...register('phone')}
              value={phone}
              crossOrigin="anonymous"
              onChange={onPhoneChange}
              disabled={countDown > 0}
            />
            {!inputSMS && (
              <Button type="button" className="bg-[#0067AC] h-10 w-36 mt-1" onClick={handleRequestSMS}>
                인증번호 전송
              </Button>
            )}
            {inputSMS && (
              <div className="flex gap-1 mt-1">
                <Input className="" label="*인증번호" crossOrigin="anonymous" onChange={onChangeSMS} />
                <Button
                  type="button"
                  className="bg-[#0067AC] h-10 w-36 flex items-center justify-center flex-col"
                  onClick={handleResponseSMS}
                >
                  인증 확인 <br /> {countDown ? `${Math.floor(countDown / 60)}:${countDown % 60}` : ''}
                </Button>
              </div>
            )}
            {errors.phone && <span className="text-red-500 ">{errors.phone.message}</span>}
            {phoneLengthError && <span className="text-red-500 ">유효하지 않은 번호입니다.</span>}
            {validPhone === 1 && <span className="text-blue-500 ">인증되었습니다.</span>}
            {validPhone === -1 && <div className="text-red-500 ">휴대폰 인증을 해주세요.</div>}
          </div>
          <div>
            {/* 이메일 */}
            <EmailInput register={register} errors={errors} />
            {errors.email && <span className="text-red-500 ">{errors.email.message}</span>}
          </div>
          {/* 주소 */}
          <PostcodeList register={register} errors={errors} />
          {errors.postcode && <span className="text-red-500 ">{errors.postcode.message}</span>}
          {errors.zonecode && <span className="text-red-500 ">{errors.zonecode.message}</span>}
          {errors.detailPostcode && <span className="text-red-500 ">{errors.detailPostcode.message}</span>}
          {/* {(watchedDetailPostcode === '' || watchedZonecode === '' || watchedPostcode === '') && (
            <div className="text-red-500">주소를 입력해주세요.</div>
          )} */}
        </div>
        <Button className="mt-6 bg-sub text-lg" type="submit" fullWidth>
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default SingUpForm;
