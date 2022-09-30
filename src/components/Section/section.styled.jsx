import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.body};
  text-align: center;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.bgaccent};

  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.heading};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.bgaccent};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};

  :not(:last-child) {
    margin-right: 20px;
  }

  box-shadow: ${p => p.theme.shadows.normal};
`;
