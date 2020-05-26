import styled from 'styled-components';

const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  top: 0; 
  left: 0;
  position: fixed;
  z-index: 99999;
  justify-content: center;
  backdrop-filter: blur(10px);
  `;
  
  const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 3px;
    height: 45vh;
    width: 65vw;
  
    .modal__content--left {
      margin: 2.5rem;
      display: inline-block;
      width: 40rem;
    }

    .modal__content--right {
      margin: 2.5rem;
      width: 55rem;

      h2 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
      }

      h3 {
        font-size: 2.5rem;
        margin: .1rem;
      }

      button {
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        border: none;
        font-size: 3rem;

        &:hover {
          color: red;
        }
    }

    .modal__container--details {
      font-size: 2rem;
    }

    .modal__container--closing-notes {
      position: absolute;
      bottom: 0;
      margin: 0;
      margin-bottom: 2.5rem;
      font-size: 1.7rem;
    }
  }
`;


export { ModalContainer, ModalContent };