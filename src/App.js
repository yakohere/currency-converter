
import styled from "styled-components"
import InputForm from "./InputForm";
import { ReactComponent as Arrows } from "./assets/arrows.svg"
import { useEffect, useState } from "react";

const App = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromBase, setFromBase] = useState("USD");
    const [toBase, setToBase] = useState("UZS");
    const [rates, setRates] = useState([]);
    const [from, setFrom] = useState("1");

    useEffect(function () {
        fetch("https://freecurrencyapi.net/api/v2/latest?apikey=e4c23da0-3b26-11ec-b946-afe9794a701d")
            .then(response => response.json())
            .then(data => setCurrencies(Object.keys(data.data)))
    }, []);

    useEffect(function () {
        fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=e4c23da0-3b26-11ec-b946-afe9794a701d&base_currency=${fromBase}`)
            .then(response => response.json())
            .then(data => setRates(data.data))
    }, [fromBase])

    return (
        <Wrapper>
            <Converter>
                <InputForm
                    currencies={["USD", ...currencies]}
                    title="Menda bor"
                    currencyClicked={(value) => setFromBase(value)}
                    active={fromBase}
                    value={from}
                    changeValue={(val) => setFrom(val)}
                />

                <Arrows />

                <InputForm
                    currencies={["UZS", "USD", ...currencies]}
                    title="Sotib olmoqchiman"
                    currencyClicked={(value) => setToBase(value)}
                    active={toBase}
                    value={(from * rates[toBase]).toFixed(2)}
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