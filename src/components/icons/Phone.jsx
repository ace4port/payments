import React from 'react'

const PhoneIcon = ({ active = true, variant = 'filled', ...props }) => {
  const fillColor = variant === 'outlined' ? '#FFF' : active ? '#363865' : '#b1b1b1'
  const strokeColor = variant === 'outlined' ? '#FFF' : active ? '#363865' : '#b1b1b1'
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.93932 5.0619L8.93928 5.0619C8.63219 5.08003 8.34913 5.21693 8.10299 5.42638L8.08768 5.43941L8.07347 5.45362L5.70174 7.82535C5.22301 8.2695 5.07259 8.90256 5.06462 9.45787C4.99772 10.9061 5.72405 12.5052 6.27808 13.6519L6.28198 13.6599L6.28618 13.6679C7.80508 16.5431 10.212 18.9021 12.8036 20.7874L12.8142 20.7951L12.8252 20.8023C14.3987 21.8249 16.3907 22.8744 18.5395 22.9387L18.5473 22.939L18.5551 22.939C19.0908 22.9383 19.7055 22.7947 20.1809 22.3092L22.5569 19.9519L22.557 19.952L22.5634 19.9453C23.1548 19.3366 23.0424 18.3494 22.2738 17.8676L22.2739 17.8675L22.2624 17.8607L18.8086 15.8219L18.691 15.7525H18.6552C18.0651 15.4943 17.4033 15.7258 16.9997 16.0317L16.9706 16.0538L16.945 16.0799L16.0022 17.04C15.9896 17.0376 15.9758 17.0344 15.9613 17.0303L15.9458 17.026L15.9301 17.0227C15.4145 16.914 14.932 16.624 14.4479 16.2303C14.1229 15.966 13.8301 15.6847 13.5315 15.3978C13.3721 15.2448 13.2111 15.0901 13.0427 14.9355L13.0426 14.9355C12.2012 14.1635 11.3113 13.1047 10.9744 11.999L11.7696 11.2039L11.7696 11.2039L11.7734 11.2C12.2041 10.7597 12.3816 10.0787 12.0824 9.44019L12.0774 9.42952L12.0719 9.41911L10.1579 5.78923L10.1476 5.76971L10.1356 5.75117C9.8818 5.35825 9.4731 5.03042 8.93932 5.0619ZM0.5 14C0.5 6.54415 6.54415 0.5 14 0.5C21.4558 0.5 27.5 6.54415 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54415 27.5 0.5 21.4558 0.5 14Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  )
}

export default PhoneIcon