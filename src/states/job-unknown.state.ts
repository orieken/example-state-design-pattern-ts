import { Job } from "../job"
import { Stateable } from "../stateable.interface"

export class JobUnknownState implements Stateable {
  job: Job;

  constructor(job: Job) {
    this.job = job
  }

  acceptJob() {
    console.log('The job is now Accepted');
    this.job.setState(this.job.acceptedState);
  }

  completeJob() {
    console.log('The job is Completed');
    this.job.setState(this.job.completedState);
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
    console.log('This job is now being processed.');
    this.job.setState(this.job.processingState);
  }

  uncertainJob() {
    console.log('This jobs status is unknown.');
    this.job.setState(this.job.unknownState);
  }
}