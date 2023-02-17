import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <span>
          Candidate: <b>Francesco Stallo</b>
        </span>
      </div>
      <div className='footer__right'>DeepOpinion Senior Frontend Coding Challenge</div>
    </footer>
  );
};
export default Footer;
