import { Stateable } from "./stateable.interface";
import { JobProcessingState } from "./states/job-processing.state";
import { JobAcceptedState } from "./states/job-accepted.state";
import { JobPendingState } from "./states/job-pending.state";
import { JobErroredState } from "./states/job-errored.state";
import { JobCompletedState } from "./states/job-completed.state";
import { JobUnknownState } from "./states/job-unknown.state";


export class Job {
  completedState: Stateable;
  erroredState: Stateable;
  acceptedState: Stateable;
  processingState: Stateable;
  pendedState: Stateable;
  unknownState: Stateable;
  currentState!: Stateable;

  constructor() {
    this.processingState = new JobProcessingState(this);
    this.acceptedState = new JobAcceptedState(this);
    this.pendedState = new JobPendingState(this);
    this.erroredState = new JobErroredState(this);
    this.completedState = new JobCompletedState(this);
    this.unknownState = new JobUnknownState(this);
    
    this.setState(this.pendedState)
  }

  setState(state: Stateable) {
    this.currentState = state;
  }

  getCurrentState(): Stateable {
    return this.currentState;
  }
}
