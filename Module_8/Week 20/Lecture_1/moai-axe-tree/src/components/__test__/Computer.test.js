import Computer from "../Computer";
import {render, fireEvent} from '@testing-library/react'
import React from 'react';

describe("testing computer component", () => {

    let fakeState;

    beforeEach(() => {
        fakeState = {
            isCheating: false,
            gameCheating : jest.fn()
        }
    })

    it("should have the class cheating when user clicks on the robot icon", () => {
        fakeState.isCheating = true;
        const {queryByText} = render(<Computer {...fakeState}/>);
        
        const robotButton = queryByText("🤖");

        expect(robotButton).toHaveClass("cheating")

    }),

    it("should not have the class cheating when user clicks on the robot icon", () => {
        const {queryByTestId} = render(<Computer {...fakeState}/>);
        
        const robotButton = queryByTestId("computerIcon");

        expect(robotButton).not.toHaveClass("cheating")

    })

    it("should toggle the class cheating when user clicks on the robot icon", () => {
        const {queryByTestId} = render(<Computer {...fakeState}/>);

        const robotButton = queryByTestId("computerIcon");

        fireEvent.click(robotButton);

        expect(robotButton).toHaveClass("cheating")

    })



})