/** @format */

import { styled } from 'styled-components';

const CustomButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #3d70cfff;
  border-radius: 6px;
  border: none;
`;

const Button = ({ label, ...props }) => {
  return <CustomButton {...props}>{label}</CustomButton>;
};
export default Button;
