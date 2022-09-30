import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${p => p.theme.space[3]}px;
  width: 80px;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.accent};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};

  :not(:last-child) {
    margin-right: 20px;
  }

  box-shadow: ${p => p.theme.shadows.normal};
`;
