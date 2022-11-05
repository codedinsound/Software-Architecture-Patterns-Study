/*
TEMPLATE PATTERN 
-------------------------
- what is the motivation behind template pattern? 
- there are several operations and procedure in software engineering that are very similar to each other. 


        Football                Basketball 
        --------                --------
        initialize();           initialize(); 
        startGame();            startGame(); 
        finishGame();           finishGame(); 

- subclasses will override the specific steps and decide the concrete behaviours of the modules 

        Template Pattern <--------------------------------> Strategy Pattern 

    template pattern is based                            strategy pattern is based on composition 
    on inheritance usually

    it operates on class level                          + it operates on object level which means it is 
    which means it is static                              dynamic. (We can change behaviour at runtime)
                                                          Usually strategy pattern is more flexible!!!
*/
