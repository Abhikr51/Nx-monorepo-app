import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Define event interface
export interface EventData {
  type: string;
  payload: any;
}

// Create a singleton event bus
class EventBusService {
  private eventSubject = new Subject<EventData>();
  
  // Method to emit events
  emit(eventType: string, payload: any): void {
    this.eventSubject.next({ type: eventType, payload });
  }
  
  // Method to listen to specific events
  on(eventType: string): Observable<any> {
    return this.eventSubject.pipe(
      filter(event => event.type === eventType),
      map(event => event.payload)
    );
  }
}

// Export a singleton instance
export const eventBus = new EventBusService();