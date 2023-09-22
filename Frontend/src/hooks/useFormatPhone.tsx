// useFormat.js
import { useState, Dispatch, SetStateAction } from 'react';

const formatPhone = (phoneStr: string) => {
  const cleaned = phoneStr.replace(/\D/g, '');

  if (cleaned.length === 10) {
    if (cleaned.charAt(0) === '0' && cleaned.charAt(1) === '2') {
      // 10 : 00-0000-0000
      return `${cleaned.substring(0, 2)}-${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
      // 10 : 000-000-0000
    } else {
      return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
    }
    // 11 : 000-0000-0000
  } else {
    return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 7)}-${cleaned.substring(7)}`;
  }
};

const useFormatPhone = (initialPhone: string): [string, Dispatch<SetStateAction<string>>] => {
  const [phone, setPhone] = useState(initialPhone);
  const formattedPhone = formatPhone(phone);

  return [formattedPhone, setPhone];
};

export default useFormatPhone;
