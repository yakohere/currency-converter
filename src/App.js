import styled from "styled-components"
import InputForm from "./InputForm";
import { ReactComponent as Arrows } from "./assets/arrows.svg"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFromBase, changeFromValue, changeToBase, getBases, getRates } from "./convertedReducer";

const App = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.converter)

    useEffect(() => {
        dispatch(getBases())
    }, [dispatch])

    useEffect(() => {
        dispatch(getRates(state.fromBase))
    }, [state.fromBase, dispatch])

    return (
        <Wrapper>
            <Converter>
                <InputForm
                    title="Menda bor"
                    currencyClicked={(value) => dispatch(changeFromBase(value))}
                    active={state.fromBase}
                    value={state.fromValue}
                    changeValue={(val) => dispatch(changeFromValue(val))}
                />

                <Arrows />

                <InputForm
                    title="Sotib olmoqchiman"
                    currencyClicked={(value) => dispatch(changeToBase(value))}
                    active={state.toBase}
                    value={(state.fromValue * state.rates[state.toBase]).toFixed(2)}
                    changeValue={() => { }}
                />
            </Converter>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    svg {
        width: 70px;
    }
`;

const Converter = styled.div`
    max-width: 900px;
    min-height: 300px;
    margin: 100px auto;
    border-radius: 10px;
    padding: 50px;
    box-sizing: border-box;
    box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px) {
        flex-direction: column;
        margin: 100px;
    }

    @media(max-width: 700px) {
        flex-direction: column;
        margin: 50px;
    }

    @media(max-width: 550px) {
        flex-direction: column;
        margin: 25px;
    }

    @media(max-width: 500px) {
        padding: 25px;
        margin: 15px;
    }
`;