// useFormat.js
import { useState, Dispatch, SetStateAction } from 'react';

export const formatPhone = (phoneStr: string) => {
  const cleaned = phoneStr.replace(/\D/g, '');

  if (cleaned.length >= 4) {
    if (7 <= cleaned.length && cleaned.length < 11) {
      if (cleaned.charAt(0) === '0' && cleaned.charAt(1) === '2') {
        // 10 : 00-0000-0000
        return `${cleaned.substring(0, 2)}-${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
      } else {
        // 10 : 000-000-0000
        return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
      }
    } else if (cleaned.length >= 11) {
      // 11 : 000-0000-0000
      return `${cleaned.substring(0, 3)}-${cleaned.substring(3, 7)}-${cleaned.substring(7)}`;
    } else {
      return `${cleaned.substring(0, 3)}-${cleaned.substring(3)}`;
    }
  } else {
    return cleaned;
  }
};

const useFormatPhone = (initialPhone: string): [string, Dispatch<SetStateAction<string>>] => {
  const [phone, setPhone] = useState(initialPhone);
  const formattedPhone = formatPhone(phone);

  return [formattedPhone, setPhone];
};

export default useFormatPhone;
