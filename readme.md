# PostPostman executor
The executor has the role of running the monitors.

> by using of the API its get monitor's administrative data, gets the collection of the monitor from postman api and run it.
> the run is done by npm package called **newman**

Routes:
> `/executeMonitor`:
> 1. get a postman's collection url, call postman's api and run the tests with newman, returns the test results.
