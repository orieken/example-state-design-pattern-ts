import { Job } from "../job"
import { Stateable } from "../stateable.interface"

export class JobCompletedState implements Stateable {
  job: Job;

  constructor(job: Job) {
    this.job = job
  }

  acceptJob() {
    console.log('The job is Completed');
  }

  completeJob() {
    console.log('The job is Completed');
    this.job.setState(this.job.completedState);
  }

  errorJob() {
    console.log('The job is Completed');
  }

  pauseJob() {
    console.log('The job is Completed');
  }

  processJob() {
    console.log('The job is Completed');
  }

  uncertainJob() {
    console.log('The job is Completed');
  }
}
