import { Box } from 'components/box';
import { Title } from './section.styled';

export const Section = ({ title, children }) => (
  <Box py={4} mx="auto" color="accent" width="600px" us="section">
    {title && <Title>{title}</Title>}
    <Box
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="550px"
    >
      {children}
    </Box>
  </Box>
);
