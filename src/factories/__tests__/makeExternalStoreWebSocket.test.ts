import WS from "jest-websocket-mock";

import { makeExternalStoreWebSocket } from "../makeExternalStoreWebSocket";
import { act, renderHook } from "@testing-library/react-hooks";
import { Suspense } from "react";

const WEBSOCKET_URL = "ws://localhost:1234";

const server = new WS(WEBSOCKET_URL);

describe("makeExternalStoreWebSocket", () => {
  test("API", async () => {
    const S = makeExternalStoreWebSocket(WEBSOCKET_URL);
    const { result, rerender } = renderHook(() => S.useValue(), { wrapper: Suspense });

    // Simulated Suspense
    await act(async () => {
      await server.connected;
      await S.store.openSocket();
    });

    expect(result.current).toEqual("");

    act(() => {
      server.send("test");
    });

    expect(result.current).toEqual("test");

    await act(async () => {
      await S.store.openSocket();
      server.send("next value");
    });

    expect(result.current).toEqual("next value");

    S.send("one, two");
    expect(server).toReceiveMessage("one, two");
  });
});
