import React, { useState } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick';
import { MailTipLi, MailTipUl } from './EmailInputStyles';
import { EMAIL_DOMAIN } from 'constants/USER_MODIFY';

interface Props {
  email: string;
  setEmail: (value: string) => void;
}

const EmailInput = ({ email, setEmail }: Props) => {
  const [emailList, setEmailList] = useState(EMAIL_DOMAIN); //추천 이메일 리스트를 확인, 이메일 리스트 상태 관리
  const [selected, setSelected] = useState(-1); //키보드 선택
  const [isDrobBox, setIsDropbox] = useState(false); // 드롭박스 유무
  const inputRef = useOutsideClick(() => setIsDropbox(false));

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.includes('@')) {
      setIsDropbox(true);
      setEmailList(EMAIL_DOMAIN.filter((el) => el.includes(e.target.value.split('@')[1])));
    } else {
      setIsDropbox(false);
      setSelected(-1);
    }
  };

  const handleDropDownClick = (email: string, domain: string) => {
    setEmail(`${email.split('@')[0]}${domain}`);
    setIsDropbox(false);
    setSelected(-1);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDrobBox) {
      if (e.key === 'ArrowDown' && emailList.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.key === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.key === 'Enter' && selected >= 0) {
        handleDropDownClick(email, emailList[selected]);
      }
    }
  };

  return (
    <div>
      <div ref={inputRef}>
        <input
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => {
            onChangeEmail(e);
          }}
          onKeyUp={handleKeyUp}
        />
        {isDrobBox && (
          <MailTipUl>
            {emailList.map((domain, idx) => (
              <MailTipLi
                key={idx}
                onMouseOver={() => setSelected(idx)}
                onClick={() => handleDropDownClick(email, domain)}
                selected={selected === idx}
              >
                {email.split('@')[0]}
                {domain}
              </MailTipLi>
            ))}
          </MailTipUl>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
