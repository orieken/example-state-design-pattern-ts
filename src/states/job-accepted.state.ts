import { Job } from "../job"
import { Stateable } from "../stateable.interface"

export class JobAcceptedState implements Stateable {
  job: Job;

  constructor(job: Job) {
    this.job = job
  }

  acceptJob() {
    console.log('The job has already been accepted');
    this.job.setState(this.job.acceptedState);
  }

  completeJob() {
    console.log('This job must be processed!');
  }

  errorJob() {
    console.log('This job threw an error!');
    this.job.setState(this.job.erroredState);
  }

  pauseJob() {
    console.log('This job cannot be Pending once Accepted.');
  }

  processJob() {
    console.log('This job is being processed.');
    this.job.setState(this.job.processingState);
  }

  uncertainJob() {
    console.log('This jobs status is unknown.');
    this.job.setState(this.job.unknownState);
  }
}
