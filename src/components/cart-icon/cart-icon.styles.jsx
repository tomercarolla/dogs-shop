import styled from "styled-components";

import {ReactComponent as BagIconSvg} from '../../assets/shopping-bag.svg';

export const BagIcon = styled(BagIconSvg)`
  width: 24px;
  height: 24px;
`

export const IconContainerStyles = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  span {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`
