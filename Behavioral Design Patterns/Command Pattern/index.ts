/**
 *  THE COMMAND PATTERN
 *
 *  - what is the motivation behind command pattern?
 *  - the aim is to achieve seperation of concerns.
 *
 *
 *
 *     APPLICATION <----------C------------- Save Button
 *                            o
 *   business logic <---------m------------- Update Button
 *                  <---------m------------- Delete Button
 *                            a
 *                            n
 *                            d
 *   - bacause of the abstract layer we can achieve loosely coupled design
 *   - the user interface components know nothing about the underlaying
 *   - and we can change the sender's behaviour at run-time.
 * 
 *   
 */
