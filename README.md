# example-state-design-pattern-ts

* pending -> accepted -> processed -> completed
* processed -> completed, can not move back to accepted
* completed, can move to any other state
* paused can go to any new state except completed
* error can move to any state
* unknown can move to any state
* any state can throw an error or unknown except completed
