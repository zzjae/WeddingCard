import classNames from 'classnames/bind';
import styles from './Invitation.module.scss';
import Section from '@shared/Section';
import Text from '@shared/Text';
const cx = classNames.bind(styles);
function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <IconPost className={cx('icon-post')} />
      <Text>{message}</Text>
    </Section>
  );
}

function IconPost({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M4.50824 1.50495C3.12432 1.50039 2 2.62101 2 4.00494V15.5593C2 16.9401 3.11929 18.0593 4.5 18.0593H8.08579L11.2929 21.2664C11.6834 21.657 12.3166 21.657 12.7071 21.2664L15.9142 18.0593H19.5C20.8807 18.0593 22 16.9401 22 15.5593V4.05441C22 2.67691 20.8857 1.55896 19.5082 1.55442L4.50824 1.50495ZM12.1213 5.10779C10.5768 4.14003 8.51518 4.32796 7.17157 5.67157C5.60948 7.23367 5.60948 9.76633 7.17157 11.3284L11.4142 15.5711C11.6017 15.7586 11.8561 15.864 12.1213 15.864C12.3865 15.864 12.6409 15.7586 12.8284 15.5711L17.0711 11.3284C18.6332 9.76633 18.6332 7.23367 17.0711 5.67157C15.7275 4.32796 13.6658 4.14003 12.1213 5.10779Z"
        fill="black"
        fill-rule="evenodd"
      />
    </svg>
  );
}
export default Invitation;
