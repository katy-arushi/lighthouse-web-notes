import Result from "../Result";
import { render, fireEvent } from '@testing-library/react';


test("properly showes the high scores after getting them from axios", () => {

    const {getByTestId} = render(<Result message={"Waitning!"}/>);
    expect(getByTestId("result_footer")).toHaveTextContent("Waitning");

})

import axios from "axios";

jest.mock("axios");

const data = [
    {
      id: 1,
      name: 'Alice',
      points: 15
    },
    {
      id: 2,
      name: 'Bob',
      points: 10
    },
    {
      id: 3,
      name: 'Carol',
      points: 5
    },
  ];

  test("can display data from API call", () => {


    //Render the componment
    // look for the High Scores button
    //click on the button
    // expect Carol to be there
    axios.get.mockResolvedValue({data});

    const {findByText, getByTestId, debug} = render(<Result message="Waiting"/>)
    const highestScoresButton = getByTestId("high-scores");
    fireEvent.click(highestScoresButton);

    debug();
    return findByText("Carol", {exact: false});

  })

