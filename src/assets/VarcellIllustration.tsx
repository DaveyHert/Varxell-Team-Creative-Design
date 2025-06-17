import { easeIn, easeInOut, motion, useInView } from "motion/react";
import { useRef } from "react";

const VarcellIllustration = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const isMobile = window.innerHeight < 768;
  const isInView = useInView(svgRef, {
    amount: isMobile ? 0.1 : 0.8,
    once: true,
  });

  return (
    <svg
      ref={svgRef}
      width='481'
      height='323'
      viewBox='0 0 481 323'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='varxell'>
        <motion.g
          id='lines'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <g id='Group 35'>
            <line
              id='Line 2'
              x1='479.714'
              y1='119.301'
              x2='0.714101'
              y2='117.354'
              stroke='url(#paint0_linear_268_143)'
              strokeOpacity='0.6'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
            <line
              id='Line 3'
              x1='479.714'
              y1='132.767'
              x2='0.714101'
              y2='130.82'
              stroke='url(#paint1_linear_268_143)'
              strokeOpacity='0.7'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
            <line
              id='Line 10'
              x1='479.714'
              y1='146.234'
              x2='0.714101'
              y2='144.287'
              stroke='url(#paint2_linear_268_143)'
              strokeOpacity='0.7'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
            <line
              id='Line 4'
              x1='479.714'
              y1='159.7'
              x2='0.714101'
              y2='157.753'
              stroke='url(#paint3_linear_268_143)'
              strokeOpacity='0.6'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
          </g>
          <line
            id='Line 5'
            x1='479.714'
            y1='295.997'
            x2='0.714101'
            y2='294.05'
            stroke='url(#paint4_linear_268_143)'
            strokeOpacity='0.6'
            strokeLinecap='round'
            strokeDasharray='6.2 6.2'
          />
          <line
            id='Line 7'
            x1='48.4766'
            y1='321.736'
            x2='45.1817'
            y2='2.73584'
            stroke='url(#paint5_linear_268_143)'
            strokeOpacity='0.6'
            strokeLinecap='round'
            strokeDasharray='6.2 6.2'
          />
          <g id='Group 34'>
            <line
              id='Line 9'
              x1='183.532'
              y1='320.524'
              x2='7.20735'
              y2='3.40694'
              stroke='url(#paint6_radial_268_143)'
              strokeOpacity='0.83'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
            <line
              id='Line 13'
              x1='204.983'
              y1='321.033'
              x2='35.1642'
              y2='0.969472'
              stroke='url(#paint7_radial_268_143)'
              strokeOpacity='0.83'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
          </g>
          <g id='Group 33'>
            <line
              id='Line 6'
              x1='284.148'
              y1='321.592'
              x2='284.148'
              y2='2.57449'
              stroke='url(#paint8_radial_268_143)'
              strokeOpacity='0.5'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
            <line
              id='Line 8'
              x1='270.527'
              y1='321.592'
              x2='270.527'
              y2='2.57449'
              stroke='url(#paint9_radial_268_143)'
              strokeOpacity='0.5'
              strokeLinecap='round'
              strokeDasharray='6.2 6.2'
            />
          </g>
        </motion.g>
        <motion.g
          id='text'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.7, ease: easeIn }}
        >
          <path
            id='Union'
            d='M71.8662 119.653L93.8066 159.025H71.8662V159.083H46.5303V119.653H71.8662Z'
            fill='url(#paint10_radial_268_143)'
          />
          <path
            id='V'
            d='M123.024 159.083H117.917L97.0942 119.654H106.099L120.486 148.253L134.871 119.653H143.882L123.024 159.083Z'
            fill='url(#paint11_radial_268_143)'
          />
          <g id='Group 27'>
            <path
              id='arxe'
              d='M159.469 157.903V153.255C159.274 153.732 158.776 154.403 157.974 155.27C157.172 156.137 156.089 156.928 154.724 157.643C153.381 158.336 151.799 158.683 149.979 158.683C147.422 158.683 145.158 158.076 143.187 156.863C141.215 155.628 139.666 153.948 138.539 151.825C137.434 149.68 136.882 147.264 136.882 144.578C136.882 141.891 137.434 139.486 138.539 137.363C139.666 135.218 141.215 133.528 143.187 132.293C145.158 131.058 147.422 130.44 149.979 130.44C151.756 130.44 153.294 130.743 154.594 131.35C155.916 131.935 156.977 132.628 157.779 133.43C158.602 134.21 159.133 134.914 159.372 135.543V131.22H167.562V157.903H159.469ZM144.974 144.578C144.974 146.073 145.31 147.394 145.982 148.543C146.653 149.669 147.542 150.547 148.647 151.175C149.752 151.803 150.954 152.118 152.254 152.118C153.619 152.118 154.832 151.803 155.894 151.175C156.956 150.525 157.79 149.637 158.397 148.51C159.025 147.362 159.339 146.051 159.339 144.578C159.339 143.104 159.025 141.804 158.397 140.678C157.79 139.529 156.956 138.63 155.894 137.98C154.832 137.33 153.619 137.005 152.254 137.005C150.954 137.005 149.752 137.33 148.647 137.98C147.542 138.608 146.653 139.497 145.982 140.645C145.31 141.772 144.974 143.083 144.974 144.578ZM182.041 157.903H173.786V131.22H182.041V135.543H181.878C182.03 135.023 182.442 134.362 183.113 133.56C183.807 132.758 184.76 132.043 185.973 131.415C187.187 130.765 188.649 130.44 190.361 130.44C191.596 130.44 192.712 130.624 193.708 130.993C194.727 131.339 195.453 131.686 195.886 132.033L192.636 138.793C192.354 138.446 191.823 138.088 191.043 137.72C190.285 137.352 189.332 137.168 188.183 137.168C186.818 137.168 185.681 137.547 184.771 138.305C183.861 139.042 183.178 139.952 182.723 141.035C182.268 142.097 182.041 143.093 182.041 144.025V157.903ZM217.427 143.668L228.835 157.903H219.605L212.422 148.77L205.272 157.903H196.627L208.035 144.253L197.797 131.22H207.092L212.91 138.988L218.955 131.22H227.437L217.427 143.668ZM238.435 146.398C238.5 147.611 238.825 148.694 239.41 149.648C239.995 150.601 240.84 151.348 241.945 151.89C243.072 152.432 244.415 152.703 245.975 152.703C247.383 152.703 248.618 152.529 249.68 152.183C250.763 151.836 251.673 151.413 252.41 150.915C253.168 150.395 253.732 149.897 254.1 149.42L257.512 154.49C256.906 155.248 256.093 155.953 255.075 156.603C254.078 157.231 252.8 157.729 251.24 158.098C249.702 158.488 247.773 158.683 245.455 158.683C242.53 158.683 239.962 158.108 237.752 156.96C235.542 155.812 233.82 154.154 232.585 151.988C231.35 149.821 230.732 147.243 230.732 144.253C230.732 141.653 231.285 139.313 232.39 137.233C233.495 135.131 235.098 133.473 237.2 132.26C239.323 131.047 241.869 130.44 244.837 130.44C247.632 130.44 250.048 130.982 252.085 132.065C254.143 133.127 255.736 134.687 256.862 136.745C257.989 138.803 258.552 141.317 258.552 144.285C258.552 144.458 258.542 144.816 258.52 145.358C258.52 145.878 258.498 146.224 258.455 146.398H238.435ZM250.817 141.295C250.796 140.602 250.579 139.854 250.167 139.053C249.777 138.251 249.16 137.568 248.315 137.005C247.47 136.442 246.343 136.16 244.935 136.16C243.527 136.16 242.367 136.431 241.457 136.973C240.569 137.514 239.897 138.186 239.442 138.988C238.987 139.768 238.727 140.537 238.662 141.295H250.817Z'
              fill='url(#paint12_radial_268_143)'
            />
          </g>
          <g id='Group 28'>
            <path
              id='ll'
              d='M270.146 157.723H262.878V118.507H270.146V157.723ZM283.617 157.723H276.349V118.507H283.617V157.723Z'
              fill='url(#paint13_radial_268_143)'
            />
          </g>
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_268_143'
          x1='0.218169'
          y1='116.352'
          x2='480.218'
          y2='118.303'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.7' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_268_143'
          x1='0.218169'
          y1='129.818'
          x2='480.218'
          y2='131.769'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.7' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_268_143'
          x1='0.218169'
          y1='143.285'
          x2='480.218'
          y2='145.236'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.7' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_268_143'
          x1='0.218169'
          y1='156.751'
          x2='480.218'
          y2='158.702'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.7' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_268_143'
          x1='480.218'
          y1='294.999'
          x2='0.218169'
          y2='293.048'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' stopOpacity='0.45' />
          <stop offset='0.59' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint5_linear_268_143'
          x1='49.4817'
          y1='322.226'
          x2='46.1765'
          y2='2.22554'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2E2E2E' stopOpacity='0.3' />
          <stop offset='0.59' stopColor='#2E2E2E' />
          <stop offset='1' />
        </linearGradient>
        <radialGradient
          id='paint6_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(184.212 320.719) rotate(-119.075) scale(363.842 132381)'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.5' stopColor='#2E2E2E' />
          <stop offset='0.942308' stopColor='#2E2E2E' stopOpacity='0.3' />
        </radialGradient>
        <radialGradient
          id='paint7_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(205.659 321.24) rotate(-117.95) scale(363.325 132381)'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.5' stopColor='#2E2E2E' />
          <stop offset='0.942308' stopColor='#2E2E2E' stopOpacity='0.3' />
        </radialGradient>
        <radialGradient
          id='paint8_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(284.648 2.07447) rotate(89.9105) scale(320.017 1)'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.710189' stopColor='#2E2E2E' />
          <stop offset='1' stopColor='#2E2E2E' />
        </radialGradient>
        <radialGradient
          id='paint9_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(271.027 322.092) rotate(-89.9105) scale(320.017 1)'
        >
          <stop stopColor='#2E2E2E' />
          <stop offset='0.59' stopColor='#2E2E2E' />
          <stop offset='1' stopColor='#2E2E2E' />
        </radialGradient>
        <radialGradient
          id='paint10_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(70.1685 139.368) rotate(0.664226) scale(23.7088 67.3031)'
        >
          <stop stopColor='#ECECEC' />
          <stop offset='1' stopColor='#A0A0A0' />
        </radialGradient>
        <radialGradient
          id='paint11_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(120.488 139.368) rotate(0.671171) scale(23.4639 67.3041)'
        >
          <stop stopColor='#ECECEC' />
          <stop offset='1' stopColor='#A0A0A0' />
        </radialGradient>
        <radialGradient
          id='paint12_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(216.19 135.493) rotate(0.232798) scale(80.9425 80.5377)'
        >
          <stop stopColor='#ECECEC' />
          <stop offset='1' stopColor='#A0A0A0' />
        </radialGradient>
        <radialGradient
          id='paint13_radial_268_143'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(273.864 137.813) rotate(1.1708) scale(13.7072 68.574)'
        >
          <stop stopColor='#ECECEC' />
          <stop offset='1' stopColor='#A0A0A0' />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default VarcellIllustration;
