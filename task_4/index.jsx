import { useState, ReactNode } from "react";

type HocBlockProps = {
  mouseEnterCallback: () => void;
  children: ReactNode;
}

export const HocBlock = ({mouseEnterCallback, children}: HocBlockProps) => {
  const [isActive, setIsActive] = useState(false);

  const mouseEnterHandler = () => {
    setIsActive(true);
    mouseEnterCallback();
  };

  return (
      <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
        {children}
      </div>
  )
}

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
  return (
    <HocBlock mouseEnterCallback={mouseEnterCallback}>
      <img src={imgSrc} alt={imgAlt} />
    </HocBlock>
  );
};

export const Block2 = ({ mouseEnterCallback, content }) => {
  return (
    <HocBlock mouseEnterCallback={mouseEnterCallback}>
      <p>{content}</p>
    </HocBlock>
  );
};

export const Block3 = ({ mouseEnterCallback, userData }) => {
  return (
    <HocBlock mouseEnterCallback={mouseEnterCallback}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </HocBlock>
  );
};
