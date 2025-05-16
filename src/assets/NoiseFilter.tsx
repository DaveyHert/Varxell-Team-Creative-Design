const NoiseFilter = () => {
  return (
    <svg aria-hidden='true' className='noise-filter-visually-hidden'>
      <filter id='noiseFilter'>
        <feTurbulence
          baseFrequency='6.29'
          numOctaves='6'
          stitchTiles='stitch'
          type='fractalNoise'
        />
      </filter>
    </svg>
  );
};

export default NoiseFilter;
