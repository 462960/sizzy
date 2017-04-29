import styled from 'styled-components';
import flex from 'styles/flex';
import { toolbarHeight } from 'styles/sizes';
import { colorTransition } from 'styles/shared';
import { rotateIconOnOrientationChange, iconSize } from 'utils/sc-utils';

//external
import $Icon from 'react-fontawesome';

const sizes = {
  goIcon: {
    size: 20,
    offsetRight: 8,
  },
};

export const Toolbar = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  ${flex.spaceBetween}
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 9;
  transition: ${colorTransition};
  width: 100%;
  height: ${toolbarHeight}px;
  
  ${p => p.theme.toolbarStyle}
  
  padding: 0 30px;
`;

export const ToolbarButton = styled.button`
 margin-right: 10px;
 min-width: 40px;
 cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
 background: none;
 border: none;
 outline: none;
 color: ${p => p.theme.color};
 font-size: 14px;
 border-radius: 3px;
 transition: ${colorTransition};
 padding: 6px 10px;
 font-weight: 100; 
 opacity: ${p => (p.disabled ? 0.3 : 1)};
 ${p => p.theme.buttonStyle}
`;

export const Zoom = styled.div`
  ${flex.horizontal}
  color: ${p => p.theme.color};
`;

export const ZoomLabel = styled.div`
`;

export const ZoomLevel = styled.div`
  font-weight: 400;
  margin: 0 10px;
`;

export const ToolbarButtons = styled.div`
  ${flex.horizontal}
  margin-right: 15px;
`;

export const ToolbarRightSide = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const ButtonIcon = styled($Icon)`
  color: white;
  cursor: pointer;
  font-size: 21px !important;
  transition: ${colorTransition};
  ${rotateIconOnOrientationChange}
`;

export const Filters = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const AppName = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: ${p => p.theme.color};
  margin-right: 30px;
`;

export const ToolbarLeft = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const UrlInput = styled.input`
  font-size: 14px;
  width: 100%;
  height: 100%;
  margin-right: 35px;
  padding: 8px ${sizes.goIcon.size + sizes.goIcon.offsetRight * 2}px 8px 8px;
  border: none;
  border-bottom-color: #825acb;
  border-radius: 5px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,.2);
  outline: none;
  font-weight: 300;
  
  ${p => p.theme.urlInputStyle}
`;

export const UrlWrap = styled.div`
   width: 260px;
   height: 35px;
   position: relative;
`;

export const GoIcon = styled($Icon)`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin: auto;
  right: ${sizes.goIcon.offsetRight}px;
  transition: color 100ms linear;
  
  ${iconSize(20)}
  
  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
  
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;
