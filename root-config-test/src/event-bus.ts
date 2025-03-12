class EventBus {
    private static instance: EventBus;
    private eventTarget: EventTarget;
  
    private constructor() {
      this.eventTarget = document.createElement('div');
    }
  
    public static getInstance(): EventBus {
      if (!EventBus.instance) {
        EventBus.instance = new EventBus();
      }
      return EventBus.instance;
    }
  
    public dispatchEvent(eventName: string, detail: any): void {
      const event = new CustomEvent(eventName, { detail });
      this.eventTarget.dispatchEvent(event);
    }
  
    public addEventListener(eventName: string, callback: (event: CustomEvent) => void): void {
      this.eventTarget.addEventListener(eventName, callback as EventListener);
    }
  
    public removeEventListener(eventName: string, callback: (event: CustomEvent) => void): void {
      this.eventTarget.removeEventListener(eventName, callback as EventListener);
    }
  }
  
  export default EventBus.getInstance();