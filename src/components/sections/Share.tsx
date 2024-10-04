import classNames from 'classnames/bind';
import styles from '@components/sections/Share.module.scss';
import Section from '@shared/Section';
import { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CopyToClipboard } from 'react-copy-to-clipboard';

declare global {
  interface Window {
    Kakao: any;
  }
}
const cx = classNames.bind(styles);

interface ShareProps {
  groomName: string;
  brideName: string;
  date: string;
}
function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      console.log(window);

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
      }
    };
  }, []);

  const handleHareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ${brideName} 결혼합니다`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
        imageUrl:
          'data:image/png;base64,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',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  };

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleHareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다');
          }}
        >
          <button>
            <IconClipBoard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  );
}

function IconKakao() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g
        data-name="kakao talk chat media social"
        id="kakao_talk_chat_media_social"
      >
        <path d="M29.88,13.06a1,1,0,0,0-1,1c0,5.42-5.78,9.83-12.88,9.83a15.91,15.91,0,0,1-2.19-.16,1,1,0,0,0-.89.34,13.88,13.88,0,0,1-4,3,8.32,8.32,0,0,0,.71-3.91,1,1,0,0,0-.56-.81c-3.75-1.83-6-4.92-6-8.28C3.12,8.63,8.9,4.22,16,4.22A14.15,14.15,0,0,1,26.87,8.79,1,1,0,1,0,28.4,7.5C25.64,4.2,21,2.22,16,2.22,7.79,2.22,1.12,7.53,1.12,14.06c0,4,2.44,7.6,6.56,9.8a8.82,8.82,0,0,1-1.29,3.91A.85.85,0,0,0,6.3,28a1.39,1.39,0,0,0,.54,1.52,1.35,1.35,0,0,0,1.52.07,18.49,18.49,0,0,0,5.72-3.8,18.71,18.71,0,0,0,1.92.11c8.21,0,14.88-5.31,14.88-11.83A1,1,0,0,0,29.88,13.06Z" />
        <path d="M10.79,17.62A1,1,0,0,0,12.08,17l1.06-2.76L14.21,17a1,1,0,0,0,.93.64,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.3l-2-5.18a1,1,0,0,0-1.87,0l-2,5.18A1,1,0,0,0,10.79,17.62Z" />
        <path d="M17.51,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,1,1h2.56a1,1,0,0,0,0-2H18.51V11.5A1,1,0,0,0,17.51,10.5Z" />
        <path d="M8.46,17.68a1,1,0,0,0,1-1V12.5h.75a1,1,0,0,0,0-2H6.71a1,1,0,0,0,0,2h.75v4.18A1,1,0,0,0,8.46,17.68Z" />
        <path d="M22.46,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,2,0v-1.2L25,17.32a1,1,0,0,0,.77.36A1,1,0,0,0,26.53,16l-2-2.34,1.8-1.41a1,1,0,0,0-1.23-1.58L23.46,12V11.5A1,1,0,0,0,22.46,10.5Z" />
      </g>
    </svg>
  );
}

function IconClipBoard() {
  return (
    <svg
      data-name="Слой 1"
      id="Слой_1"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M110.13,9.69A6.41,6.41,0,0,0,105.77,8h-32a10.18,10.18,0,0,0-2.48-4.86A9.94,9.94,0,0,0,63.94,0h0a9.9,9.9,0,0,0-9.88,8H22a6,6,0,0,0-6,6V122a6,6,0,0,0,6,6h84a5.94,5.94,0,0,0,6-6V14A5.85,5.85,0,0,0,110.13,9.69ZM55.86,12a2,2,0,0,0,2-2,5.91,5.91,0,0,1,6.08-6h0A5.88,5.88,0,0,1,68.4,5.86,6.19,6.19,0,0,1,70,10a2,2,0,0,0,2,2H84V24H44V12ZM108,122a2,2,0,0,1-2,2H22a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H40V26a2,2,0,0,0,2,2H86a2,2,0,0,0,2-2V12h17.77a2.38,2.38,0,0,1,1.63.61A1.85,1.85,0,0,1,108,14Z" />
      <path d="M98,20H94a2,2,0,0,0,0,4h2v88H32V24h2a2,2,0,0,0,0-4H30a2,2,0,0,0-2,2v92a2,2,0,0,0,2,2H98a2,2,0,0,0,2-2V22A2,2,0,0,0,98,20Z" />
      <path d="M66,48H88a2,2,0,0,0,0-4H66a2,2,0,0,0,0,4Z" />
      <path d="M66,60H82a2,2,0,0,0,0-4H66a2,2,0,0,0,0,4Z" />
      <path d="M46,59.8a2,2,0,0,0,1.41.58h.09A2,2,0,0,0,49,59.67L59.53,47a2,2,0,1,0-3.06-2.57l-9.19,11-5.87-5.86a2,2,0,0,0-2.82,2.83Z" />
      <path d="M88,76H66a2,2,0,0,1,0-4H88a2,2,0,0,1,0,4Z" />
      <path d="M82,88H66a2,2,0,0,1,0-4H82a2,2,0,0,1,0,4Z" />
      <path d="M47.41,88.38A2,2,0,0,1,46,87.8l-7.41-7.41a2,2,0,1,1,2.82-2.83l5.87,5.86,9.19-11A2,2,0,1,1,59.53,75L49,87.67a2,2,0,0,1-1.45.71Z" />
    </svg>
  );
}
export default Share;
