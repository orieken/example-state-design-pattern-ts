import { Job } from "../src/job";

// pending -> accepted -> processed -> completed
// processed -> completed, can not move back to accepted
// completed, can move to any other state
// paused can go to any new state except completed
// error must be accepted again
// unknown must be accepted again
// any state can throw an error or unknown except completed

describe("Job States", () => {
  let job: Job;

  beforeEach(() => {
    job = new Job();
  })
  it("Starts in pending state", () => {
    expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
  });
  
  describe("From Pending State", () => {

    it("is already in Pending State", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
    })

    it("Can move to Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    });
    
    it("Can Error", () => {
      job.getCurrentState().errorJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobErroredState');
    })

    it("Can be Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobUnknownState');
    })

    it("Cannot go to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
    })
    
    it("Cannot be Processed", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
    })
  })

  describe("From Accepted State", () => {
    beforeEach(() => {
      job.getCurrentState().acceptJob();
    })

    it("Cannot move back to pending", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    })

    it("is already Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    });
    
    it("Can Error", () => {
      job.getCurrentState().errorJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobErroredState');
    })

    it("Can be Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobUnknownState');
    })

    it("Cannot go to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    })
    
    it("Can Process Job", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    })
  })

   describe("From Processing State", () => {
    beforeEach(() => {
      job.getCurrentState().acceptJob();
      job.getCurrentState().processJob();
    })

    it("Cannot move back to pending", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    })

    it("is already Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    });
    
    it("Can Error", () => {
      job.getCurrentState().errorJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobErroredState');
    })

    it("Can be Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobUnknownState');
    })

    it("Cannot go to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })
    
    it("Can Process Job", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    })
  })
  describe("From Completed State", () => {
    beforeEach(() => {
      job.getCurrentState().acceptJob();
      job.getCurrentState().processJob();
      job.getCurrentState().completeJob();
    })

    it("Cannot move back to pending", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })

    it("is already Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    });
    
    it("Can not Error", () => {
      job.getCurrentState().errorJob()
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })

    it("Can be Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })

    it("Cannot go to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })
    
    it("Can Process Job", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })
  })

    describe("From Error State", () => {
    beforeEach(() => {
      job.getCurrentState().errorJob()
    })

    it("Can move back to pending", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
    })

    it("Can move back to Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    });
    
    it("Can move back to Error", () => {
      job.getCurrentState().errorJob()
      expect(job.getCurrentState().constructor.name).toEqual('JobErroredState');
    })

    it("Can move back to Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobUnknownState');
    })

    it("Can move back to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })
    
    it("Can move back to Processing", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    })
  })

  describe("From Error State", () => {
    beforeEach(() => {
      job.getCurrentState().uncertainJob();
    })

    it("Can move back to pending", () => {
      job.getCurrentState().pauseJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobPendingState');
    })

    it("Can move back to Accepted", () => {
      job.getCurrentState().acceptJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobAcceptedState');
    });
    
    it("Can move back to Error", () => {
      job.getCurrentState().errorJob()
      expect(job.getCurrentState().constructor.name).toEqual('JobErroredState');
    })

    it("Can move back to Unknown", () => {
      job.getCurrentState().uncertainJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobUnknownState');
    })

    it("Can move back to Completed", () => {
      job.getCurrentState().completeJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobCompletedState');
    })
    
    it("Can move back to Processing", () => {
      job.getCurrentState().processJob();
      expect(job.getCurrentState().constructor.name).toEqual('JobProcessingState');
    })
  })
})