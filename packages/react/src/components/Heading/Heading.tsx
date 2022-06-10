import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: CSS.Property.TextAlign;
  casing?: CSS.Property.TextTransform;
  children: string;
  decoration?: CSS.Property.TextDecoration;
}

const Component = styled.h1`
  font-family: 'Roboto', sans-serif;
  ${({ align }: HeadingProps) => align && `text-align: ${align};`}
  ${({ casing }: HeadingProps) => casing && `text-transform: ${casing};`}
  ${({ decoration }: HeadingProps) => decoration && `text-decoration: ${decoration};`}
`;

const Heading: React.FC<HeadingProps> = ({ as = 'h1', align, casing, children, decoration }) => {
  return (
    <Component as={as} align={align} casing={casing} decoration={decoration}>
      {children}
    </Component>
  );
};

export default Heading;
