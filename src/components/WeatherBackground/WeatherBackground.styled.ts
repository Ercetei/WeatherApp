import styled from 'styled-components';

export interface WeatherBackgroundWrapperProps {
    bgColor: string;
}

export interface CloudsProps {
    bgImg: string;
}

export interface ParticleProps {
    bgImg: string;
}

export const WeatherBackgroundWrapper = styled.div<WeatherBackgroundWrapperProps>`
    width:100%;
    height:100%;
    position: fixed;
    z-index: -1;
    background: ${props => props.bgColor };
    left: 0;
    top: 0;
`;

export const Clouds = styled.div<CloudsProps>`
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    height: 990px;
    background-image: url(${props => props.bgImg });
    width: 1000px;
    background-position: bottom right;
    background-size: cover;
    -webkit-animation: move 5s ease-out infinite normal;
    animation: move 5s ease-out infinite normal;

    @-webkit-keyframes move {
        0% {
          right:8px;
        }
      
        25% {
            right:0px;
        }
      
        60% {
          right:5px;
        }
      
        100% {
          right:8px;
        }
      }
      
      @keyframes move {
        0% {
            right:8px;
          }
        
          25% {
              right:0px;
          }
        
          60% {
            right:5px;
          }
        
          100% {
            right:8px;
          }
      }
`;

export const Mist = styled.div`
    background:rgba(150,150,150,0.95);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:0;
`;

export const Star = styled.div`
    z-index: 0;
    top: 20px;
    position: absolute;
    width: 450px;
    left: 5%;
    -webkit-animation: breathing 2.5s ease-out infinite normal;
    animation: breathing 2.5s ease-out infinite normal;

    @-webkit-keyframes breathing {
        0% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      
        25% {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
        }
      
        60% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      
        100% {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
      
      @keyframes breathing {
        0% {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }
      
        25% {
          -webkit-transform: scale(0.95);
          -ms-transform: scale(0.95);
          transform: scale(0.95);
        }
      
        60% {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }
      
        100% {
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
`;

export const Particles = styled.div<ParticleProps>`
    /*adding background to section
    and animation named color-change*/
    
    position: absolute;
    bottom:0;
    right:0;
    width: 100%;
    height: 650px;
    animation-delay: 1s;

/*adding rain img and making opacity 0*/
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 80%;
        height: 100%;
        background-image: url(${props => props.bgImg });
        animation: rain 2s linear infinite;
        opacity: 0;
    }
    /* just changing the position of image
    of rain using keyframes*/
    @keyframes rain {
        0% {
            background-position: 0 0;
            opacity: 1;
        }

        100% {
            background-position: 0 650px;
            opacity: 1;
        }
    }

    /* applying filter at different angle
    on different interval using keyframe*/
    @keyframes color-change {
        0% {
            filter: hue-rotate(0deg);
        }
        50% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
`;

