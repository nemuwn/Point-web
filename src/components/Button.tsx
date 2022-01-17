import styled from "styled-components";

export const Btn1 = styled.div`
  border-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  margin-right: 10px;
  :hover {
    color: white;
    background-color: black;
    transition: all ease-in-out 0.5s;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1.208em;
    font-weight: 600;
  }
`;
export const SwitchButton = styled.div<{ backColor: string }>`
  border: 22.2px solid transparent;
  border-radius: 50%;
  background-color: ${(props) => props.backColor};
  border-color: ${(props) => props.backColor};
  margin-right: 20px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
`;

export const Btn = ({
  id,
  text,
  submit,
}: {
  id: number;
  text: string;
  submit: () => void;
}) => {
  return (
    <Btn1 onClick={submit}>
      <h3>{text}</h3>
    </Btn1>
  );
};
export const PrevBtn = styled.div`
  border-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  margin-right: 10px;

  position: absolute;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  top: 800px;
  z-index: 10;

  justify-content: center;

  border-color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
`;

export const NexBtn = styled.div`
  border-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  margin-right: 10px;

  position: absolute;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  top: 800px;
  z-index: 10;

  justify-content: center;

  border-color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
`;
