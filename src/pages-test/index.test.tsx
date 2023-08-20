import MainScreen from "../pages";
import "@testing-library/jest-dom";
import { render, screen, act } from "../../config/test-utils";
import userEvent from "@testing-library/user-event";
import * as reactQueryFirebase from "@react-query-firebase/firestore";
import { generateQueryResponse } from "../../mock/reactQueryResponse";

describe("Test screen", () => {
  const _render = () => {
    render(<MainScreen />);
  };

  jest
    .spyOn(reactQueryFirebase, "useFirestoreDocumentData")
    .mockReturnValue(
      generateQueryResponse({ data: { field: "some string" } }) as any
    );

  test("Should show success text", async () => {
    _render();

    const input = screen.getByRole("textbox", {
      name: /input/i,
    });

    await act(() => userEvent.type(input, "typing"));

    const submitButton = screen.getByRole("button", {
      name: /submt/i,
    });

    await act(() => userEvent.click(submitButton));

    const successCopy = await screen.findByText(/success/i);

    expect(successCopy).toBeInTheDocument();
  });

  test("Should show input error", async () => {
    _render();
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });

    await act(() => userEvent.click(submitButton));

    const inputError = await screen.findByText(/this field is required/i);
    expect(inputError).toBeInTheDocument();
  });
});
