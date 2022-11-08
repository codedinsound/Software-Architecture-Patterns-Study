/*
Visitor Pattern 
-------------------------
- we would like to do some specific operation (saving the data) on different entities...
                          Photoshop or Illustrator 

                          we may have several geometric shapes on the canvas 

                          what if we want to save all of these geometric shapes into a file?

- we have to consider the shapes one by one and save them accordingly 

        BUT IT IS NOT A FLEXIBLE SOLUTION 

- violates the single responsibility principle. 
- these shapes have nothing to do with how to save them. 
- it may violates the open / closed principle as well 
- what if we want to change the way we save the shapes? We have to change the code we have already implemented. 

"The visitor design pattern is a way of seperating an algorithm from an object structure on which it operates"

---------------------------
- so we have a visitor class that will do the save operations 
- but again there is a problem: we need different save operations for different shapes. 

- ExportVistor 
      saveRectangle(Rectangle object);
      saveCircle(Circle object); 
      saveTriangle(Triangle object);  -------------------> 

*/
