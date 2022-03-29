import { Job } from "../job"
import { Stateable } from "../stateable.interface"

export class JobProcessingState implements Stateable {
  job: Job;

  constructor(job: Job) {
    this.job = job
  }

  acceptJob() {
    console.log('The job has already been accepted');
  }

  completeJob() {
    console.log('This job is now completed!');
    this.job.setState(this.job.completedState);
  }

  errorJob() {
    console.log('This job threw an error!');
    this.job.setState(this.job.erroredState);
  }

  pauseJob() {
    console.log('This job has been paused.');
    this.job.setState(this.job.processingState);
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
