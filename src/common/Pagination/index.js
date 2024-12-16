import {
    ButtonsContainer,
    Counter,
    CounterNumber,
    CounterText,
    PointerLeft,
    PointerRight,
    Wrapper
} from "./styled";


export const Pagination = () => {


    return (
        <Wrapper>
            <ButtonsContainer>
                {renderButton(() => changePage(1), currentPage === 1, <PointerLeft />, <PointerLeft />, "First")}
                {renderButton(() => changePage(currentPage - 1), currentPage === 1, <PointerLeft />, null, "Previous")}
            </ButtonsContainer>
            <Counter>
                <CounterText>Page</CounterText>
                <CounterNumber>{currentPage}</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>{totalPages}</CounterNumber>
            </Counter>
            <ButtonsContainer>
                {renderButton(() => changePage(currentPage + 1), currentPage === totalPages, null, <PointerRight />, "Next")}
                {renderButton(() => changePage(totalPages), currentPage === totalPages, <PointerRight />, <PointerRight />, "Last")}
            </ButtonsContainer>
        </Wrapper>
    );
};