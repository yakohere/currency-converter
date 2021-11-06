import { useSelector } from "react-redux";
import styled, { css } from "styled-components"

const InputForm = (props) => {
    const state = useSelector(state => state.converter)

    return (
        <Wrapper>
            <h1>{props.title}</h1>

            <div className="currencies">
                {
                    state.bases?.map((e, i) =>
                        <Currency
                            active={props.active}
                            element={e}
                            key={i}
                            className="currency"
                            onClick={() => props.currencyClicked(e)}
                        >
                            {e}
                        </Currency>
                    )
                }
            </div>

            <input type="number" value={props.value} onChange={(e) => props.changeValue(e.target.value)} />
        </Wrapper>
    )
}

export default InputForm;

const Wrapper = styled.div`
    width: 40%;
    height: 100%;
    
    @media(max-width: 900px) {
        width: 100%;
    }

    .currencies {
        width: 100%;
        height: 50px;
        display: flex;
        border: 1px solid #E6E6E6;
        border-radius: 10px;
        overflow-x: scroll;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    input {
        width: 100%;
        height: 100px;
        font-size: 50px;
        margin: 10px 0;
        border: 1px solid #E6E6E6;
        border-radius: 10px;
        outline: 0;
        padding: 0 0 0 10px;
        font-weight: bold;

        :focus {
            border: 1px solid #ffffff;
            outline: 2px solid #5F77F4;
        }
    }
`;

const Currency = styled.div`
    width: 60px;
    height: 50px;
    padding: 0 10px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    border-right: 1px solid #E6E6E6;
    cursor: pointer;

    ${(props) => css`
        background-color: ${props.active === props.element ? "#5F77F4" : "#fffff"};
        color: ${props.active === props.element ? "#ffffff" : "#000000"};
    `}

    :last-child {
        border: none;
    }
`;