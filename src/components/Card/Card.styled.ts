import styled from 'styled-components';

export const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
    position:fixed;
    z-index:0;
    display:flex;
    top:0;
    align-items: center;    
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  margin:0 auto;
    width: 300px;
  text-align: center;
    clip-path: polygon(
        0% 20px, /* top left */
        20px 0%, /* top left */
        calc(100% - 80px) 0%, /* top right */
        100% 20px, /* top right */
        100% calc(100% - 20px), /* bottom right */
        calc(100% - 20px) 100%, /* bottom right */
        20px 100%, /* bottom left */
        0 calc(100% - 20px) /* bottom left */
    );
    `;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;

export const CardSubtitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
  margin-top: 5px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 20px;
`;

export const CardTemp = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const CardFeelsLike = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 5px;
`;

export const CardDate = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: 5px;
`;

export const CardIcon = styled.img`
  height: 80px;
`;