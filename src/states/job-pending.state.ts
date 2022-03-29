import { Job } from "../job"
import { Stateable } from "../stateable.interface"

export class JobPendingState implements Stateable {
  job: Job;

  constructor(job: Job) {
    this.job = job
  }

  acceptJob() {
    console.log('The job has been accepted');
    this.job.setState(this.job.acceptedState);
  }

  completeJob() {
    console.log('This job must be accepted first!');
  }

  errorJob() {
    console.log('This job threw an error!');
    this.job.setState(this.job.erroredState);
  }

  pauseJob() {
    console.log('This job is already pending.');
    this.job.setState(this.job.pendedState);
  }

  processJob() {
    console.log('This job must be accepted before processing can begin.');
  }

  uncertainJob() {
    console.log('This jobs status is unknown.');
    this.job.setState(this.job.unknownState);
  }
}