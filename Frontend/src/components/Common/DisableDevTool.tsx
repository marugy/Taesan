import React, { useEffect } from 'react';

const DisalbeDevTool = () => {
  useEffect(() => {
    const disableDevToolsShortcutKeys = (e: any) => {
      // 몇몇 브라우저는 F12 키를 keyCode 123으로 인식합니다.
      if (e.keyCode === 123) {
        e.preventDefault();
      }

      // 'Ctrl+Shift+I' 및 'Ctrl+Shift+J'를 차단합니다.
      if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', disableDevToolsShortcutKeys);

    return () => {
      window.removeEventListener('keydown', disableDevToolsShortcutKeys);
    };
  }, []);

  useEffect(() => {
    const disableRightClick = (e: any) => {
      e.preventDefault();
    };

    window.addEventListener('contextmenu', disableRightClick);

    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return null;
};

export default DisalbeDevTool;
