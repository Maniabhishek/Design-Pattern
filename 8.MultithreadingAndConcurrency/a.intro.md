- lets assume we have uber like application where we provide pricing and time for each of type of the vehicle , lets say we have to calculate for uber premium , then lets say it take 2s for pricing to calculate and pricing 2s , so total 4s, and similarly for type of vehicles will also take some time , so if types then total 16s which is huge latency , hence if we do all it parallely we can do it in 2s

### What is program, process, thread 
- program is nothing but an executable files like .exe, .dmg
- process is an executable instance of a program
- thread is a smallest executable unit process. threads are subtask of process

### what are the cores in CPU
- core is an individual processing unit inside CPU. capable of executing instructions independently. Mini CPU inside CPU
- cores are actually the responsible to execute any task
- each thread needs to have one core to execute on
- in simple word , one housekeeper in building or multi-core building with multiple housekeeping staff
- 1990 single core, 2010 quad-core/ octa-core
- today 16-32+ cores
- one thread at a time per core(or more with hyperthreading) intelligent time slicing + resource sharing
- hyperthreading where T1 get a core , then T1 stops T2 takes over executes , then T1 resumes and stop then T2 again resumes

### what is context switching 
- context switching is process where the CPU stops ececuting one thread/process , saves its state and switch to the next
- doing so , if you have so much of thread and context switching is happening freqeuently then it will be a performance degradation

### What is multithreading
- multithreading is the ability of a program to run multiple threads (independent tasks) concurrently either via context switching or trully in parallel (multiple cores)
