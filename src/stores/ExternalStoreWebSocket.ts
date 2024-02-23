import { ExternalStoreArray } from "./ExternalStoreArray";

export class ExternalStoreWebSocket extends ExternalStoreArray<string> {
  socket?: WebSocket;
  url: string;

  constructor(url: string, defaultValue: string[]) {
    super(defaultValue);
    this.url = url;
    this.send = this.send.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(event: MessageEvent) {
    this.push(event.data);
  }

  openSocket() {
    let resolve: (value: WebSocket) => void;
    const p = new Promise<WebSocket>((res) => {
      resolve = res;
    });
    if (!this.socket || this.socket.readyState > 1) {
      this.socket = new WebSocket(this.url);
      this.socket.addEventListener("open", () => resolve(this.socket!));
    } else {
      resolve!(this.socket);
    }
    return p;
  }

  async send(...args: Parameters<WebSocket["send"]>) {
    return this.openSocket().then(() => {
      return this.socket?.send(...args);
    });
  }

  subscribe(listener: () => void): () => void {
    if (this.listeners.length === 0) {
      this.openSocket().then(() => {
        this.socket!.addEventListener("message", this.handleMessage)
      });
    }
    const unmount = super.subscribe(listener);
    return () => {
      unmount();
      if (this.listeners.length === 0) {
        this.socket!.removeEventListener("message", this.handleMessage);
      }
    }
  }
}
