/*
NULL Object Pattern 
-------------------------

  - references (objects) in Java may be null - which means empty objects essentially (we can not do any operations).

  - it can be complicated to deal with null references to avoid NullPointerException - if-else statements and try-catch blocks 

  - Good programming practice to avoid NULL references (for example return an empty ArrayList instead of null etc.);

                                    RealCustomer 
                                    getCustomer(); 
                             /
                            /
            ABSTRACT CLASS  
               isNull()   \
             getCustomer() \
                               NullCustomer 
                              getCustomer() 
*/
