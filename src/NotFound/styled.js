import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* Elementy w jednej kolumnie */
  align-items: center; /* Obrazek na środku */
  padding: 20px; /* Margines wokół całości */
`;


export const Text = styled.header`
  font-size: 36px; /* Wielkość czcionki */
  font-weight: 600;
  margin: 0 0 16px 0; /* Odstęp od dołu (dla miejsca nad obrazkiem) */
  align-self: flex-start; /* Wyrównanie tekstu do lewej w stosunku do rodzica */
  margin-left: 20px; /* Przesunięcie tekstu trochę w lewo */
`;


export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center; /* Obrazek wyśrodkowany poziomo */
  width: 100%; /* Obrazek dostosowuje się do kontenera */
  
  img {
    max-width: 100%; /* Skalowanie obrazka */
    height: auto; /* Zachowanie proporcji obrazka */
  }
`;
