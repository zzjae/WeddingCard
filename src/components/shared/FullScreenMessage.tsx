import styles from './FullScreenMessage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
interface FullScreenMessageProps {
  type: 'loading' | 'error';
}
function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요 잠시 후 다시 시도해 주세요.
        </>
      )}
    </div>
  );
}

function Heart() {
  return (
    <svg
      className={cx('icon-heart')}
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path
            d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271 C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1 C283.3,86.999,310.67,59.628,365.4,59.628z"
            style={{ fill: '#FF7979' }}
          />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  );
}

function Error() {
  return (
    <svg
      className={cx('icon-error')}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path
        d="M21.74,18.51,14.16,3.33a2.42,2.42,0,0,0-4.32,0L2.26,18.51A2.4,2.4,0,0,0,4.41,22H19.59a2.4,2.4,0,0,0,2.15-3.49ZM12,17a1,1,0,1,1,1-1A1,1,0,0,1,12,17Zm1-5a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z"
        fill="#464646"
      />
    </svg>
  );
}
export default FullScreenMessage;
