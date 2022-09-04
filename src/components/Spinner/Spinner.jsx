import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeCircles, ThreeDots } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';
import { Loader } from './Spiner.styled';

const threeCircles = (
  <Box display="flex" justifyContent="center" mt={6}>
    <ThreeCircles
      color="red"
      outerCircleColor="blue"
      middleCircleColor="green"
      innerCircleColor="grey"
    />
  </Box>
);

const threeDots = (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#560668"
    ariaLabel="three-dots-loading"
    visible={true}
  />
);

const customSpinner = (
  <Loader>
    <span style={{ '--i': 1 }}></span>
    <span style={{ '--i': 2 }}></span>
    <span style={{ '--i': 3 }}></span>
    <span style={{ '--i': 4 }}></span>
    <span style={{ '--i': 5 }}></span>
    <span style={{ '--i': 6 }}></span>
    <span style={{ '--i': 7 }}></span>
    <span style={{ '--i': 8 }}></span>
    <span style={{ '--i': 9 }}></span>
    <span style={{ '--i': 10 }}></span>
    <span style={{ '--i': 11 }}></span>
    <span style={{ '--i': 12 }}></span>
    <span style={{ '--i': 13 }}></span>
    <span style={{ '--i': 14 }}></span>
    <span style={{ '--i': 15 }}></span>
    <span style={{ '--i': 16 }}></span>
    <span style={{ '--i': 17 }}></span>
    <span style={{ '--i': 18 }}></span>
    <span style={{ '--i': 19 }}></span>
    <span style={{ '--i': 20 }}></span>
  </Loader>
);

const Spiners = {
  threeCircles,
  threeDots,
  customSpinner,
};

export default Spiners;
