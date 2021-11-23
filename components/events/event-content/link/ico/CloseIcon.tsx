const CloseIcon = ({ onClick }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="tourLink__close__absolute"
      onClick={() => onClick()}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M25.4558 25.456C30.1421 20.7697 30.1421 13.1717 25.4558 8.48542C20.7696 3.79913 13.1716 3.79913 8.48528 8.48542C3.79899 13.1717 3.79899 20.7697 8.48528 25.456C13.1716 30.1423 20.7696 30.1423 25.4558 25.456Z"
          fill="#EB5757"
        />
        <path
          d="M12.8975 12.8977L21.3827 21.383"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2128 12.728L12.7275 21.2133"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 16.9707) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
