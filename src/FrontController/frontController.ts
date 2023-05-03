import { handleRequest } from "./handleRequest";

class FrontController {
    private requestHandlers: Map<string, handleRequest>;
    constructor() {
        this.requestHandlers = new Map<string, handleRequest>();
    }
    public registerHandler(requestType: string, handler: handleRequest): void {
        if (!this.requestHandlers.has(requestType))
            this.requestHandlers.set(requestType, handler);
    }
    public async handleRequest(request: string): Promise<any> {
        const data: handleRequest = this.requestHandlers.get(request)!
        return data.handleRequest()
    }
}

export { FrontController }