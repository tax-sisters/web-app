import styled from 'styled-components';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Div = styled.div`
  border: 1px solid red;
`;

const ReviewsSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
    },
    [
      // add plugins here
    ],
  );

  return (
    <Div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">1</div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div>
    </Div>
  );
};

export default ReviewsSlider;
