import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const StyledLink = styled(Typography)`
  flex-grow: 1;
`;

type BasicLinkProps = {
  children: React.ReactNode;
  variant: string;
};

const BasicLink = ({ children, ...props }: BasicLinkProps) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default BasicLink;